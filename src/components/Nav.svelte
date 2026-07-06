<script>
// @ts-nocheck

  import { suggestSiteModalState, closeSuggestSiteModal, openSuggestSiteModal } from '../stores';

  let isFeedbackOpen = false;
  let feedbackMessage = '';
  let feedbackCaptchaChecked = false;

  function openFeedback() {
    isFeedbackOpen = true;
    isSuggestSiteOpen = false;
  }

  function openSuggestSite() {
    isFeedbackOpen = false;
    openSuggestSiteModal();
  }

  function closeFeedback() {
    isFeedbackOpen = false;
    feedbackMessage = '';
  }

  function closeSuggestSite() {
    closeSuggestSiteModal();
  }


  function handleFeedbackSubmit(event) {
    if (feedbackCaptchaChecked) {
      event.preventDefault();
      return;
    }

    event.preventDefault();
    closeFeedback();
  }

  function handleSuggestSiteSubmit(event) {
    if ($suggestSiteModalState.captchaChecked) {
      event.preventDefault();
      return;
    }

    event.preventDefault();
    closeSuggestSite();
  }
</script>

<nav>
  <div class="nav-spacer"></div>
  <div class="brand">ForkForest ↟</div>
  <div class="nav-links">
    <a href="/">Home</a>
    <a href="/about">FAQ</a>
    <button type="button" on:click={openFeedback}>Feedback</button>
    <button class="accent-button" type="button" on:click={openSuggestSite}>Suggest a site</button>
  </div>
</nav>

{#if isFeedbackOpen}
  <div class="modal-backdrop" role="presentation" on:click={closeFeedback}>
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <div class="modal" role="dialog" aria-modal="true" aria-label="Feedback form" on:click|stopPropagation>
      <button class="close-button" type="button" on:click={closeFeedback} aria-label="Close feedback form">×</button>
      <h3>Send feedback</h3>
      <form on:submit={handleFeedbackSubmit}>
        <label for="feedback-input">What would you like to share?</label>
        <input id="feedback-input" bind:value={feedbackMessage} placeholder="Tell us what you think" />
        <label class="captcha" for="feedback-captcha">
          <input id="feedback-captcha" type="checkbox" bind:checked={feedbackCaptchaChecked} />
          <span>Leave this unchecked</span>
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  </div>
{/if}

{#if $suggestSiteModalState.isOpen}
  <div class="modal-backdrop" role="presentation" on:click={closeSuggestSite}>
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <div class="modal" role="dialog" aria-modal="true" aria-label="Suggest a site form" on:click|stopPropagation>
      <button class="close-button" type="button" on:click={closeSuggestSite} aria-label="Close suggest a site form">×</button>
      <h3>Suggest a site</h3>
      <form on:submit={handleSuggestSiteSubmit}>
        <label for="site-suggestion-input">Which site should we add?</label>
        <input
          id="site-suggestion-input"
          value={$suggestSiteModalState.formValue}
          on:input={(event) => suggestSiteModalState.update((state) => ({ ...state, formValue: event.currentTarget.value }))}
          placeholder="e.g. www.example.com"
        />
        <label class="captcha" for="suggest-site-captcha">
          <input
            id="suggest-site-captcha"
            type="checkbox"
            checked={$suggestSiteModalState.captchaChecked}
            on:change={(event) => suggestSiteModalState.update((state) => ({ ...state, captchaChecked: event.currentTarget.checked }))}
          />
          <span>Leave this unchecked</span>
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  </div>
{/if}

<style>
  nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    min-height: 3.2rem;
    padding: 0.5rem 1rem;
    background: #333;
    font-family: 'Catamaran', sans-serif;
  }

  .nav-spacer {
    flex: 1;
  }

  .nav-links {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    flex: 1;
  }

  .brand {
    color: #f4f2ec;
    font-weight: 700;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    font-size: 0.95rem;
    text-align: center;
    pointer-events: none;
    margin: 0 1rem;
    flex: 0 0 auto;
    color: #317758;
    font-size: 28px;
    font-family: 'Courgette', cursive;
    text-shadow: -1px -1px #222;
  }

  nav a,
  nav button {
    text-decoration: none;
    padding: 0.35rem 0.9rem;
    margin: 0.25rem;
    border-radius: 999px;
    color: #eee;
    background: #111;
    border: 1px solid #333;
    cursor: pointer;
    font: inherit;
  }

  .accent-button {
    background: #7cbc9f;
    color: #333;
    margin-right: 0.75rem;
  }

  .modal-backdrop {
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.45);
    display: grid;
    place-items: center;
    z-index: 1000;
  }

  .modal {
    width: min(90vw, 360px);
    background: #fff;
    color: #222;
    padding: 1rem 1.1rem 1.2rem;
    border-radius: 12px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.25);
    position: relative;
  }

  .close-button {
    position: absolute;
    top: 0.5rem;
    right: 0.5rem;
    background: transparent;
    border: 0;
    color: #666;
    font-size: 1.2rem;
    padding: 0.2rem 0.4rem;
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 0.6rem;
  }

  label {
    font-size: 0.95rem;
  }

  .captcha {
    position: absolute;
    left: -9999px;
    top: auto;
    width: 1px;
    height: 1px;
    overflow: hidden;
    opacity: 0;
    pointer-events: none;
  }

  input {
    padding: 0.6rem 0.7rem;
    border: 1px solid #ccc;
    border-radius: 8px;
  }

  button[type='submit'] {
    align-self: flex-start;
    background: #2f5f57;
    color: white;
    border: 0;
    border-radius: 999px;
    padding: 0.45rem 0.85rem;
  }

  @media (max-width: 1068px) {
    .brand {
      order: 1;
      color: #ff4d4d;
    }
    .nav-spacer {
      order: 2;
    }
    .nav-links {
      order: 3
    }
  }
</style>
