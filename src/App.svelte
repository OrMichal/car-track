<script lang="ts">
    import Button from "./elements/button.svelte";
    import LoadDesignPage from "./pages/load-design-page.svelte";
    import NewDesignPage from "./pages/new-design-page.svelte";

  let showload: boolean | undefined = undefined;
</script>

<main>
  {#if showload == undefined}
  <section>
    <h1>Car Track lmao</h1>
    <div class="buttons">
      <Button OnClick={() => showload = false}>+ new design</Button>
      <Button OnClick={() => showload = true}>load design</Button>
    </div>
  </section>
  {:else if showload}
    <LoadDesignPage OnLeave={() => showload = undefined} />
  {:else if !showload}
    <NewDesignPage OnLeave={() => showload = undefined} />
  {/if}
</main>

<style>
  :global(#app) {
    width: 100%;
  }

  :global(:root) {
    --primary: #f3f3f3;
    --secondary: #333333;
    --accent: #e3245e;
  }

  section {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
  }

  h1 {
    color: var(--accent);
    font-weight: 700;
    font-size: 48px;
  }
</style>
