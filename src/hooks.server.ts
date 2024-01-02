import { redirect, type Handle } from "@sveltejs/kit";
import path from 'path';
import { promises as fs } from 'fs';
const API_KEY = "1907oisd71jds7818configciler879189jf7yh3u1df7uib31e70fbiuifbhad";
const COOKIE_PASS_VALUE = "190736d3375e4d42"; // for admin page

async function streamToBuffer(stream: ReadableStream<Uint8Array>): Promise<Buffer> {
    const chunks = [];
    const reader = stream.getReader();
    let done, value;
    while (!done) {
        ({ done, value } = await reader.read());
        if (value) {
            chunks.push(value);
        }
    }
    return Buffer.concat(chunks);
}

export const handle: Handle = async ({ event, resolve }) => {


    if (event.url.pathname.startsWith('/configadmin')) {

        const session = event.cookies.get('configadmin')

        if (session == COOKIE_PASS_VALUE) {

            return await resolve(event)
        }
        throw redirect(303, '/config')
    }

    if (event.url.pathname.startsWith('/logout')) {

        const sid = event.cookies.get('configadmin');
        if (sid) {
            event.cookies.delete('configadmin');
        }
        throw redirect(303, '/')
    }


    // this is mainly for handling storage bucket requests
    if (event.url.pathname.startsWith('/mediaserver')) {
        const imagePath = event.url.pathname.split('/mediaserver')[1];
        //https://link.storjshare.io/s/jucf5f5y7huosoxysghy7gkdggka/fof2
        const imageUrl = `https://link.storjshare.io/raw/jucf5f5y7huosoxysghy7gkdggka/fof2${imagePath}`;

        const response = await fetch(imageUrl);

        if (!response.ok) {
            return new Response("Failed to fetch image", { status: 404 });
        }

        if (response.body === null) {
            return new Response("Empty response body", { status: 404 });
        }

        const buffer = await streamToBuffer(response.body);
        // Guess content type based on file extension, defaults to "image/jpeg"
        const ext = imagePath.split('.').pop() || 'jpg';
        const contentType = `image/${ext}`;

        return new Response(buffer, {
            status: 200,
            headers: {
                "Content-Type": contentType,
                "Content-Length": buffer.length.toString(),
            },
        });
    }

    if ((event.url.pathname.startsWith('/windowspath')) || (event.url.pathname.startsWith('/windowspathlandmark'))) {
        let safePath = ""
        if (event.url.pathname.startsWith('/windowspathlandmark')) {
            const filePath = event.url.pathname.replace('/windowspathlandmark', '');
            // Regular expression to find '_h/' and replace it with '/landmark/'
            const modifiedFilePath = filePath.replace(/_h\/([^\/]+)$/, '/landmark/$1');
            safePath = path.join('c:/config/files', path.normalize(modifiedFilePath).replace(/^(\.\.[\/\\])+/, ''));
        } else {
            // Extract the file path from the URL
            const filePath = event.url.pathname.replace('/windowspath', '');
            safePath = path.join('c:/config/files', path.normalize(filePath).replace(/^(\.\.[\/\\])+/, ''));
        }
        // Create a safe path, preventing directory traversal attacks


        try {
            // Check if the file exists and is not a directory 
            const stats = await fs.stat(safePath);
            if (stats.isFile()) {
                // Read the file content
                const fileContent = await fs.readFile(safePath);
                const contentType = 'image/jpeg';


                // Respond with the file content
                return new Response(fileContent, {
                    headers: {
                        'Content-Type': contentType,
                    },
                });
            } else {
                // Handle directories or other non-file types, perhaps return a default image or a 404 response
                return new Response('Not found', { status: 404 });
            }
        } catch (error) {
            // Handle errors, such as file not found
            return new Response('Not found', { status: 404 });
        }
    }




    if (event.url.pathname.startsWith('/backend')) {
        let host = event.request.headers.get('host');
        if (host && host.includes('localhost')) {
            host = "http://localhost:8080";
            console.log('Running on localhost');
        } else {
            host = "https://myapp-7msivrj7sq-uc.a.run.app";
        }

        let bodyBuffer = null;
        if (event.request.body instanceof ReadableStream) {
            bodyBuffer = await streamToBuffer(event.request.body);
        }
        const fetchHeaders = new Headers(event.request.headers);
        fetchHeaders.set('api_key', API_KEY);
        fetchHeaders.delete('host');

        const apiPathSegment = event.url.pathname.replace('/backend', '');
        // Since parameters are now passed in FormData, we no longer extract them from the URL.
        const modifiedURL = new URL(`${host}/api${apiPathSegment}`);

        const proxyResponse = await fetch(modifiedURL.toString(), {
            method: event.request.method,
            headers: fetchHeaders,
            body: bodyBuffer,  // Pass the entire FormData as the body.
        });

        return new Response(proxyResponse.body, {
            status: proxyResponse.status,
            headers: proxyResponse.headers
        });
    }


    // this is mainly for handling storage bucket requests
    if (event.url.pathname.startsWith('/backstatus')) {
        //const jsonurl = "https://pt.wmptcd.com/api/model/feed?siteId=jasmin&psId=configure&psTool=213_1&psProgram=revs&campaignId=&category=girl&limit=500&imageSizes=&imageType=&showOffline=0&onlyMobileStreams=0&onlyFreeStatus=0&extendedDetails=0&responseFormat=json&performerId=&subAffId={SUBAFFID}&accessKey=62da1cd24d31ec1198ad1b90cf07246d&legacyRedirect=1&filters="
        const jsonurl = new URL("https://storage.googleapis.com/searelitaftdrk/feed.json")
        // Add a cache-busting parameter,  current timestamp
        jsonurl.searchParams.append('t', Date.now().toString());
        const response = await fetch(jsonurl.href);
        const jsonResponse = (await response.json()) as {
            performerIds: string[];
        };

        const cleanedList = jsonResponse.performerIds;

        return new Response(JSON.stringify(cleanedList), {
            status: response.status, // Use the status from the fetched response
            headers: {
                'Content-Type': 'application/json'
            }
        });

    }


    const response = await resolve(event);
    return response;
};
