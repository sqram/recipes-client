<script>
  // @ts-nocheck
  import { onMount } from 'svelte';
  import { isSidepanelVisible, sites, openSuggestSiteModal } from '../stores';
  import SearchInput from '../components/SearchInput.svelte';
  import SiteRecipesContainer from '../components/SiteRecipesContainer.svelte';
  import SidePanel from '../components/SidePanel.svelte';
  import Loading from '../components/Loading.svelte';

  onMount(() => {
    const handleKeydown = (event) => {
      if (event.key === 'Escape') {
        $isSidepanelVisible = false;
      }
    };

    document.addEventListener('keydown', handleKeydown);
    return () => document.removeEventListener('keydown', handleKeydown);
  });
</script>

<main class="page-content">
  <h1>Recipes from the best food sites, in one place.</h1>

  <article class="search-section">
    <div class="ribbon-container"></div>
    <p>
      search the most popular websites for your favorite recipes. Don't see your favorite site?
      <a href="#" on:click|preventDefault={openSuggestSiteModal}>suggest it!</a>
    </p>
    <SearchInput />
  </article>

  <section class="sites-checkboxes">
    {#each $sites as site}
      <label>
        <input type="checkbox" bind:checked={site.isChecked} />
        <span>{site.name}</span>
      </label>
    {/each}
  </section>

  {#if $isSidepanelVisible}
    <SidePanel />
  {/if}

  <section class="search-results">
    {#each $sites as site}
      {#if site.isChecked}
        {#if site.isFetching}
          <Loading siteName={site.name} />
        {:else}
          <SiteRecipesContainer result={site} />
        {/if}
      {/if}
    {/each}
  </section>
</main>

<style>
  .page-content {
    width: min(900px, calc(100% - 2rem));
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    padding: 2rem 0 3rem;
  }

  .page-content > h1 {
    text-align: center;
    margin-top: 2rem;
  }

  .search-section a {
    color: indianred;
    text-decoration: none;
    border-bottom: 1px dotted indianred;
  }

  article {
    margin-top: 13%;
    padding: 2em;
    background: url('/img/noise.png');
    color: #cecece;
    border-top: 30px solid;
    border-image: url('/img/blue/bg-menu.jpg') 30 30 repeat;
    display: flex;
    position: relative;
  }

  .ribbon-container {
    position: absolute;
    height: 411px;
    width: 118px;
    top: -77px;
    left: 83px;
    background-image: url('/img/blue/ribbon-top.png'), url('/img/blue/ribbon-bottom.png');
    background-position: left top, left 190px;
    background-repeat: no-repeat, no-repeat;
  }

  .sites-checkboxes {
    background: #222;
    display: flex;
    justify-content: flex-end;
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
    transition: opacity 0.2s ease;
  }

  @media (max-width: 800px) {
    .search-section p {
      display: none;
    }
    .ribbon-container {
      background-position: left top, left 209px;
    }
  }

  /* .search-results.dimmed {
    opacity: 0.95;
    filter: brightness(0.8);
  } */
</style>