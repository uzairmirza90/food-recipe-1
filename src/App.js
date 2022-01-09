import * as React from 'react';
import './App.css';
import { useState, useEffect } from 'react';
import Recipes from './components/Recipes';
import SearchRecipe from './components/SearchRecipe';
import {CircularProgress, Box} from '@mui/material'

function App() {
  const [recipes, setRecipes] = useState();
  const [searchQuery, setSearchQuery] = useState('');
  const [numberOfRecipes, setnumberofrecipes] = useState(10);
  const [loading, setLoading] = useState(false);

  const apiId = '94a2c70b';
  const apiKey = `9e3e04555736959ec8b0d044f1d334bf`;
  const apiUrl = `https://api.edamam.com/search?q=${searchQuery}&app_id=${apiId}&app_key=${apiKey}&from=0&to=${numberOfRecipes}&calories=591-722&health=alcohol-free`;

  useEffect(() => {
    const fetchRecipes = async () => {
      const recipes = await fetchData();
      return recipes;
    }
    fetchRecipes();
  }, [])

  async function fetchData() {
    try {
      let data = await fetch(apiUrl).then(res => res.json());
      console.log(data)
      setRecipes(data.hits);
      setLoading(true);
    } catch (err) {
      console.log(err)
    }
  }
  
  function onSubmit(e) {
    e.preventDefault();
      fetchData()
  };

  return (
    <div className="App">
      <div className='headingcontainer'>
        <h1 className='heading'>Food Recipe</h1>
      </div>
      <SearchRecipe 
        onSubmit={onSubmit} 
        setSearchQuery={setSearchQuery} 
        searchQuery={searchQuery} 
        numberOfRecipes={numberOfRecipes} 
        setnumberofrecipes={setnumberofrecipes} 
        loading={loading}
        recipes={recipes}
        fetchData={fetchData}
      />
    </div>
  );
}

export default App;
