<script lang="ts">
    import { SelectedGridFieldType } from "../services/runes";
    import type { IGridField } from "../types/GridField";
    import { GridFieldType } from "../types/GridFieldType";

 export let cube: IGridField;

  const updateState = () => {
    cube.type = $SelectedGridFieldType;
  };
</script>

{#if cube.type == GridFieldType.Grass}
  <img alt="grass" src="/grass.png" on:click={updateState} />
{:else if cube.type == GridFieldType.Road}
  <img alt="road" src="/road.png" on:click={updateState} />
{:else if cube.type == GridFieldType.Water}
  <img alt="water" src="/water.png" on:click={updateState} />
{/if}

<style>
  img {
    width: 50px;
    height: 50px;
    border: 1px solid var(--secondary);
    border-radius: 5px;
    transition: 300ms ease;
  }

  img:hover {
    outline: 3px solid var(--accent);
    z-index: 333;
    cursor: crosshair;
  }
</style>
