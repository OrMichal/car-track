<script lang="ts">
    import Button from "./elements/button.svelte";
    import { Routes } from "./enums/Routes";
    import HomePage from "./pages/home-page.svelte";
    import LoadDesignPage from "./pages/load-design-page.svelte";
    import NewDesignPage from "./pages/new-design-page.svelte";
    import { Route } from "./services/runes";

</script>

<main>
  {#if $Route == Routes.Home}
    <HomePage />
  {:else if $Route == Routes.LoadDesign}
    <LoadDesignPage OnLeave={() => Route.set(Routes.Home)} />
  {:else if $Route == Routes.NewDesign}
    <NewDesignPage OnLeave={() => Route.set(Routes.Home)} />
  {/if}
</main>

<style>
  :global(main) {
    width: 100%;
  }

  :global(#app) {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    
    & > * {
      max-width: 80%;
    }
  }
</style>
