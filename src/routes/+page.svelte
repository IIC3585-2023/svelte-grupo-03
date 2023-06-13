<script lang="ts">
  import { useQuery } from "@sveltestack/svelte-query";
  import { makeResourceQuery } from "../lib/queries";
	import type Recipe from "$lib/types/recipe";
	import SearchBar from "$lib/components/SearchBar.svelte";
  import jsonResults from '../hardcodedApi/complexSearch.json';
	import RecipeCard from "$lib/components/RecipeCard.svelte";
	import Pagination from "$lib/components/common/Pagination.svelte";
  import _ from 'lodash';

  let searchText = '';
  let curPage = 1;
  let offset = 0;
  let total = 0;
  let sort: 'random' | 'time' | 'protein' = 'random';
  let sortDirection: 'asc' | 'desc' = 'asc';
  const number = 20;
  $: pages = _.ceil(total/number);
  $: pageFromQuery = offset/number + 1;

  $: searchParams = {
    query: searchText,
    addRecipeInformation: true,
    number: number,
    offset: (curPage - 1) * number,
  }

  /*
  const searchRecipesQuery = useQuery(
    makeResourceQuery<Recipe>('recipes/complexSearch', searchParams)
  );
  $: searchRecipesQuery.setOptions(
    makeResourceQuery<Recipe>('recipes/complexSearch', searchParams)
  );
  $: searchRecipes = $searchRecipesQuery.data?.results || [];
  $: total = $searchRecipesQuery.data?.totalResults || [];
  $: offset = $searchRecipesQuery.data?.offset || [];
  */

  let searchRecipes = jsonResults.results;
  $: console.log(searchRecipes);
</script>

<div class="flex flex-col gap-10 w-full mb-32">
  <div class="flex w-full relative isolate overflow-hidden">
    <img src="/assets/food.jpg" alt="food" class="absolute inset-0 -z-10 h-96 w-full object-cover opacity-50">
    <div class="w-full h-80 bg-black opacity-30"></div>
    <div class="absolute top-0 w-full h-80 flex items-center justify-center">
      <h1 class="text-4xl sm:text-6xl text-white font-serif text-center">
        We have all the recipes you need!
      </h1>
    </div>
  </div>
  <section class="flex flex-col gap-10 px-5 sm:px-16 lg:px-32">
    <div class="flex">
      <SearchBar bind:search={searchText} />
    </div>
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
      {#each searchRecipes as recipe (recipe.id)}
        <RecipeCard {recipe} />
      {/each}
    </div>
    <Pagination 
      pages={pages}
      page={pageFromQuery}
      size={number}
      total={total}
      bind:curPage
    />
  </section>
</div>