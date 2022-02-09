import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";

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

  return (
    <div className="RecipeDetails">
      <div className="RecipeDetails_header">
        <h1 className="RecipeDetails_header_title">{recipe.name}</h1>
        <img
          className="RecipeDetails_header_image"
          src={recipe.image}
          alt="food"
        ></img>
      </div>
      <div className="RecipeDetails_body">
        <div className="RecipeDetails_body_short_details">
          <header className="RecipeDetails_body_header">Active Time: </header>
          <div className="RecipeDetails_body_time">{recipe.activeTime}</div>
          <header className="RecipeDetails_body_header">Total Time: </header>
          <div className="RecipeDetails_body_time">{recipe.totalTime}</div>
          <header className="RecipeDetails_body_header">Yield: </header>
          <div className="RecipeDetails_body_time">{recipe.yield}</div>
        </div>
        <div className="RecipeDetails_body_ingredients">
          <header className="RecipeDetails_body_header">Ingredients: </header>
          <ReactMarkdown className="RecipeDetails_body_ingredients_list">
            {recipe.ingredients}
          </ReactMarkdown>
        </div>
        <div className="RecipeDetails_body_method">
          <header className="RecipeDetails_body_header">Method:</header>
          <ReactMarkdown className="RecipeDetails_body_method_steps">
            {recipe.method}
          </ReactMarkdown>
        </div>
      </div>
      <CommentSection recipeId={parseInt(recipe.id)} />
    </div>
  );
};

export default RecipeDetails;
