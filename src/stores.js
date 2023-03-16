import { writable } from 'svelte/store';

export const searchResults = writable([]);

// Current recipe being viewed in side panel
export const currentRecipe = writable({});

export const isSidepanelVisible = writable(false)