<script lang="ts">
	import type Recipe from "$lib/types/recipe";
  import _ from 'lodash';

  export let recipe: Partial<Recipe>;
</script>

<div class="flex w-full gap-2 flex-wrap">
  {#each Object.entries(recipe || {}) as [key, value]}
    {#if ['vegetarian', 'vegan', 'glutenFree', 'dairyFree'].includes(key) && value}
      <span 
        class="flex rounded-full text-sm px-3 py-1 font-medium"
        class:vegan={key === 'vegan' && value}
        class:vegetarian={key === 'vegetarian' && value}
        class:glutenFree={key === 'glutenFree' && value}
        class:dairyFree={key === 'dairyFree' && value}
      >
        {_.capitalize(key)}
      </span>
    {/if}
  {/each}
</div>

<style type="text/postcss">
  .vegan {
    @apply bg-green-100 text-green-600;
  }
  .dairyFree {
    @apply bg-pink-100 text-pink-600;
  }
  .glutenFree {
    @apply bg-yellow-100 text-yellow-600;
  }
  .vegetarian {
    @apply bg-blue-100 text-blue-600;
  }
</style>