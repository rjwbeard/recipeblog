import axios from "./index";

export const fetchRecipes = async () => {
  const response = await axios.get("/recipes");
  const recipes = response.data;
  return recipes;
};

export const fetchRecipe = async (id) => {
  const response = await axios.get(`/recipes/${id}`);
  const recipe = response.data;
  return recipe[0];
};

export const searchRecipes = async ({ name }) => {
  const recipes = await fetchRecipes();
  return recipes.filter((r) => {
    return r.name.toLowerCase().includes(name.toLowerCase());
  });
};

export const addRecipe = async (formValues) => {
  console.log(formValues);
  const response = await axios
    .post("/recipes/add", { ...formValues })
    .then((response) => {
      return response;
    })
    .catch((e) => {
      console.error(e);
    });
  console.log(response);
};

export const deleteRecipe = async (id) => {
  const response = await axios
    .delete(`/recipes/${id}`)
    .then((response) => {
      return response;
    })
    .catch((e) => {
      console.error(e);
    });
  console.log(response);
};
