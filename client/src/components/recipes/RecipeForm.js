import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addRecipe } from "../../apis/recipes";

const RecipeForm = ({ setIsHydrated }) => {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [activeTime, setActiveTime] = useState("");
  const [totalTime, setTotalTime] = useState("");
  const [totalYield, setTotalYield] = useState("");
  const [method, setMethod] = useState("");
  const [notes, setNotes] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addRecipe({
      name,
      image,
      description,
      ingredients,
      activeTime,
      totalTime,
      totalYield,
      method,
      notes,
    });
    setIsHydrated(false);
    navigate("/");
  };

  return (
    <div className="RecipeForm">
      <header className="RecipeForm_header">Add a New Recipe</header>
      <form
        onSubmit={async (e) => await handleSubmit(e)}
        method="post"
        id="NewRecipeForm"
      >
        <div className="RecipeForm_row">
          <label className="RecipeForm_label" htmlFor="RecipeForm_name">
            Recipe Name
          </label>
          <input
            autoComplete="off"
            className="RecipeForm_input"
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            name="RecipeForm_name"
            id="RecipeForm_name"
          ></input>
        </div>
        <div className="RecipeForm_row">
          <label className="RecipeForm_label" htmlFor="RecipeForm_image">
            Link to Image
          </label>
          <input
            autoComplete="off"
            className="RecipeForm_input"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            type="text"
            name="RecipeForm_image"
            id="RecipeForm_image"
          ></input>
        </div>
        <div className="RecipeForm_row">
          <label className="RecipeForm_label" htmlFor="RecipeForm_description">
            Description
          </label>
          <input
            autoComplete="off"
            className="RecipeForm_input"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            type="text"
            name="RecipeForm_description"
            id="RecipeForm_description"
          ></input>
        </div>
        <div className="RecipeForm_row">
          <label className="RecipeForm_label" htmlFor="form-recipe-ingredients">
            Ingredients
          </label>
          <textarea
            autoComplete="off"
            className="RecipeForm_textarea"
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
            type="text"
            name="form-recipe-ingredients"
            id="form-recipe-ingredients"
          ></textarea>
        </div>
        <div className="RecipeForm_row">
          <label className="RecipeForm_label" htmlFor="RecipeForm_active_time">
            Active Time
          </label>
          <input
            autoComplete="off"
            className="RecipeForm_input"
            value={activeTime}
            onChange={(e) => setActiveTime(e.target.value)}
            type="text"
            name="RecipeForm_active_time"
            id="RecipeForm_active_time"
          ></input>
        </div>
        <div className="RecipeForm_row">
          <label className="RecipeForm_label" htmlFor="RecipeForm_total_time">
            Total Time
          </label>
          <input
            autoComplete="off"
            className="RecipeForm_input"
            value={totalTime}
            onChange={(e) => setTotalTime(e.target.value)}
            type="text"
            name="RecipeForm_total_time"
            id="RecipeForm_total_time"
          ></input>
        </div>
        <div className="RecipeForm_row">
          <label className="RecipeForm_label" htmlFor="RecipeForm_yield">
            Yield
          </label>
          <input
            autoComplete="off"
            className="RecipeForm_input"
            value={totalYield}
            onChange={(e) => setTotalYield(e.target.value)}
            type="text"
            name="RecipeForm_yield"
            id="RecipeForm_yield"
          ></input>
        </div>
        <div className="RecipeForm_row">
          <label className="RecipeForm_label" htmlFor="RecipeForm_method">
            Method
          </label>
          <textarea
            autoComplete="off"
            className="RecipeForm_textarea"
            value={method}
            onChange={(e) => setMethod(e.target.value)}
            name="RecipeForm_method"
            id="RecipeForm_method"
          ></textarea>
        </div>
        <div className="RecipeForm_row">
          <label className="RecipeForm_label" htmlFor="RecipeForm_notes">
            Notes
          </label>
          <input
            autoComplete="off"
            className="RecipeForm_input"
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            type="text"
            name="RecipeForm_notes"
            id="RecipeForm_notes"
          ></input>
        </div>
        <button
          className="RecipeForm_submit_button"
          type="submit"
          form="NewRecipeForm"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default RecipeForm;

// {isAuthenticated ? (
//   <Link to="/recipes/add">
//     <h5 className="Header_link">Add Recipe</h5>
//   </Link>
// ) : null}
