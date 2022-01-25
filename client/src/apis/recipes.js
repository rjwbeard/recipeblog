import axios from "./index";

export const fetchRecipes = async () => {
  const response = await axios.get("/recipes");
  const recipes = response.data;
  return recipes;
};

export const fetchRecipe = async (id) => {
  const response = await axios.get(`/recipes/${id}`);
  const recipe = response.data;
  return recipe;
};

export const searchRecipes = async ({ name }) => {
  const recipes = await fetchRecipes();
  return recipes.filter((r) => {
    return r.name.toLowerCase().includes(name.toLowerCase());
  });
};
