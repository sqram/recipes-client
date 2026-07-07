<script>
  // @ts-nocheck
  import { sites } from "../stores";

  const apiBase = 'https://forkforest.uw.r.appspot.com'
  let searchTerm = ""
  const fetchRecipe = async (i) => {
    $sites[i].isFetching = true;
    const response = await fetch(`${apiBase}/recipe/${$sites[i].siteId}?search=${searchTerm}`)
    const data = await response.json()
    $sites[i].isFetching = false
    $sites[i].error = data.error ?? null
    $sites[i].recipes = data.recipes.error ? [] : data.recipes 
  }

  function handleSubmit(e) {
    if (!searchTerm.trim().length) return;

    e.preventDefault()
    for (let i = 0; i < $sites.length; i++) {
      if ($sites[i].isChecked) {
        fetchRecipe(i)
      }
      // Clear previous results
      $sites[i].recipes = []
    }
  }


</script>

<form on:submit={handleSubmit}>
  <!-- <h1>Search for a recipe:</h1> -->
  <h1>i want to cook:</h1>
  <label>
    <input type="text" placeholder='e.g, banana bread' bind:value={searchTerm}>
    <input type="submit" value="ok">
  </label>
</form>

<style>


form {
  padding-left: 50px;
  box-sizing: border-box;
  width: 70%;
}

h1 {
  font-size: 2em;
  margin: 0 0 5px 0;
  padding: 0;
  font-weight: lighter;
}
label {
  display: flex;
}
input[type=text] {
  flex-grow: 1;
  background: #222;
  border: 1px solid #333;
  padding: 5px;
  color: #999;
  font-size: 1.2em;
}
input[type=text]::-webkit-input-placeholder {
  color: #444;
}
input[type=text]::-moz-placeholder {
  color: #444;
}
input[type=text]:-ms-input-placeholder {
  color: #444;
}
input[type=text]:-moz-placeholder {
  color: #444;
}
input[type=submit] {
  background: #c93d3e;
  border: 1px solid #fa8072;
  color: #fff;
  margin-left: 1em;
  padding: 7px 25px;
  color: #ccc;
  font-variant: small-caps;
  font-size: 1.3em;
}
input[type=submit]:hover {
  background: #d94f4f;
}
</style>