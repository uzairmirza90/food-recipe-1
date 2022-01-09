import React from "react";

const NumofRecipes = ({numberOfRecipes, setnumberofrecipes}) => {
    return (
        <input className="numberofrec" type='number' value={numberOfRecipes} 
            onChange={(e) => setnumberofrecipes(e.target.value)}>
        </input>
    )
}

export default NumofRecipes;