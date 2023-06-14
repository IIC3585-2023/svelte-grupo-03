<script lang="ts">
	import type Recipe from "../types/recipe";
	import RecipeTags from "./RecipeTags.svelte";
  import {Icon} from '@steeze-ui/svelte-icon';
  import {Bookmark} from '@steeze-ui/heroicons';
  import savedRecipes from '../stores/savedRecipes';
  import _ from 'lodash';

  export let recipe:  Partial<Recipe>;

  $: saved = $savedRecipes?.includes(recipe);
  const handleSave = () => {
    if (saved) savedRecipes.set(_.without($savedRecipes, recipe));
    else savedRecipes.set(_.uniq([...$savedRecipes, recipe]));
  }
</script>

<a class="h-full" href={`/recipes/${recipe.id}`}>
  <article class="flex flex-col items-start bg-gray-100 rounded-lg h-full">
    {#if recipe}
      <div class="relative w-full">
        <button
          on:click|stopPropagation|preventDefault={handleSave}
          class="absolute top-2 right-2 text-white p-2 bg-black rounded-full z-10 hover:bg-gray-800"
          type="button"
        >
          <Icon src="{Bookmark}" class="w-5 h-5" theme="{saved ? 'solid' : 'default'}"/>
        </button>
      </div>
      <div class="relative w-full">
        <img src={recipe.image} alt="recipe-img" class="aspect-[16/9] w-full rounded-t-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]">
        <div class="absolute inset-0"></div>
      </div>
      <div class="flex flex-col gap-1 max-w-xl px-5 pt-3 pb-5">
        <h3 class="mt-3 text-xl font-medium font-serif text-gray-900 group-hover:text-gray-600">
          {recipe.title}
        </h3>
        <p class="text-sm text-gray-500 italic">
          By {recipe?.sourceName || 'unknown'}
        </p>
        <p class="flex items-center gap-2 text-gray-500 text-sm">
          <span class="w-4 h-4">
            <svg fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
          </span>
          {recipe.readyInMinutes} minutes
        </p>
        <RecipeTags {recipe} />
      </div>
    {/if}
  </article>
</a>