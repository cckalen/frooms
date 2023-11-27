<!-- routes/post/slug/+page.svelte-->
<script lang="ts">
  import ViewArticle from "../../../lib/ViewArticle.svelte";
  import type { ArticleType } from "$lib/model.ts";
  import type { PageData } from "./$types";

  export let data: PageData;
  let typedArt = data.data.typedArticle as ArticleType;
</script>

{#if data}
  <ViewArticle article={typedArt} />
{:else}
  <p>No article found with the given ID.</p>
{/if}
