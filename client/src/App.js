import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";

import "./utils/App.css";
import AboutMe from "./components/AboutMe";
import Header from "./components/Header";
import RecipeGrid from "./components/recipes/RecipeGrid";
import RecipeDetails from "./components/recipes/RecipeDetails";
import FavoriteRecipes from "./components/recipes/FavoriteRecipes";
import RecipeForm from "./components/recipes/RecipeForm";

const App = () => {
  const [isHydrated, setIsHydrated] = useState(false);

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route
          path="/"
          exact
          element={
            <RecipeGrid isHydrated={isHydrated} setIsHydrated={setIsHydrated} />
          }
        />
        <Route path="/recipes/:id" exact element={<RecipeDetails />} />
        <Route
          path="/recipes/favorites/:id"
          exact
          element={<FavoriteRecipes />}
        />
        <Route
          path="/recipes/add"
          exact
          element={<RecipeForm setIsHydrated={setIsHydrated} />}
        />
        <Route path="/aboutme" exact element={<AboutMe />} />
      </Routes>
    </div>
  );
};

export default App;
