<script lang="ts">
  import Button from "../elements/button.svelte";
  import { GenerateNewDesign, Route } from "../services/runes";
  import { Routes } from "../enums/Routes";

  GenerateNewDesign();
</script>

<section>
  <h1>Car Track lmao</h1>
  <div class="buttons">
    <Button OnClick={() => Route.set(Routes.NewDesign)}>+ new design</Button>
    <Button OnClick={() => Route.set(Routes.LoadDesign)}>load design</Button>
  </div>
  <video src="showcase.mp4" autoplay loop>
    <track kind="captions">
  </video>
</section>

<style>
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

  video {
    width: 50%;
    padding: 20px;
    border: solid 1px var(--accent);
    border-radius: 12px;
  }
</style>
