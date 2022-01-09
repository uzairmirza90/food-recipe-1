import React from "react";
import NumofRecipes from "./NumOfRecipes";
import { CircularProgress } from "@mui/material";
import { Box } from "@mui/system";
import Recipes from "./Recipes";
import '../App.css';

const SearchRecipe = ({onSubmit, setSearchQuery, searchQuery, numberOfRecipes, setnumberofrecipes, recipes, loading}) => {
    return (
        <div className='formcontainer App'>
        <form className='form' onSubmit={onSubmit}>
          <input className="search" type="text" placeholder='Search Recipe...' 
            onChange={(e) => setSearchQuery(e.target.value)} value={searchQuery}>
          </input>
          <NumofRecipes numberOfRecipes={numberOfRecipes} setnumberofrecipes={setnumberofrecipes}/>
          <input className='button' type='submit' value='Search'></input>
        </form>
       
        <div className="App">
        <Recipes recipes={recipes}/>
        </div>
      </div>
    )
}

export default SearchRecipe;