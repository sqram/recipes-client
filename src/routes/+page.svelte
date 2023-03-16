<script>
  // @ts-nocheck
  import { isSidepanelVisible, searchResults } from "../stores";
  import Nav from '../components/Nav.svelte'
  import SearchInput from '../components/SearchInput.svelte'
  import SiteRecipesContainer from '../components/SiteRecipesContainer.svelte'
  import SidePanel from '../components/SidePanel.svelte'
  import { slide, fly } from 'svelte/transition';
  </script>

  <html lang="en">
    <head>
      <meta charset="utf-8" />
      <meta name="viewport" content="width=device-width" />
      <title>Astro-SPA</title>
    </head>

    <body>
      <main>
        <h1>Recipes from multiple sites, in one place.</h1>
        <article class="search-section">
          <div class="ribbon-container"></div>
          <p>
            search the most popular websites for your favorite recipes
          </p>
          <SearchInput />
        </article>

        {#if $isSidepanelVisible}
          <div transition:slide="{{delay: 250, duration: 300,  axis: 'x'}}">
            <SidePanel />
          </div>
        {/if}

        <section class="search-results">
          {#each $searchResults as result}
            <SiteRecipesContainer result={result} />
          {/each}
        </section>

      </main>
    </body>
  </html>

  <style>
    @import url('https://fonts.googleapis.com/css2?family=Catamaran:wght@300;400;700&display=swap');
    @import url('https://fonts.googleapis.com/css?family=Courgette');
    body {
      background-image: url("/img/bg/mountains_reduced.jpg");
      background-color: #d7eae8;
      background-position: top center;
      background-size: cover;
      background-attachment: fixed;
      margin: 0;
      padding: 0;
      font-family: courgette;
    }
    main {
      width: 900px;
      margin: 0 auto;
    }
    main > h1 {
      text-align: center;
      margin-top: 5%;
    }
    article {
      margin-top: 13%;
      padding: 2em;
      background: url("/img/noise.png");
      color: #999;
      border-top: 30px solid;
      border-image: url("/img/blue/bg-menu.jpg") 30 30 repeat;
      display: flex;
      position: relative;
    }
    .search-section {

    }
    section p {
      width: 29%;
      text-align: justify;
      position: relative;
    }

    .ribbon-container {
      position: absolute;
      height: 400px;
      width: 118px;
      top: -77px;
      left: 83px;
      background-image: url(/img/blue/ribbon-top.png), url(/img/blue/ribbon-bottom.png);
      background-position: left top, left bottom;
      background-repeat: no-repeat, no-repeat;
    }
  </style>