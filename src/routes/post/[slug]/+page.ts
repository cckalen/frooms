// routes/post/slug/+page.ts
import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';
import articlesData from "../../../data/articles.json";
import type { ArticleType } from "$lib/model.ts";

export const load: PageLoad = ({ params }) => {
    const { slug } = params;  // Extract id from the params
    //console.log(slug);
    const articles = articlesData;
    const article = articles.find(a => a.slug === slug); // Remove type assertion here

    if (article) {
        const typedArticle = article as ArticleType; // Add type assertion here
        return { data: { typedArticle } };  // Return the article as a prop to the svelte component
    }

    throw error(404, 'Article not found');

};
