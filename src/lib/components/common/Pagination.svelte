<script lang="ts">
  export let total = 0;
  export let page = 0;
  export let pages = 0;
  export let size = 0;
  export let curPage: number;

  let minNumberPages: number;
  $: minNumberPages = Math.min(4, pages);
  let arrayNumbers: number[] = [];
  $: arrayNumbers = pages <= 10 ? Array(pages) : Array(minNumberPages);
</script>

<div class="flex items-center justify-center border-t border-gray-200 bg-white px-4 py-3 sm:px-6">
  <div class="flex flex-1 justify-between sm:hidden">
    <a href="#" class="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">Previous</a>
    <a href="#" class="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">Next</a>
  </div>
  <div>
    <nav class="isolate inline-flex -space-x-px rounded-md shadow-sm" aria-label="Pagination">
      <button
        class="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 disabled:opacity-50 disabled:hover:bg-white hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
        disabled={curPage === 1}
        on:click={() => {
          curPage -= 1;
        }}
      >
        <span class="sr-only">Previous</span>
        <svg class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
          <path fill-rule="evenodd" d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z" clip-rule="evenodd" />
        </svg>
      </button>
      <!-- Current: "z-10 bg-indigo-600 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600", Default: "text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:outline-offset-0" -->
      {#each arrayNumbers as number, index}
        <button
          class:bg-yellow-600={index + 1 === page}
          class:text-white={index + 1 === page}
          class:hover:bg-yellow-700={index + 1 === page}
          class="relative inline-flex items-center px-4 py-2 text-sm text-gray-900 font-semibold ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
          on:click={() => {
          curPage = index + 1;
        }}
        >{index + 1}</button>
      {/each}

      {#if pages > 10}
        {#if page === 5}
          <button
            class="relative inline-flex items-center px-4 py-2 text-sm font-semibold bg-yellow-600 text-white ring-1 ring-inset ring-gray-300 hover:bg-yellow-600 focus:z-20 focus:outline-offset-0"
            on:click={() => {curPage = page}}
          >{page}</button>
        {:else if page > 5 && page < pages - 1}
          <span class="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-700 ring-1 ring-inset ring-gray-300 focus:outline-offset-0">...</span>
          <button
            class="relative inline-flex items-center px-4 py-2 text-sm font-semibold bg-yellow-600 text-white ring-1 ring-inset ring-gray-300 hover:bg-yellow-600 focus:z-20 focus:outline-offset-0"
            on:click={() => {curPage = page}}
          >{page}</button>
        {/if}
        <span class="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-700 ring-1 ring-inset ring-gray-300 focus:outline-offset-0">...</span>
        {#if page === pages - 1 }
          <button
            class="relative inline-flex items-center px-4 py-2 text-sm font-semibold bg-yellow-600 text-white ring-1 ring-inset ring-gray-300 hover:bg-yellow-600 focus:z-20 focus:outline-offset-0"
            on:click={() => {curPage = page}}
          >{pages - 1}</button>
        {/if}
        <button
          class:bg-yellow-600={pages === page}
          class:text-white={pages === page}
          class:hover:bg-yellow-700={pages === page}
          class="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
          on:click={() => {curPage = pages}}
        >{pages}</button>
      {/if}

      <button
        class="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 disabled:opacity-50 disabled:hover:bg-white hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
        on:click={() => {
          curPage += 1;
        }}
        disabled={curPage === pages}
      >
        <span class="sr-only">Next</span>
        <svg class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
          <path fill-rule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clip-rule="evenodd" />
        </svg>
      </button>
    </nav>
  </div>
</div>