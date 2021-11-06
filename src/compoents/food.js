
import Recipe from './Recipe';
import React, {useEffect,useState} from 'react';


export default function Food() {
    const APP_ID = "52ee1347";
  const APP_KEY = "bc5cbf48eaea7819cec889c52364d550";
  const [recipes,setRecipes] = useState([]);
  const [search,setSearch] = useState("");
  const [query,setQuery] = useState('');
  
 useEffect(() => {
   getRecipe()
 },[query]);
 const getRecipe = async () => {
   const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&from=0&to=3&calories=591-722&health=alcohol-free`);
   const data = await response.json();
   setRecipes(data.hits);
   console.log(data);
 };
 const updateSearch = e => {
   setSearch(e.target.value);
 };

 const getSearch = e => {
   e.preventDefault();
   setQuery(search);
   setSearch('');
 };
    return (
        <div className="App">
        <div className="form">
        <form onSubmit={getSearch}>
          <input type="text" value={search} onChange={updateSearch} style={{"height":"40px","width":"500px"}} placeholder="search for recipe........"/>
          <button type="submit" style={{"height":"40px"}}><i class="fas fa-hamburger" style={{"font-size":"1.4rem","color":""}}></i></button>
        </form>
        </div>
        <div className="recipes">
        {recipes.map(recipe => (
          <>
          <Recipe
          key = {recipe.recipe.label}
          title = {recipe.recipe.label} 
          calories = {recipe} 
          image = {recipe.recipe.image}
          ingredients = {recipe.recipe.ingredients}/>
          </>
        ))}
        </div>
      </div>
    )
}




//food data

