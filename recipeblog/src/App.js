import './App.css';
import Header from './Header';
import RecipeGrid from './RecipeGrid';
import React, { useState } from 'react';
import ShowRecipe from './ShowRecipe';
import { recipes as recipeArray } from './recipeArray';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const App = () => {
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  return (
      <div className="ui container">
        <Router>
          <Header />
          <Routes>
            <Route path="/" exact component={RecipeGrid} />
            <Route path="/recipes/:id" exact component={ShowRecipe} currentRecipe={selectedRecipe}/>
          </Routes>
        <span className="ui horizontal divider"></span>
        <div className="ui container">
          <RecipeGrid recipes={recipeArray} onRecipeSelect={setSelectedRecipe}/>
        </div>
        </Router>
      </div>
  );
}

export default App;
