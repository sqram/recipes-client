<script>
// @ts-nocheck

  import { fly } from 'svelte/transition';
  import { activeImage, currentRecipe, isSidepanelVisible } from "../stores";

  function handleCloseClick() {
    activeImage.set(null)
    $isSidepanelVisible = false
  }

  function handleThumbnailClick(e) {
    activeImage.set(e.currentTarget?.src ?? e.target?.src ?? null)
  }
</script>
<div class="sidepanel" in:fly={{ x: 400, duration: 500 }} out:fly={{ x: 400, duration: 300 }}>
  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <span class="close" on:click={handleCloseClick}>close</span>
  <div class="title">{ $currentRecipe.title}</div>
  <section>
    <a class="original-url" href={$currentRecipe.url} target="_blank">see this recipe in the original website</a>
    <div class="ingredients">
      <h3>Ingredients:</h3>
      <ul>
        {#each $currentRecipe?.ingredients ?? [] as ingredient}
              <li class="item">
                <label>
                  <input type="checkbox">
                  { ingredient }
                </label>
              </li>
        {/each}
      </ul>
    </div>

    <div class="instructions">
      <h3>Instructions:</h3>
      <ul>
        {#each $currentRecipe?.instructions ?? [] as instruction}
        <li>{ instruction }</li>
        {/each}
      </ul>
    </div>

    <div class="images">
      <h3>Images:</h3>
        <div>
          {#each $currentRecipe?.images ?? [] as img}
            <!-- svelte-ignore a11y-click-events-have-key-events -->
            <img src={img} alt="recipe thumbnail" on:click={handleThumbnailClick}/>
          {/each}
        </div>
    </div>

    {#if $activeImage}
      <div class="original-size-img">
        <img src={$activeImage} alt="recipe pic">
      </div>
    {/if}
  </section>
</div>

<style>
  div.sidepanel {
    width: 50%;
    min-width: 460px;
    background: #f9f9f9;
    color: #222;
    height: 100%;
    position: fixed;
    right: 0;
    top: 0;
    border-left: 10px solid salmon;
    display: flex;
    flex-direction: column;
    font-family: catamaran;
    z-index: 1000;
    box-shadow: -4px 0 18px rgba(0, 0, 0, 0.25);
  }

  section {
    overflow-y: scroll;
  }

  /*.close {
    background: #222;
    color: #fff;
    display: inline-block;
    position: absolute;
    width: 25px;
    height: 25px;
    text-align: center;
    border-radius: 30px;
    left: -32px;
    top: 4px;
    box-shadow: 2px 2px #db9595;
    cursor: pointer;
  }*/

  /*
  .close {
        background: #222;
    color: #fff;
    display: inline-block;
    position: absolute;
    width: auto;
    height: 31px;
    text-align: center;
    left: -109px;
    top: 0;
    cursor: pointer;
    text-orientation: upright;

    background: #cb0808;
    color: #fff;
    font-weight: bold;
    padding: 0 15px;
  }
  */

  .close {
    background: #222;
    color: #fff;
    display: inline-block;
    position: absolute;
    width: 27px;
    height: 145px;
    text-align: center;
    /* border-radius: 30px; */
    left: -35px;
    top: 354px;
    /* box-shadow: 2px 2px #db9595; */
    cursor: pointer;
    text-orientation: upright;
    writing-mode: vertical-rl;
    letter-spacing: -11px;
    text-transform: uppercase;
    border: 4px solid salmon;
    background: salmon;
    color: #000;
    font-weight: bold;
  }
  section {
    padding: 6px;
  }
  .title {
    background: salmon;
    color: #333;
    padding-left: 6px;
    font-size: 120%;;
    font-weight: bold;;
  }

  li.ingredientSection {
    list-style: none;
    border-bottom: 1px dashed #333;
    margin: 10px 10px 10px -17px;
  }

  ul {
    list-style: none;;
  }

  .original-url {
    color: #333;
    border-bottom: 1px dotted #333;
    text-decoration: none;
    margin-top: 5px;
    font-size: 12px;
    float: right;
  }


  .images > div {
    display: flex;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
  }
  .images  img {
    margin: 5px;
    border: 3px solid indianred;
    width: 75px;
    height: 75px;
  }

  .original-size-img {
    display: flex;
    justify-content: center;
    max-height: 400px;
  }
  .original-size-img img {
    max-height: 400px;
  }

  div.instructions {
    line-height: 1.5
  }

  div.instructions > ul > li {
    list-style: auto;
    margin-bottom: 15px;
  }
</style>