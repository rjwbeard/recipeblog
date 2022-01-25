import React from "react";

const RecipeCard = ({ recipe }) => {
  return (
    <div className="recipe-card">
      <div>
        <em>
          <div className="card-title">{recipe.name}</div>
        </em>
        <div className="card-recipe-info">
          <img
            src={recipe.image}
            className="card-image"
            alt="picture-of-food"
          ></img>
          <div>
            <b>Active Time:</b> {recipe.activeTime} minutes
          </div>
          <div>
            <b>Total Time:</b> {recipe.totalTime} minutes
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;
