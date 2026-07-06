<script>
  let isFeedbackOpen = false;
  let feedbackMessage = '';

  function openFeedback() {
    isFeedbackOpen = true;
  }

  function closeFeedback() {
    isFeedbackOpen = false;
    feedbackMessage = '';
  }

  function handleSubmit(event) {
    event.preventDefault();
    closeFeedback();
  }
</script>

<nav>
  <a href="/">Home</a>
  <a href="/about">FAQ</a>
  <button type="button" on:click={openFeedback}>Feedback</button>
  <a href="/">Suggest a site</a>
</nav>

{#if isFeedbackOpen}
  <div class="modal-backdrop" role="presentation" on:click={closeFeedback}>
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <div class="modal" role="dialog" aria-modal="true" aria-label="Feedback form" on:click|stopPropagation>
      <button class="close-button" type="button" on:click={closeFeedback} aria-label="Close feedback form">×</button>
      <h3>Send feedback</h3>
      <form on:submit={handleSubmit}>
        <label for="feedback-input">What would you like to share?</label>
        <input id="feedback-input" bind:value={feedbackMessage} placeholder="Tell us what you think" />
        <button type="submit">Submit</button>
      </form>
    </div>
  </div>
{/if}

<style>
  nav {
    display: flex;
    justify-content: flex-end;
    padding: 0.5rem 0;
    background: #333;
    font-family: 'Catamaran', sans-serif;
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

  nav a:last-of-type {
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
</style>
