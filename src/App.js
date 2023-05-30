import React, { useState } from "react";
import "./App.css";
import RecipeCreate from "./RecipeCreate";
import RecipeList from "./RecipeList";
import RecipeData from "./RecipeData";

// APP FUNCTION TO RENDER THINGS TO PAGE
function App() {
  const [recipes, setRecipes] = useState(RecipeData);

  // HELPER FUNCTION TO ADD RECIPE
  const addRecipe = (newRecipe) => {
    const recipeId = Date.now().toString(); // CREATES A UNIQUE ID FOR RECIPE
    const updatedRecipe = { ...newRecipe, id: recipeId };
    setRecipes([...recipes, updatedRecipe]);
  };

  // HELPER FUNCTION TO DELETE RECIPE BY UNIQUE ID
  const deleteRecipe = (recipeId) => {
    const updatedRecipes = recipes.filter((recipe) => recipe.id !== recipeId);
    setRecipes(updatedRecipes);
  };

  // RENDERS CONTENT TO THE PAGE
  return (
    <div className="App">
      <header>
        <h1>Delicious Food Recipes</h1>
      </header>
      <RecipeList recipes={recipes} deleteRecipe={deleteRecipe} />
      <RecipeCreate addRecipe={addRecipe} />
    </div>
  );
}

export default App;
