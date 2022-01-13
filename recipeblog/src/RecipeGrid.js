import React from 'react';
import RecipeCard from './RecipeCard';

const RecipeGrid = ({ recipes, setSelectedRecipe }) => {
    const onRecipeClick = recipe => setSelectedRecipe(recipe);
    const renderList = () => {
        return recipes.map((recipe, i) => {
            return (
                <div className="ui column" key={recipe.id}>
                    <div className="card">
                        <RecipeCard onClick={onRecipeClick} recipe={recipe}/>
                    </div>
                </div>
                )
            })
    }
    
    return (
        <div className="ui container">
            <div className="ui stackable grid container">
                <div className="ui centered three column grid">
                    {renderList()}
                    </div>
                </div>
            </div>
        )
    };

export default RecipeGrid;