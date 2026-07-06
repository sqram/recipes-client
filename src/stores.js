import { writable } from 'svelte/store';

// This is used to update the main image when a user clicks on a thumbnail image,
// But we need to set it to null when user clicks on another search result while
// panel is open.
export const activeImage = writable(null);

// Current recipe being viewed in side panel
export const currentRecipe = writable({
  images: [],
  ingredients: [],
  instructions: [],
  title: "",
  time: "",
  servings: "",
  url: ""
});

export const isSidepanelVisible = writable(false)

export const sites = writable([
  {
    name: "Minimalist Baker",
    siteId: "minimalistbaker",
    isChecked: true,
    isFetching: false,
    recipes: [],
    error: null
  },
  {
    name: "Feel Good Foodie",
    siteId: "feelgoodfoodie",
    isChecked: true,
    isFetching: false,
    recipes: [],
    error: null
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
    error: null
  }
])