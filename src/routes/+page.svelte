<!--routes/+page.svelte-->
<script lang="ts">
  import {
    ProgressBar,
    getToastStore,
    type ToastSettings,
  } from "@skeletonlabs/skeleton";
  const toastStore = getToastStore();
</script>

Home

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
