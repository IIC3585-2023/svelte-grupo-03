<script lang="ts">
  import LoadingIcon from './common/LoadingIcon.svelte';
  import { useQuery } from '@sveltestack/svelte-query';
  import { makeSimilarQuery } from '../queries';
  import type Recipe from '../types/recipe';

  export let recipeId: string;

  const similarRecipesQuery = useQuery(makeSimilarQuery<Recipe>(recipeId));
  $: similarRecipesQuery.setOptions(makeSimilarQuery<Recipe>(recipeId));
  $: similarRecipes = $similarRecipesQuery.data || [];
</script>

{#if $similarRecipesQuery.isLoading}
  <div class="flex w-full py-10 justify-center items-center">
    <span class="animate-spin mr-2 w-10 h-10">
      <LoadingIcon />
    </span>
  </div>
{:else}
  <article class="flex flex-col gap-2 rounded-2xl w-full border border-gray-200 px-10 py-5">
    <h1 class="text-2xl font-medium font-serif text-gray-900">You might be interested</h1>
    <div class="flex overflow-x-scroll gap-x-2 py-5">
      {#each similarRecipes as recipe (recipe.id)}
        <a
          href={`/recipes/${recipe.id}`}
          class="flex flex-col text-sm text-gray-700 px-5 py-3 rounded-lg min-w-fit bg-gray-50"
        >
          <p>{recipe.title}</p>
          <p class="flex items-center gap-2 text-gray-500 text-sm">
            <span class="w-4 h-4">
              <svg fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            </span>
            {recipe.readyInMinutes} minutes
          </p>
        </a>
      {/each}
    </div>
  </article>
{/if}