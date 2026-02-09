<script lang="ts">
    import Button from "../elements/button.svelte";
    import { Design } from "../services/runes";
    import type { IDesign } from "../types/IDesign";

 export let design: IDesign;
</script>

<div class="card">
  <span>{design.name}</span> 
  <Button OnClick={() => Design.set(design)}>load</Button>
</div>

<style>
  .card {
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 5px;
    border-bottom: 2px solid var(--accent);
  }

  :global(.card button:last-child) {
    margin-left: auto;
  }

  .card span {
    color: var(--accent);
    font-weight: 600;
    font-size: 28px;
    padding: 8px;
  }
</style>
