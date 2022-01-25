import React from "react";
import { Route, Routes } from "react-router-dom";

import "./utils/App.css";
import AboutMe from "./components/AboutMe";
import Header from "./components/Header";
import RecipeGrid from "./components/recipes/RecipeGrid";
import RecipeDetails from "./components/recipes/RecipeDetails";

const App = () => {
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/" exact element={<RecipeGrid />} />
        <Route path="/recipes/:id" exact element={<RecipeDetails />} />
        <Route path="/aboutme" exact element={<AboutMe />} />
      </Routes>
    </div>
  );
};

export default App;
