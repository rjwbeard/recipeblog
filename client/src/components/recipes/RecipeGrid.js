import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { fetchRecipes, searchRecipes } from "../../apis/recipes";

import RecipeCard from "./RecipeCard";
import RecipeNotFound from "./RecipeNotFound";

const RecipeGrid = () => {
  const { search } = window.location;
  const query = new URLSearchParams(search).get("s");
  const [recipes, setRecipes] = useState([]);
  const [isHydrated, setIsHydrated] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setIsHydrated(false);
    (query ? searchRecipes({ name: query }) : fetchRecipes())
      .then(setRecipes)
      .then(() => setIsHydrated(true));
  }, [query]);

  useEffect(() => {
    if (recipes.length === 1) {
      let recipe = recipes[0];
      navigate(`/recipes/${recipe.id}`);
    }
  }, [recipes, navigate]);

  if (!isHydrated) {
    return <RecipeNotFound />;
  }

  const renderList = () => {
    if (recipes.length === 0) {
      return <RecipeNotFound />;
    }
    return recipes.map((recipe) => {
      const id = recipe.id;
      return (
        <div key={id} className="grid-item">
          <Link to={`/recipes/${id}`}>
            <RecipeCard recipe={recipe} id={id} />
          </Link>
        </div>
      );
    });
  };

  return (
    <div className="recipe-grid-container">
      <div className="recipe-grid">{renderList()}</div>
    </div>
  );
};

export default RecipeGrid;
