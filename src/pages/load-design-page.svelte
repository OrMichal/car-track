<script lang="ts">
    import SavedDesignCard from "../components/SavedDesignCard.svelte";
    import Button from "../elements/button.svelte";
    import { Routes } from "../enums/Routes";
    import { Route } from "../services/runes";
    import type { IDesign } from "../types/IDesign";

  let saved: IDesign[] = JSON.parse(localStorage.getItem("saved") as unknown as string);
</script>

<section>
  <div class="list">
    {#each saved as design}
      <SavedDesignCard design={design} />
    {/each}
    {#if saved.length === 0}
      <span>You have no saved designs</span>
      <Button OnClick={() => Route.set(Routes.NewDesign)}>Create new design</Button>
    {/if}
  </div>
</section>

<style>
  section {
    width: 100%;
  }

  .list {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 10px;
    align-items: center;
  }
</style>
