import { writable } from 'svelte/store';


// Current recipe being viewed in side panel
export const currentRecipe = writable({});

export const isSidepanelVisible = writable(false)

export const sites = writable([
  {
    name: "Minimalist Baker",
    siteId: "minimalistbaker",
    isChecked: true,
    isFetching: false,
    recipes: [],
  },
  {
    name: "Feel Good Foodie",
    siteId: "feelgoodfoodie",
    isChecked: true,
    isFetching: false,
    recipes: [],
  },
  {
    name: "Add a Pinch",
    siteId: "addapinch",
    isChecked: true,
    isFetching: false,
    recipes: [],
  },
  {
    name: "Food Network",
    siteId: "foodnetwork",
    isChecked: true,
    isFetching: false,
    recipes: [],
  }
])