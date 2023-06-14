<!-- <script lang="ts">
  import { useQuery } from '@sveltestack/svelte-query';
  import { makeSingleResourceQuery } from '../../../lib/queries';
  import type Recipe from "../../../lib/types/recipe";
  import { page } from '$app/stores';
  import _ from 'lodash';
	import RecipeTags from '$lib/components/RecipeTags.svelte';
  import SimilarRecipes from '$lib/components/SimilarRecipes.svelte';
  import LoadingIcon from '../../../lib/components/common/LoadingIcon.svelte';

  $: recipeId = $page.params.slug;

  const detailRecipeQuery = useQuery(
    makeSingleResourceQuery<Recipe>('recipes', `${recipeId}/information`, { includeNutrition: false })
  );
  $: detailRecipeQuery.setOptions(
    makeSingleResourceQuery<Recipe>('recipes', `${recipeId}/information`, { includeNutrition: false })
  );
  $: detailRecipe = $detailRecipeQuery.data || [];
  $: instructions = _.split(detailRecipe.instructions || '', '.');
</script>

{#if $detailRecipeQuery.isLoading}
  <div class="flex w-full py-10 justify-center items-center">
    <span class="animate-spin mr-2 w-10 h-10">
      <LoadingIcon />
    </span>
  </div>
{:else}
  <div class="flex flex-col items-center gap-10 px-5 md:px-16 lg:px-32 py-16">
    <article class="flex flex-col md:flex-row items-center rounded-2xl w-full border border-gray-200">
      <div class="relative">
        <img src={detailRecipe.image} alt="recipe-img" class="aspect-[16/9] w-full rounded-t-2xl md:rounded-l-2xl md:rounded-tr-none bg-gray-100 object-cover md:aspect-[3/2]">
        <div class="absolute inset-0"></div>
      </div>
      <div class="flex flex-col gap-1 max-w-xl px-12 py-10">
        <RecipeTags recipe={detailRecipe} />
        <h1 class="mt-3 text-2xl font-medium font-serif text-gray-900">
          { detailRecipe.title }
        </h1>
        <div class="flex gap-8">
          <p class="flex items-center gap-2 text-gray-500 text-sm">
            <span class="w-4 h-4">
              <svg fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            </span>
            {detailRecipe.readyInMinutes} minutes
          </p>
          <p class="flex items-center gap-2 text-gray-500 text-sm">
            <span class="w-4 h-4">
              <svg fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"></path>
              </svg>
            </span>
            {detailRecipe.servings} servings
          </p>
        </div>
      </div>
      <div>
      </div>
    </article>
    <article class="flex flex-col gap-2 rounded-2xl w-full border border-gray-200 px-10 py-5">
      <h1 class="text-2xl font-medium font-serif text-gray-900">Ingredients</h1>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        {#each detailRecipe?.extendedIngredients || [] as ingredient (ingredient.id)}
          <p class="rounded-lg bg-gray-100 text-left pl-5 pr-3 py-2 text-gray-500 text-sm">
            {ingredient?.measures?.metric?.amount || ''} {ingredient?.measures?.metric?.unitShort || ''} {ingredient.name}
          </p>
        {/each}
      </div>
    </article>
    <article class="flex flex-col gap-2 rounded-2xl w-full border border-gray-200 px-10 py-5">
      <h1 class="text-2xl font-medium font-serif text-gray-900">Instructions</h1>
      <div class="flex flex-col gap-5">
        {#each detailRecipe?.analyzedInstructions || [] as instruction (instruction.name)}
          <section class="flex flex-col gap-2">
            <h2 class="text-base font-gray-700 font-medium">{instruction.name}</h2>
            <ul class="list-decimal list-inside leading-loose">
              {#each instruction.steps as step, idx (`${instruction.name}-${idx}`)}
                <li class="text-gray-500">{step.step}</li>
              {/each}
            </ul>
          </section>
        {/each}
      </div>
    </article>
    <SimilarRecipes {recipeId} />
  </div>
{/if} -->