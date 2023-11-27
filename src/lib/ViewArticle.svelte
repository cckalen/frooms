<script lang="ts">
  import type { ArticleType } from "$lib/model.ts";
  export let article: ArticleType;

  import SEOTags from "$lib/SEOTags.svelte";
  let metaseo: {
    pageTitle: string;
    metadescription: string;
    canonicalUrl: string;
    imageUrl: string;
  };
  updateMeta();
  function updateMeta() {
    if (article) {
      metaseo = {
        pageTitle: `${article.title} - Frooms.com.au `,
        metadescription: article.content.slice(0, 200),
        canonicalUrl: "https://fff.com/post/" + article.slug,
        imageUrl: "https://fff.com/images/" + article.image,
      };
    }
  }

  $: if (article) {
    updateMeta();
  }
</script>

<!-- lib/ViewArticle.svelte-->
<svelte:head>
  <title>{article.title}</title>
  <meta name="description" content={article.title} />
</svelte:head>

<SEOTags {metaseo} />
<article>
  <div class="p-5 mx-auto sm:p-10 md:p-20">
    <div class="flex flex-col max-w-4xl mx-auto overflow-hidden rounded">
      <img
        src={`/images/${article.image}`}
        alt=""
        class="w-full h-60 sm:h-96 dark:bg-gray-500"
      />
      <div
        class="p-6 pb-12 m-4 mx-auto -mt-16 space-y-6 sm:px-10 sm:mx-12 lg:rounded-md bg-tertiary-300"
      >
        <div class="space-y-2">
          <h2
            class="inline-block text-2xl font-semibold sm:text-3xl hover:underline text-secondary-500"
          >
            {article.title}
          </h2>
          <p class="text-xs dark:text-gray-400">
            By
            <span class="text-xs hover:underline">Martin Kekoleen</span>
          </p>
        </div>
        <div class="">
          <div class="prose text-primary-500">{@html article.content}</div>
        </div>
      </div>
    </div>
  </div>
</article>

<style>
</style>
