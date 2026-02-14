<script lang="ts">
    import Button from "../elements/button.svelte";
    import { SaveDesign } from "../services/data.service";
    import { Design } from "../services/runes";

  let showDialog = false;
  let designName = $Design.name;
</script>

<div>
  <Button OnClick={() => showDialog = true}>Save design</Button>
  {#if showDialog}
    <div class="fog"></div>
    <div class="dialog">
      <span>Save design</span>
      <input type="text" value={$Design.name} on:input={(e) => designName = e.target?.value}>
      <Button OnClick={() => {SaveDesign(designName); showDialog = false}}>save</Button>
    </div>
  {/if}
</div>

<style>
  .fog {
    left: 0;
    top: 0;
    display: block;
    position: fixed;
    width: 100dvw;
    height: 100dvh;
    z-index: 100;
    backdrop-filter: blur(5px);
  }

  .dialog {
    position: fixed;
    z-index: 150;
    left: 50%;
    top: 50%;
    transform: translateX(-50%) translateY(-50%);

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;

    background-color: var(--primary);
    padding: 12px;
    box-sizing: border-box;
    border-radius: 8px;
    box-shadow: 0px 10px 10px #00000040;
  }

  span {
    font-size: 32px;
    font-weight: bold;
    color: var(--accent);
    margin-bottom: 32px;
  }

  input {
    font-size: 24px;
    color: var(--secondary);
    transition: 200ms ease;
    border-radius: 6px;
  }

  input:focus {
    outline: none;
    border: solid 2px var(--accent);
  }

</style>
