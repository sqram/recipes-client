<script>
// @ts-nocheck

  import { currentRecipe } from "../stores";
</script>
<div class="sidepanel">
  <div class="title">{ $currentRecipe.title}</div>
  <section>
    <div class="ingredients">
      <h3>Ingredients:</h3>
      <ul>
        {#each $currentRecipe.ingredients as ingredient}
          {#each ingredient.items as item}
            <li>{ item }</li>
          {/each}
        {/each}
      </ul>
    </div>

      <div class="instructions">
        <h3>Instructions:</h3>
        <ul>
          {#each $currentRecipe.instructions as instruction}
          <li>{ instruction }</li>
          {/each}
        </ul>
      </div>
  </section>
</div>

<style>
  div.sidepanel {
    width: 50%;
    min-width: 460px;
    background: #eee;
    color: #222;
    height: 100%;
    position: fixed;
    right: 0;
    top: 0;
    border-left: 2px solid black;
    display: flex;
    flex-direction: column;;
    font-family: catamaran;
    z-index: 1;
  }
  section {
    padding-left: 10px;
  }
  .title {
    background: indianred;
    color: #333;
    padding-left: 10px;
    font-size: 120%;;
    font-weight: bold;;
  }
</style>