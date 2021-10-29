import './App.css';
import React, {useEffect,useState} from 'react';
import Recipe from './Recipe';

 const App = () => {
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
    console.log(data.hits);
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
         <input className="search-bar" type="text" value={search} onChange={updateSearch}/>
         <button className="search-button" type="submit">Search</button>
       </form>
       </div>
       <div className="recipes">
       {recipes.map(recipe => (
         <Recipe
         key = {recipe.recipe.label} 
         title = {recipe.recipe.label} 
         calories = {recipe.recipe.calories} 
         image = {recipe.recipe.image}
         ingredients = {recipe.recipe.ingredients}/>
       ))}
       </div>
     </div>
   )
 };

export default App;
