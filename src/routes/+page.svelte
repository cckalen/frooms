<!--routes/+page.svelte-->
<script lang="ts">
  import SEOTags from "$lib/SEOTags.svelte";
  import {
    ProgressBar,
    getToastStore,
    type ToastSettings,
  } from "@skeletonlabs/skeleton";
  import Draggable from "$lib/Draggable.svelte";
  import { isProcessing, showResultsGrid, hideTopBar } from "$lib/store";
  const toastStore = getToastStore();
  let results: any[] = [];
  let uploadComplete = false;
  let camResults: any[] = [];

  $: if (uploadComplete) {
    $hideTopBar = false;
    setTimeout(() => {
      $isProcessing = false;
      $showResultsGrid = true;
    }, 8000);
  }

  function handleCamResults(event: CustomEvent) {
    const newResults = event.detail;
    if (Array.isArray(newResults) && newResults.length > 0) {
      camResults = newResults;
      uploadComplete = true;
    } else {
      const t: ToastSettings = {
        message: "Problem with the results list...",
        autohide: false,
        background: "variant-filled-error",
      };
      toastStore.trigger(t);
      console.error("Received data is not a non-empty array");
    }
  }

  function handleResults(event: CustomEvent) {
    const newResults = event.detail;
    if (Array.isArray(newResults) && newResults.length > 0) {
      results = newResults;
    } else {
      const t: ToastSettings = {
        message: "Problem with the results list...",
        autohide: false,
        background: "variant-filled-error",
      };
      toastStore.trigger(t);
      console.error("Received data is not a non-empty array ");
    }
  }
</script>

<SEOTags />

ss
<Draggable left={50} top={200}>
  <h1>Drag Me</h1>
</Draggable>

<style lang="postcss">
  .img-bg {
    @apply w-64 h-64 md:w-80 md:h-80;
    @apply bg-primary-400/50;
    @apply absolute z-[-1] rounded-full blur-[50px] transition-all;
  }
  .img-bg.animate {
    @apply absolute z-[0] rounded-full blur-[50px] transition-all;
    animation:
      pulse 3s cubic-bezier(0, 0, 0, 0.5) infinite,
      glow 5s linear infinite;
  }
  @keyframes glow {
    0% {
      @apply bg-primary-400/50;
    }
    33% {
      @apply bg-secondary-400/50;
    }
    66% {
      @apply bg-secondary-700/50;
    }
    100% {
      @apply bg-primary-400/50;
    }
  }
  @keyframes pulse {
    50% {
      transform: scale(1.9);
    }
  }
</style>
