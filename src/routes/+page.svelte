<script>
  // @ts-nocheck
  import { onMount } from 'svelte';
  import { isSidepanelVisible, sites } from "../stores";
 // import Nav from '../components/Nav.svelte'
  import SearchInput from '../components/SearchInput.svelte'
  import SiteRecipesContainer from '../components/SiteRecipesContainer.svelte'
  import SidePanel from '../components/SidePanel.svelte'
  import { slide } from 'svelte/transition';
	import Loading from '../components/Loading.svelte'

  onMount(async () => {
    // If user presses ESC, close sidepanel
    document.addEventListener('keydown', (e) => {
      switch(e.key) {
        case 'Escape':
          $isSidepanelVisible = false;
          break;
        }
    })
  })
  </script>

  <html lang="en">
    <head>
      <meta charset="utf-8" />
      <meta name="viewport" content="width=device-width" />
      <title>RECIPE</title>
    </head>

    <body>
      <nav>
        <a href="">FAQ</a>
        <a href="">feedback</a>
        <a href="">Suggest a site</a>
      </nav>
      <main>
        <h1>Recipes from the best sites, in one place.</h1>
          <article class="search-section" >
            <div class="ribbon-container"></div>
            <p>
              search the most popular websites for your favorite recipes. Don't see your favorite site? <a href="#">suggest it!</a>
            </p>
            <SearchInput />
          </article>
          <section class="sites-checkboxes">
            {#each $sites as site}
              <label>
                <input type="checkbox" bind:checked={site.isChecked}>
                <span>{site.name}</span>
              </label>
            {/each}
          </section>
        {#if $isSidepanelVisible}
          <div transition:slide="{{delay: 250, duration: 300,  axis: 'x'}}">
            <SidePanel />
          </div>
        {/if}

        <section class="search-results">
          {#each $sites as site}
            {#if site.isChecked}
              {#if site.isFetching}
                <Loading siteName={site.name} />
              {:else if site.recipes?.length}
                <SiteRecipesContainer result={site} />
              {/if}
            {/if}
          {/each}

        </section>

      </main>
    </body>
  </html>

  <style>
    @import url('https://fonts.googleapis.com/css2?family=Catamaran:wght@300;400;700&display=swap');
    @import url('https://fonts.googleapis.com/css?family=Courgette');
    body {
      /* background-image: url("/img/bg/mountains_reduced.jpg");
      background-image: url("/img/bg/fiona.png");
      background-image: url("https://storybook.js.org/images/home/gradient-backdrop.svg"); */
      background-image: url("/img/bg/coffeebg.jpeg");
      background-color: #d7eae8;
      background-color: rgb(243, 223, 219);
      background: #f4f2ec;
      background-position: top center;

      background-size: cover;
      background-attachment: fixed;
      margin: 0;
      padding: 0;
      font-family: courgette;
    }

    nav {
      background: #3d2411;
      background: #98d0c8;
      background: #333;
      display: flex;
      justify-content: flex-end;
      font-family: Catamaran;
    }
    nav a {
      text-decoration: none;
      padding: 5px 14px;
      margin: 5px;
      border-radius: 15px;
      color: #eee;
      background: #111;
      border: 1px solid #333
    }
    nav a:last-of-type {
      background: #7cbc9f;
      color: #333;
      margin-right: 10px;
    }
    main {
      width: 900px;
      margin: 0 auto;
      display: flex;
      flex-direction: column;
    }

    main > h1 {
      text-align: center;
      margin-top: 5%;
    }

    .search-section a {
      color: indianred;
      text-decoration: none;
      border-bottom: 1px dotted indianred;
    }
    article {
      margin-top: 13%;
      padding: 2em;
      background: url("/img/noise.png");
      color: #999;
      color: #cecece;
      border-top: 30px solid;
      border-image: url("/img/blue/bg-menu.jpg") 30 30 repeat;
      display: flex;
      position: relative;
    }

    .ribbon-container {
      position: absolute;
      height: 400px;
      width: 118px;
      top: -77px;
      left: 83px;
      height: 411px;
      top: -77px;
      background-image: url(/img/blue/ribbon-top.png), url(/img/blue/ribbon-bottom.png);
      background-position: left top, left 190px;
      background-repeat: no-repeat, no-repeat;
    }

    .sites-checkboxes {
      background: #222;
      display: flex;
      justify-content: end;
      color: #eee;
      padding: 5px;
      font-size: 80%;
    }
    .sites-checkboxes label {
      margin-left: 10px;
    }

    .search-results {
      display: flex;
      flex-direction: column;
    }
  </style>