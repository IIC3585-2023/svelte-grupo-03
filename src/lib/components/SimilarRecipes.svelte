<script lang="ts">
  import jsonResultsSimilarRecipes from '../../../src/hardcodedApi/recipesSimilar.json';
  export let recipeId: string;

  // const similarRecipesQuery = useQuery(makeSimilarQuery<Recipe>(recipeId));
  // $: similarRecipesQuery.setOptions(makeSimilarQuery<Recipe>(recipeId));
  // $: similarRecipes = $similarRecipesQuery.data?.items || [];
  let similarRecipes = jsonResultsSimilarRecipes;
</script>

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