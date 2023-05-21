<script>
	// @ts-nocheck

	import { currentRecipe, isSidepanelVisible, sites } from '../stores';


	/**
	 * This component is a container that holds all the recipes
	 * of a website, since a website may have multiple recipes
	 */

	export let result;

	//$: recipes = $searchResults
	$: sr = $sites.map(site => site.recipes)
	console.log(sr)
	function handleOnClick(e) {
		const id = e.target.dataset.id;
		let recipe =  $sites.map(site => site.recipes)
			.flat()
			.find((r) => r.id === id);
		$currentRecipe = { ...recipe };
		isSidepanelVisible.set(true);
		console.log(recipe)
	}
</script>

<section>


	<div class="site-name"><span>{result.name}</span> <span></span> {result.recipes.length} recipes found</div>
	<div class="site-recipes">
		{#each result.recipes as recipe}
			<!-- svelte-ignore a11y-click-events-have-key-events -->
			<article class="recipe-wrap" on:click={handleOnClick} data-id={recipe.id}>
				<div class="thumb">
					<img src={recipe.images[0]} alt="recipe image" />
				</div>
        <div class="info-area">
          <div class="title">{recipe.title}</div>
          <div class="info">
              <div class="times">
								{#each recipe.times as time}
                <div>
									{#each time as text}
										<span>{text}</span>
									{/each}
								</div>
								{/each}
              </div>
              <div class="servings-wrap">
                <span>Servings:</span>
                <span>{recipe.servings}</span>
              </div>
            </div>
        </div>
			</article>
		{/each}
	</div>
</section>

<style lang="scss">
	section {
		margin-top: 13%;

		background: url('/img/noise.png');
		color: #999;
		display: flex;
		position: relative;
		flex-direction: column;
	}
	.site-name {
		background: #406453;
		color: #fff;
		padding: 10px;
		font-size: 120%;
		display: flex;
		justify-content: space-between;
		background: url('/img/blue/bg-menu.jpg') repeat;
		text-shadow: 2px 2px 1px #000;
	}
	.site-recipes {
		padding: 5px 5px 0;
    /*
    background: #ecf2f4;
    color: #333;
    */
	}
	.recipe-wrap {
		padding: 0;
		padding: 20px;
    display: flex;
    border-bottom: 1px dashed rgb(96, 89, 89);
	}
  .info-area {
    flex-direction: column;
    width: 100%;
    margin-left: 15px;

  }
  .info {
    display: flex;
    flex-direction: row;;
    justify-content: space-between;
  }
	.recipe-wrap > * {
		pointer-events: none;
	}
	.recipe-wrap:last-of-type {
		margin-bottom: 0;
		border: 0;
	}

	.recipe-wrap > div {
		align-self: center;
	}

	img {
		width: 75px;
		height: 75px;
    display: block;
	}
	.servings-wrap {
		text-align: center;
		padding: 0 8px;
	}
	.title {
		font-size: 140%;
    margin-bottom: 10px;
    color: lightcoral;
	}
  .times {
    display: flex;
  }
  .times > div {
    margin-right: 20px;
  }
  .times > div > span:nth-child(2), .servings-wrap > span:last-child {
    color: #eee;
  }

</style>
