import { fail, redirect } from '@sveltejs/kit'
import type { Action, Actions, PageServerLoad } from './$types'

const staticloginpassword = "fofcular77"

export const load: PageServerLoad = async () => {
    // todo
}

const login: Action = async ({ cookies, request }) => {
    const data = await request.formData()
    const username = data.get('username')
    const password = data.get('password')

    if (
        typeof username !== 'string' ||
        typeof password !== 'string' ||
        !username ||
        !password
    ) {
        return fail(400, { invalid: true })
    }
    let user = ""
    if (password === staticloginpassword) {
        user = username;
    } else {
        user = "";
    }

    if (!user) {
        return fail(400, { credentials: true })
    }



    cookies.set('configadmin', "190736d3375e4d42", {
        // send cookie for every page
        path: '/',
        // server side only cookie so you can't use `document.cookie`
        httpOnly: true,
        // only requests from same site can send cookies
        // https://developer.mozilla.org/en-US/docs/Glossary/CSRF
        sameSite: 'strict',
        // set cookie to expire after a month
        maxAge: 60 * 60 * 24 * 30,
    })

    // redirect the user
    throw redirect(302, '/configadmin')
}

export const actions: Actions = { login }
