import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { fetchRecipe } from "../../apis/recipes";
import CommentSection from "../comments/CommentSection";

const RecipeDetails = () => {
  const [recipe, setRecipe] = useState();
  const [isHydrated, setIsHydrated] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    setIsHydrated(false);
    fetchRecipe(id)
      .then(setRecipe)
      .then(() => setIsHydrated(true));
  }, [id]);

  if (!recipe || !isHydrated) {
    return null;
  }

  const renderList = (list) => {
    const renderedList = list.map((item, i) => <li key={i}>{item}</li>);
    return renderedList;
  };

  return (
    <div className="RecipeDetails">
      <header>
        <h1 className="details-title">{recipe.name}</h1>
        <img className="details-image" src={recipe.image} alt="food"></img>
      </header>
      <div className="details-time-yield-ingredients">
        <div>
          <header className="details-header">Active Time: </header>
          <div className="details-time">{recipe.activeTime} minutes</div>
          <header className="details-header">Total Time: </header>
          <div className="details-time">{recipe.totalTime} minutes</div>
          <header className="details-header">Yield: </header>
          <div className="details-time">{recipe.yield}</div>
        </div>
        <div>
          <header className="details-header">Ingredients: </header>
          <ul className="details-ingredient-list">
            {renderList(recipe.ingredients)}
          </ul>
        </div>
      </div>
      <div className="details-method">
        <header className="details-header">Method:</header>
        <ul className="details-method-steps">{renderList(recipe.method)}</ul>
      </div>
      <div className="comment-section">
        <CommentSection recipeId={recipe.id} />
      </div>
    </div>
  );
};

export default RecipeDetails;
