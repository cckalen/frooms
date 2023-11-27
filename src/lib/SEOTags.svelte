<!-- src/lib/SEOTags.svelte-->
<script>
  export let metaseo = {
    pageTitle: "Frooms",
    metadescription: "Dis",
    canonicalUrl: "https://frooms.com.au",
    imageUrl: "https://frooms.com.au/images/logo_sm.png",
  };

  $: {
    // Reactive block to update SEO tags whenever metaseo changes
    const { pageTitle, metadescription, canonicalUrl, imageUrl } = metaseo;
  }
</script>

<svelte:head>
  <title>{metaseo.pageTitle}</title>
  <meta name="description" content={metaseo.metadescription} />
  <meta
    name="robots"
    content="index, follow, max-snippet:-1, max-image-preview:large"
  />
  <link rel="canonical" href={metaseo.canonicalUrl} />

  <meta property="og:title" content={metaseo.pageTitle} />
  <meta property="og:description" content={metaseo.metadescription} />
  <meta property="og:url" content={metaseo.canonicalUrl} />
  <meta property="og:type" content="website" />
  <meta property="og:image" content={metaseo.imageUrl} />
  <!-- URL to an image you want to represent your page -->
</svelte:head>
