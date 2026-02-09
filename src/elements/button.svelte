<script lang="ts">
  export let OnClick: (e: Event) => void;
</script>

<button onclick={OnClick}>
  <slot/>
</button>

<style>
  button {
    background-color: var(--accent);
    color: var(--primary);
    border: 1px solid var(--primary);
    transition: 300ms ease;
    padding: 12px;
    font-size: 20px;
    font-weight: 500;
    border-radius: 10px;
    box-sizing: border-box;
  }

  button:hover {
    background-color: var(--primary);
    border: 1px solid var(--accent);
    color: var(--accent);
    box-shadow: 2px 4px 6px #00000040;
    cursor: pointer;
  }
</style>
