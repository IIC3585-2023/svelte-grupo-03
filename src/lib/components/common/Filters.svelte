<script lang="ts">
  import { ArrowSmallUp, ArrowSmallDown } from '@steeze-ui/heroicons'
  import { Icon } from '@steeze-ui/svelte-icon'

  export let sort: 'asc' | 'desc' | undefined;
  export let order: string | undefined;
  export let options: {value: string; label: string}[] = [
    {value: 'name', label: 'Nombre'},
    {value: 'price', label: 'Precio'},
  ]
  const changeOrder = () => {
    if (order === 'asc') {
      order = 'desc';
    } else {
      order = 'asc';
    }
  }
</script>

<div class="flex flex-col gap-1">
  <h1 class="font-medium text-xs">
    Ordenar por:
  </h1>
  <div class="inline-flex rounded-md shadow-sm">
    <select
      bind:value={sort}
      class="relative inline-flex items-center rounded-l-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-10">
      {#each options as option}
        <option value={option.value}>{option.label}</option>
      {/each}
    </select>
    <div class="relative -ml-px block">
      <button
        type="button"
        class="relative inline-flex items-center rounded-r-md bg-white px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-10"
        id="option-menu-button"
        aria-expanded="true"
        aria-haspopup="true"
        on:click={changeOrder}
      >
        {#if order === 'asc'}
          <Icon class="h-5 w-5" src={ArrowSmallDown}/>
        {:else}
          <Icon class="h-5 w-5" src={ArrowSmallUp}/>
        {/if}
      </button>
    </div>
  </div>
</div>