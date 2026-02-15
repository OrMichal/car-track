<script lang="ts">
    import { Routes } from "../enums/Routes";
    import { Route } from "../services/runes";

  
</script>

<div>
  <span class="crump" on:click={() => Route.set(Routes.Home)}>Home</span>
  <span>/</span>
  {#if $Route != Routes.Home}
    <span class="crump">{$Route}</span>
  {/if}
</div>

<style>
  div {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 10px;
  }

  span.crump {
    font-size: 20px;
    color: var(--accent);
    font-weight: 500;
    transition: 200ms ease;
  }

  span.crump:hover {
    text-decoration: underline;
    cursor: pointer;
  }
</style>
