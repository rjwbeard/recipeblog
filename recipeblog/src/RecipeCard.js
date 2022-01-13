import React from 'react';
import { Link } from 'react-router-dom';

const RecipeCard = ({ recipe, onRecipeClick }) => {
    
    return (
        <div className="ui segment">
            <div className="ui card" onClick={onRecipeClick}>
                <div className="ui centered large header">{recipe.name}</div>
                    <div className="recipe-info">
                        <h6>Active Time: {recipe.activeTime}</h6>
                        <h6>Total Time: {recipe.totalTime} minutes</h6>
                        <h6>Yield: {recipe.yield}</h6>
                        <img className="Foto" alt="picture-of-food"></img>
                    </div> 
                </div>
            </div>
        )
    }

export default RecipeCard;