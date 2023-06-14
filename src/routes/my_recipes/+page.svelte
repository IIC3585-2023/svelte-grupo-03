<script lang="ts">
  import savedRecipes from '../../lib/stores/savedRecipes';
  import RecipeCard from '../../lib/components/RecipeCard.svelte';
</script>

<div class="flex flex-col items-center gap-10 px-5 md:px-16 lg:px-32 py-16">
  <h1 class="mt-3 text-3xl font-medium font-serif text-gray-900 flex w-full text-left">Saved recipes</h1>
  {#if ($savedRecipes || [])?.length > 0}
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
      {#each $savedRecipes || [] as recipe (recipe.id)}
        <RecipeCard {recipe} />
      {/each}
    </div>
  {:else}
    <p class="flex w-full text-lg font-light text-gray-500 text-left">You haven't saved any recipes yet</p>
  {/if}
</div>