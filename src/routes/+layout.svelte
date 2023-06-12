<script>
  import "../app.css";
  import {QueryClient, QueryClientProvider} from "@sveltestack/svelte-query";
  import Navbar from "../lib/components/common/Navbar.svelte";

  const queryClient = new QueryClient({});
</script>

<QueryClientProvider client={queryClient}>
  <main class="flex-1 overflow-y-auto">
    <div class="relative overflow-hidden bg-white">
      <Navbar/>
      <slot/>
    </div>
  </main>
</QueryClientProvider>
