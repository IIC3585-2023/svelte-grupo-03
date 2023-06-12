<script lang="ts">
  import { useQuery } from '@sveltestack/svelte-query';
  import { makeSingleResourceQuery, makeSimilarQuery } from '../../../lib/queries';
  import type Recipe from "../../../lib/types/recipe";
  import { page } from '$app/stores';
  import jsonResultsDetailRecipe from '../../../hardcodedApi/recipesInformation.json';
  import jsonResultsSimilarRecipes from '../../../hardcodedApi/recipesSimilar.json';
  import _ from 'lodash';
	import RecipeTags from '$lib/components/RecipeTags.svelte';

  $: recipeId = $page.params.slug;

  // const detailRecipeQuery = useQuery(
  //   makeSingleResourceQuery<Recipe>('recipes', `${recipeId}/information`, { includeNutrition: false })
  // );
  // $: detailRecipeQuery.setOptions(
  //   makeSingleResourceQuery<Recipe>('recipes', `${recipeId}/information`, { includeNutrition: false })
  // );
  // $: detailRecipe = $detailRecipeQuery.data || [];

  // const similarRecipesQuery = useQuery(makeSimilarQuery<Recipe>(recipeId));
  // $: similarRecipesQuery.setOptions(makeSimilarQuery<Recipe>(recipeId));
  // $: similarRecipes = $similarRecipesQuery.data?.items || [];

  let detailRecipe = jsonResultsDetailRecipe;
  let similarRecipes = jsonResultsSimilarRecipes;
  $: instructions = _.split(detailRecipe.instructions || '', '.');

  $: console.log(detailRecipe);
  $: console.log(similarRecipes.length)
  $: console.log(instructions);

  
</script>

<div class="flex flex-col items-center gap-10 px-32 py-16">
  <article class="flex items-center rounded-2xl w-full border border-gray-200">
    <div class="relative">
      <img src={detailRecipe.image} alt="recipe-img" class="aspect-[16/9] w-full rounded-l-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]">
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
    <h1 class="text-2xl font-medium font-serif text-gray-900">Instructions</h1>
    <div class="flex flex-col gap-5">
      {#each detailRecipe.analyzedInstructions as instruction (instruction.name)}
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
  <article class="flex flex-col gap-2 rounded-2xl w-full border border-gray-200 px-10 py-5">
    <h1 class="text-2xl font-medium font-serif text-gray-900">You might be interested</h1>
    <div class="flex overflow-x-scroll gap-x-2 py-5">
      {#each similarRecipes as recipe (recipe.title)}
        <a 
          href={`/recipes/${recipe.id}`}
          class="text-sm text-gray-700 px-5 py-3 rounded-lg min-w-fit bg-gray-50"
        >
          {recipe.title}
        </a>
      {/each}
    </div>
  </article>
</div>