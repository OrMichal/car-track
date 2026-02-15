<script lang="ts">
    import BreadCrumps from "./components/bread-crumps.svelte";
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
    <BreadCrumps />
    <LoadDesignPage />
  {:else if $Route == Routes.NewDesign}
    <BreadCrumps />
    <NewDesignPage />
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

  main {
    display: flex;
    flex-direction: column;
    gap: 15px;
  }
</style>
