<script lang="ts">
  import { textStore } from "$lib/textStore";

  import Icon from "@iconify/svelte";
  let editingIndex: number | null = null;
  let editText = "";

  function toggleStarred(event: MouseEvent, index: number) {
    event.preventDefault(); // Prevent the default context menu
    textStore.update((texts) => {
      texts[index].starred = !texts[index].starred;
      return texts;
    });
  }

  function enableEditing(index: number, value: string) {
    editingIndex = index;
    editText = value;
  }

  function saveEdit(index: number) {
    if (editText.trim() !== "") {
      textStore.update((texts) => {
        texts[index].value = editText;
        return texts;
      });
    }
    editingIndex = null;
    editText = "";
  }
</script>

<ul class="min-w-[400px] mx-auto my-4">
  {#each $textStore as text, index}
    {#if index === editingIndex}
      <li class="mb-2">
        <input
          type="text"
          bind:value={editText}
          on:blur={() => saveEdit(index)}
          on:keydown={(e) => {
            if (e.key === "Enter") saveEdit(index);
          }}
          class="input variant-filled-secondary px-3 py-1 border rounded"
        />
      </li>
    {:else}
      <!-- svelte-ignore a11y-click-events-have-key-events -->
      <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
      <li
        class:starred={text.starred}
        on:contextmenu={(event) => toggleStarred(event, index)}
        on:click={() => enableEditing(index, text.value)}
        class="mb-2 cursor-pointer"
      >
        <span
          class:cstarred={text.starred}
          class="px-3 py-1 text-white rounded-full chip variant-filled"
          >{text.value}
          <span class="hidden" class:visible={text.starred}
            ><Icon icon="ic:round-star" class="min-h-[5px] min-w-[5px]  ml-1" />
          </span>
        </span>
      </li>
    {/if}
  {/each}
</ul>

<style lang="postcss">
  .visible {
    display: inline;
  }
  .starred {
    /* Add styling for starred items */
    font-weight: bold;
    color: gold;
  }
  .cstarred {
    @apply variant-filled-primary;
  }
</style>
