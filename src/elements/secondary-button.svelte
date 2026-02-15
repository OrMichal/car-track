<script lang="ts">
  export let OnClick: (e: Event) => void;
</script>

<button on:click={OnClick}>
  <slot/>
</button>

<style>
  button {
    background-color: var(--primary);
    color: var(--accent);
    border: 1px solid var(--accent);
    transition: 300ms ease;
    padding: 12px;
    font-size: 20px;
    font-weight: 500;
    border-radius: 10px;
    box-sizing: border-box;
  }

  button:hover {
    background-color: var(--accent);
    border: 1px solid var(--primary);
    color: var(--primary);
    box-shadow: 2px 4px 6px #00000040;
    cursor: pointer;
  }
</style>
