<script lang="ts">
  import { Bookmark } from '@steeze-ui/heroicons';
  import { Icon } from '@steeze-ui/svelte-icon';
</script>

<header class="bg-white shadow-sm lg:static lg:overflow-y-visible">
  <div class="w-full px-4 sm:px-6 lg:px-8">
    <div class="relative flex w-full justify-between items-center">
      <div class="flex md:absolute md:inset-y-0 md:left-0 lg:static xl:col-span-2">
        <div class="flex flex-shrink-0 items-center">
          <a href="/">
            <img class="block h-20 w-auto" src="/assets/logo.png" alt="Your Company">
          </a>
        </div>
      </div>
      <a href="/my_recipes" class="p-2 text-white bg-amber-900 rounded-full hover:bg-amber-800">
        <Icon src="{Bookmark}" class="w-5 h-5" theme="solid"/>
      </a>
    </div>
  </div>
</header>