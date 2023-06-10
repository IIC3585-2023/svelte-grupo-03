<script>
  import "../app.css";
  import {QueryClient, QueryClientProvider} from "@sveltestack/svelte-query";

  const queryClient = new QueryClient({});
</script>

<QueryClientProvider client={queryClient}>
  <main class="flex-1 overflow-y-auto">
    <div class="relative overflow-hidden bg-white">
      <slot/>
    </div>
  </main>
</QueryClientProvider>
