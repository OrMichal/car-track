<script lang="ts">
    import SavedDesignCard from "../components/SavedDesignCard.svelte";
    import Button from "../elements/button.svelte";
    import type { IDesign } from "../types/IDesign";

  export let OnLeave: () => void;
  let saved: IDesign[] = JSON.parse(localStorage.getItem("saved") as unknown as string);
</script>

<section>
  <nav>
    <Button OnClick={() => OnLeave()}>back to menu</Button>
  </nav>
  <div class="list">
    {#each saved as design}
      <SavedDesignCard design={design} />
    {/each}
  </div>
</section>

<style>
  nav {
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  .list {
    display: flex;
    flex-direction: column;
    gap: 10px;
    align-items: center;
  }
</style>
