<!--src/routes/case/+page.svelte-->

<script lang="ts">
  import {
    ProgressBar,
    getToastStore,
    type ToastSettings,
  } from "@skeletonlabs/skeleton";
  import Draggable from "$lib/Draggable.svelte";
  import { textStore } from "$lib/textStore";
  import { onMount } from "svelte";
  import SEOTags from "$lib/SEOTags.svelte";
  import NoteDrawer from "$lib/NoteDrawer.svelte";
  import Icon from "@iconify/svelte";
  let inputText = "";
  let animate = false;

  const toastStore = getToastStore();

  function handleInput() {
    animate = true;
  }

  function handleKeydown(event: KeyboardEvent) {
    if (event.key === "Enter") {
      textStore.insert(inputText);
      inputText = ""; // Clear the input
      animate = false;
    }
  }

  let isRecording = false;

  function toggleRecording() {
    isRecording = !isRecording;
    // Add your recording logic here
  }
</script>

<div class="min-h-screen casemaindiv">
  <Draggable left={50} top={130}>
    <div class="card">
      <header class="card-header">Essential</header>
      <section class="p-4">
        Diagnosed conditions<br />
        Allergies<br />
        Major illnesses<br />
        Family History<br />
        Medications taking<br />
        Supplements taking
      </section>
      <footer class="card-footer">----</footer>
    </div>
  </Draggable>

  <Draggable left={50} top={450}>
    <div class="card">
      <header class="card-header">Lifestyle</header>
      <section class="p-4">
        Morning routine <br />
        Evening routine<br />
        Diet<br />
        Habits<br />
        Sleep<br />
        Self care<br />
        Movement <br />
        Hobbies<br />
      </section>
      <footer class="card-footer">----</footer>
    </div>
  </Draggable>

  <!-- Centered upload box -->
  <div class="centerMidBox mx-auto items-center w-[500px] z-index: 0;">
    <div class="flex-grow mx-auto flex items-center mt-16 min-h-[480px]">
      <div class=" text-center flex flex-col items-center">
        <!-- svelte-ignore a11y-autofocus -->
        <input
          autofocus
          class="input text-center giantTextInput text-primary-600"
          type="text"
          placeholder="Type here..."
          bind:value={inputText}
          on:input={handleInput}
          on:keydown={handleKeydown}
        />
      </div>
      <section class="img-bg" class:animate />
    </div>
  </div>

  <!-- Audio Box -->
  <div class="audioBox absolute right-12 top-24">
    <button
      type="button"
      class="btn-icon btn-icon-xl variant-filled-primary"
      on:click={toggleRecording}
    >
      {#if isRecording}
        <!-- Ping Effect -->
        <span
          class="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"
        ></span>

        <!-- Pause Icon -->
        <Icon
          icon="fluent:mic-record-20-filled"
          class="relative z-10 min-h-[25px] min-w-[25px] mr-1 text-red-500"
        />
      {:else}
        <!-- Record Icon when not recording -->
        <Icon
          icon="fluent:mic-record-20-filled"
          class="min-h-[25px] min-w-[25px] mr-1 text-white"
        />
      {/if}
    </button>
  </div>

  <!-- End Session CTA -->
  <div class="endSessionCtaBox absolute right-4 bottom-4">
    <a
      class="btn btn variant-filled-secondary min-w-[200px]"
      href="/"
      target="_blank"
    >
      <Icon icon="ep:finished" class="min-h-[15px] min-w-[15px]  mr-1" />End
      Session
    </a>
  </div>
  <!-- Note Drawer -->
  <div
    class="text-center notedrawerbox hover:max-h-[420px] max-h-[50px] bottom-0 duration-1000 -translate-x-1/2 shadow-lg rounded p-4 transition-all z-10 absolute left-1/2 border transform"
  >
    <span class="h3 mt-0">Note Drawer</span>
    <NoteDrawer />
  </div>
</div>

<style lang="postcss">
  .card-header {
    @apply font-bold;
    @apply h5;
  }
  .giantTextInput {
    background: none;
    border: none;
    @apply text-5xl;
  }
  .img-bg {
    @apply w-64 h-64 md:w-80 md:h-80;
    @apply bg-primary-700/50;
    @apply absolute z-[-1] rounded-full blur-[50px] transition-all;
  }
  .img-bg.animate {
    @apply absolute z-[-1] rounded-full blur-[50px] transition-all;
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
