<script>
  // @ts-nocheck
  import { searchResults } from "../stores";

  let searchTerm = null

  async function handleSubmit(e) {
    e.preventDefault()
    // Clear previous results
    searchResults.set([])
    const response = await fetch(`http://localhost:3001/recipe/minimalbaker?search=${searchTerm}`);
    const data = await response.json();
    $searchResults = [...$searchResults, { ...data }]

    const response2 = await fetch(`http://localhost:3001/recipe/feelgoodfoodie?search=${searchTerm}`);
    const data2 = await response2.json();
    $searchResults = [...$searchResults, { ...data2 }]

    const response3 = await fetch(`http://localhost:3001/recipe/addapinch?search=${searchTerm}`);
    const data3 = await response3.json();
    $searchResults = [...$searchResults, { ...data3 }]

    const response4 = await fetch(`http://localhost:3001/recipe/foodnetwork?search=${searchTerm}`);
    const data4 = await response4.json();
    $searchResults = [...$searchResults, { ...data4 }]
  }


</script>

<form on:submit={handleSubmit}>
  <h1>Search for recipe:</h1>
  <label>
    <input type="text" placeholder='ie, banana bread' bind:value={searchTerm}>
    <input type="submit" value="ok go">
  </label>
</form>

<style>

section p img:first-of-type {
  position: absolute;
  left: 20%;
  top: -124.9px;
  box-shadow: 0px 5px 5px rgba(0,0,0,0.2);
}
img:last-of-type {
  position: absolute;
  left: 20%;
  top: 70px;
}
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