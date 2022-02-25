import React from "react";

const RecipeCard = ({ recipe }) => {
  return (
    <div className="RecipeCard">
      <h1 className="RecipeCard_title">{recipe.name}</h1>
      <div className="RecipeCard_image_container">
        <img
          src={recipe.image}
          className="RecipeCard_image"
          alt="delicious-food"
        ></img>
      </div>
      <div className="RecipeCard_times">
        <div>
          <b>Active Time:</b> {recipe.activeTime}
        </div>
        <div>
          <b>Total Time:</b> {recipe.totalTime}
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;
