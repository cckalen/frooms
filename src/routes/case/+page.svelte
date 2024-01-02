<!--src/routes/case/+page.svelte-->

<script lang="ts">
  import {
    ProgressBar,
    getToastStore,
    type ToastSettings,
  } from "@skeletonlabs/skeleton";
  import Draggable from "$lib/Draggable.svelte";
  import { textStore } from "$lib/textStore";
  import NoteDrawer from "$lib/NoteDrawer.svelte";
  import Icon from "@iconify/svelte";
  import AudioRecorder from "$lib/AudioRecorder.svelte";
  import { getContext, onMount } from "svelte";

  // Define an interface for the audio control context
  let audioRecorder: { stopRecordingExternally: () => void };

  function endSession() {
    audioRecorder?.stopRecordingExternally();
    // Perform other session-ending tasks
    console.log($textStore);
  }
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
</script>

<div class="  min-h-screen h-full">
  <div class="h-full casemaindiv">
    <Draggable left={50} top={130}>
      <div class="card">
        <header class="card-header text-primary-700">Essential</header>
        <section class="p-4">
          <span class="line-through">Diagnosed conditions</span><br />
          <span class="line-through">Allergies</span><br />
          Major illnesses<br />
          Family History<br />
          Medications taking<br />
          Supplements taking
        </section>
        <footer class="card-footer">-</footer>
      </div>
    </Draggable>

    <Draggable left={50} top={450}>
      <div class="card">
        <header class="card-header text-primary-700">Lifestyle</header>
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
        <footer class="card-footer">-</footer>
      </div>
    </Draggable>

    <!-- Centered upload box -->
    <div class="centerMidBox mx-auto items-center w-[500px] z-index: 0;">
      <div class="flex-grow mx-auto flex items-center mt-16 min-h-[480px]">
        <div class=" text-center flex flex-col items-center">
          <!-- svelte-ignore a11y-autofocus -->
          <input
            autofocus
            class="input text-center giantTextInput text-secondary-800"
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
    <AudioRecorder bind:this={audioRecorder} />

    <!-- End Session CTA -->
    <div class="endSessionCtaBox absolute right-4 bottom-4">
      <button
        on:click|preventDefault={endSession}
        class="btn btn-lg variant-filled-secondary min-w-[200px] drop-shadow-lg"
      >
        <Icon icon="ep:finished" class="min-h-[15px] min-w-[15px] mr-1" />End
        Session
      </button>
    </div>
    <!-- Note Drawer -->
    <div
      class="text-center notedrawerbox hover:max-h-[420px] max-h-[50px] bottom-0 duration-1000 -translate-x-1/2 shadow-lg rounded p-4 transition-all z-10 absolute left-1/2 border transform"
    >
      <span class="h3 mt-0">Note Drawer</span>
      <NoteDrawer />
    </div>
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
