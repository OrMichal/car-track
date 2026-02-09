<script lang="ts">
    import BlockSelector from "../components/BlockSelector.svelte";
    import GridCube from "../components/GridCube.svelte";
    import Button from "../elements/button.svelte";
    import { SaveDesign } from "../services/data.service";
    import { Design } from "../services/runes";

  export let OnLeave: () => void;
</script>

<section>
  <nav>
    <Button OnClick={() => OnLeave()}>back to menu</Button>
    <span>{$Design.name}</span>
    <Button OnClick={() => SaveDesign()}>Save design</Button>
  </nav>
  <div id="designer">
    {#each $Design.design as cube}
      <GridCube cube={cube}/>      
    {/each}
  </div>
  <BlockSelector />
</section>

<style>
  section {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  nav {
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 15px;
    
    :global(button:last-child) {
      margin-left: auto;
    }
  }

  nav span {
    color: var(--accent);
    font-size: 30px;
    font-weight: 500;
  }

  #designer {
    display: grid;
    grid-template-columns: repeat(30, 50px);
    grid-template-rows: repeat(20, 50px);
  }
</style>
