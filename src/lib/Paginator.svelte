<!-- src/lib/Paginator.svelte -->
<script lang="ts">
  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();

  export let currentPage: number;
  export let totalItems: number;
  export let itemsPerPage: number; // This now represents 'limit'
  export let onPageChange: (page: number) => void;

  // Calculate the total pages based on total items and items per page
  $: totalPages = Math.ceil(totalItems / itemsPerPage);

  // Function to handle page selection
  function selectPage(page: number) {
    if (page < 1 || page > totalPages) return;
    onPageChange(page);
  }

  // This function is called when the items per page dropdown value changes
  function onItemsPerPageChange(event: Event) {
    const newItemsPerPage = +(event.target as HTMLSelectElement).value;
    dispatch("changeItemsPerPage", newItemsPerPage);
    selectPage(1); // Reset to the first page after changing items per page
  }

  // Function to handle page selection change from input
  function handlePageInput(e: Event) {
    const input = e.target as HTMLInputElement;
    if (input && input.value) {
      selectPage(Number(input.value));
    }
  }
</script>

<div
  class="variant-glass-tertiary fixed bottom-2 left-4 shadow-2xl rounded p-2 max-w-[680px] z-10 transition-all duration-900 justify-between items-center"
>
  <div class="flex justify-between items-center">
    <div class="flex flex-col justify-between">
      <div class="flex gap-2">
        <label class="label">
          <span>Items per page</span>
          <input
            type="number"
            min="1"
            class="input cursor-pointer rounded p-1 w-[40px] variant-ghost-primary"
            bind:value={itemsPerPage}
            on:change={onItemsPerPageChange}
            placeholder="5"
          /></label
        >
      </div>
      <div>
        {itemsPerPage * (currentPage - 1) + 1}-{Math.min(
          itemsPerPage * currentPage,
          totalItems
        )} of {totalItems} items
      </div>
    </div>

    <div class="ml-2 flex gap-1 items-center">
      <button
        class="border variant-ghost-primary rounded p-2 disabled:opacity-50"
        disabled={currentPage <= 1}
        on:click={() => selectPage(currentPage - 1)}
      >
        Previous
      </button>
      <div class="box text-center mt-4">
        <input
          type="number"
          min="1"
          max={totalPages}
          class="cursor-pointer border border-gray-300 variant-ghost-primary rounded p-1 w-16 text-center"
          bind:value={currentPage}
          on:change={handlePageInput}
          placeholder="Page #"
        /><br />of {totalPages} Pages
      </div>
      <button
        class="border variant-ghost-primary rounded p-2 disabled:opacity-50"
        disabled={currentPage >= totalPages}
        on:click={() => selectPage(currentPage + 1)}
      >
        Next
      </button>
    </div>
  </div>
</div>

<style>
  button:disabled {
    cursor: not-allowed;
  }
</style>
