<script lang="ts">
    import Button from "../elements/button.svelte";
    import SecondaryButton from "../elements/secondary-button.svelte";
    import { Routes } from "../enums/Routes";
    import { DeleteDesign } from "../services/data.service";
    import { Design, Route } from "../services/runes";
    import type { IDesign } from "../types/IDesign";

 export let design: IDesign;
 let refresh: number = 0;
</script>

<div class="card">
  <span>{design.name}</span> 
  <div>
    <SecondaryButton OnClick={() => {Design.set(design); Route.set(Routes.NewDesign)}}>load</SecondaryButton>
    <Button OnClick={() => {DeleteDesign(design.name); refresh++; }}>Delete</Button>
  </div>
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

  :global(.card div:last-child) {
    margin-left: auto;
  }

  .card span {
    color: var(--accent);
    font-weight: 600;
    font-size: 28px;
    padding: 8px;
  }
</style>
