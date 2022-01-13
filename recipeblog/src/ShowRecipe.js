import React from 'react';

const ShowRecipe = ({ recipe }) => {
    return (
        <div>
            {recipe.method.map((step) => {
                return (
                    <div>
                        <div>
                            <h6>Ingredients: {recipe.ingredients.map((ingredient, i) => {
                                if (i === recipe.ingredients.length-1) {
                                    return `${ingredient}`
                                } else {
                                    return `${ingredient}, `
                                }})}
                            </h6>
                        </div>
                        <h6>{step}</h6>
                    </div>
                );
            })}
        </div>
    )
}

export default ShowRecipe;