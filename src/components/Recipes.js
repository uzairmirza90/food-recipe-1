import React from "react";
import { useState } from "react";
import { CircularProgress } from "@mui/material";
import Box from '@mui/material/Box';

const Recipes = ({recipes}) => {
    return (
        <div className='recipes'>
        {recipes == null
          ?
          <Box sx={{ display: 'flex' }}>
          <CircularProgress size={100} color='error' style={{marginTop: '300px'}}/>
          </Box>
          :
          recipes.map((recipe, index) => {
            return (
              <div className="recipe" key={index}>
                <img className="image" src={recipe['recipe']['image']}></img>
                <div className='details'>
                  <p className='header'>Name: &nbsp;&nbsp;
                    <span className='name'>{recipe['recipe']['label']}</span>
                  </p>
                  <p className='header'>Diet Label: &nbsp;&nbsp;
                    <span className='name'>{recipe['recipe']['dietLabels']}</span>
                  </p>
                  <p className='header'>Dish Type: &nbsp;&nbsp;
                    <span className='name'>{recipe['recipe']['dishType']}</span>
                  </p>
                  <p className='header'>Ingredients: &nbsp;&nbsp;
                    <span className='name'>
                      {recipe['recipe']['ingredients'].map((ingredient, index) => {
                        return (
                          <div className='list' key={index}>
                            <li>{ingredient['food']}, &nbsp;</li>
                          </div>
                        )
                      })}</span>
                  </p>
                </div>
              </div>
            )
          })}
      </div>
    )
}

export default Recipes