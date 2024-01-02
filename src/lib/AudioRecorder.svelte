<!--src/lib/AudioRecorder.svelte-->
<script lang="ts">
  import { onMount } from "svelte";
  import Icon from "@iconify/svelte";

  let isRecording = false;
  let mediaRecorder: MediaRecorder | null = null;
  let recordingInterval: ReturnType<typeof setTimeout>;

  // Exported function to stop recording
  export function stopRecordingExternally() {
    if (isRecording) {
      stopRecordingChunk();
      clearTimeout(recordingInterval);
      isRecording = false;
    }
  }
  onMount(() => {
    setupMediaRecorder();
  });

  function setupMediaRecorder() {
    navigator.mediaDevices
      .getUserMedia({ audio: true })
      .then((stream) => {
        mediaRecorder = new MediaRecorder(stream, { mimeType: "audio/webm" });
        mediaRecorder.ondataavailable = handleDataAvailable;
      })
      .catch((error) => console.error("Error accessing media devices:", error));
  }

  function toggleRecording(): void {
    isRecording = !isRecording;
    if (isRecording) {
      startRecordingChunk();
    } else {
      stopRecordingChunk();
      clearTimeout(recordingInterval);
    }
  }

  const intervalTiming = 15000;
  function startRecordingChunk(): void {
    mediaRecorder?.start();
    recordingInterval = setTimeout(() => {
      if (isRecording) {
        stopRecordingChunk();
        startRecordingChunk();
      }
    }, intervalTiming); // 15 seconds
  }

  function stopRecordingChunk(): void {
    if (mediaRecorder?.state === "recording") {
      mediaRecorder?.stop();
    }
  }

  async function handleDataAvailable(event: BlobEvent): Promise<void> {
    if (event.data && event.data.size > 0) {
      await sendAudioChunkToServer(event.data);
    }
  }
  async function sendAudioChunkToServer(blob: Blob): Promise<void> {
    console.log("Blob size:", blob.size);
    const formData = new FormData();
    console.log(mediaRecorder?.mimeType);
    const isOggFormat = mediaRecorder?.mimeType === "audio/ogg;codecs=opus";
    const fileExtension = isOggFormat ? ".ogg" : ".webm";

    formData.append("file", blob, `audio_chunk_${blob.size}.webm`);
    formData.append("show_original_response", "false");
    formData.append(
      "users_webhook_parameters",
      JSON.stringify({
        sessionID: "sessionuuid1",
        timestamp: new Date(Date.now() - intervalTiming).toISOString(),
      }),
    );
    formData.append("speakers", "2");
    formData.append("language", "en");
    formData.append("profanity_filter", "false");
    formData.append("convert_to_wav", isOggFormat ? "true" : "true");
    formData.append("providers", "openai");
    //formData.append("fallback_providers", "openai");
    formData.append(
      "webhook_receiver",
      "https://australia-southeast1-facembed.cloudfunctions.net/processt",
    );
    for (let [key, value] of formData.entries()) {
      console.log(`${key}: ${value}`);
    }

    const options = {
      method: "POST",
      headers: {
        accept: "application/json",
        authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNjc4OWI3ODAtZGEzMy00NTkyLTkzM2MtMzJmNGE4NjE0YzhmIiwidHlwZSI6ImFwaV90b2tlbiJ9.RCg37N6mL8UC-_la3x6mmbgfFumBWLBrN1yITNe21UI", // Replace with your actual token
      },
      body: formData,
    };

    fetch("https://api.edenai.run/v2/audio/speech_to_text_async", options)
      .then((response) => response.json())
      .then((response) => console.log(response))
      .catch((err) => console.error(err));
  }
</script>

<div class="audioBox absolute right-12 top-24">
  <button
    type="button"
    class="btn-icon btn-icon-xl variant-filled-primary"
    on:click={toggleRecording}
  >
    {#if isRecording}
      <span
        class="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"
      ></span>
      <Icon
        icon="fluent:mic-record-20-filled"
        class="relative z-10 min-h-[25px] min-w-[25px] mr-1 text-red-500"
      />
    {:else}
      <Icon
        icon="fluent:mic-record-20-filled"
        class="min-h-[25px] min-w-[25px] mr-1 text-white"
      />
    {/if}
  </button>
</div>
