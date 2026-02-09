<script lang="ts">
    import { SelectedGridFieldType } from "../services/runes";
    import { GridFieldType } from "../types/GridFieldType";


</script>

<div class="nav">
  <img alt="grass" src="/grass.png" class:selected={$SelectedGridFieldType == GridFieldType.Grass} on:click={() => SelectedGridFieldType.set(GridFieldType.Grass)} />
  <img alt="road" src="/road.png" class:selected={$SelectedGridFieldType == GridFieldType.Road} on:click={() => SelectedGridFieldType.set(GridFieldType.Road)} />
  <img alt="water" src="/water.png" class:selected={$SelectedGridFieldType == GridFieldType.Water} on:click={() => SelectedGridFieldType.set(GridFieldType.Water)} />
</div>

<style>
  .nav {
    position: fixed;
    right: 30px;
    bottom: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    padding: 10px;
    border-radius: 100px;
  }

  img {
    width: 60px;
    border-radius: 50%;
    border: 1px solid var(--secondary);
    transition: 300ms ease;
  }

  img:hover {
    box-shadow: 2px 4px 4px #00000040;
    cursor: pointer;
  }

  .selected {
    border: 4px solid var(--accent);
    width: 80px;
  }
</style>
