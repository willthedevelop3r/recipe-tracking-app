import React from "react";
import "./App.css";

// RECIPES AND DELETERECIPE HELPER FUNCTION PASSED AS PROPS

function RecipeList({ recipes, deleteRecipe }) {
  // PURE FUNCTION TO HANDLE DELETES
  const handleDelete = (id) => deleteRecipe(id);

  // RENDER A TABLE DISPLAYING RECIPE INFORMATION
  return (
    <div className="recipe-list">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Cuisine</th>
            <th>Photo</th>
            <th>Ingredients</th>
            <th>Preparation</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {recipes.map(
            (
              { name, cuisine, photo, ingredients, preparation, id },
              index // MAP METHOD WITH DESTRUCTURED RECIPE OBJECT AND INDEX TO MAKE LIST
            ) => (
              <tr key={index}>
                <td>{name}</td>
                <td>{cuisine}</td>
                <td>
                  <img src={photo} alt={name} height="50" />
                </td>
                <td className="content_td">
                  <p>{ingredients}</p>
                </td>
                <td className="content_td">
                  <p>{preparation}</p>
                </td>
                <td>
                  <button name="delete" onClick={() => handleDelete(id)}>
                    Delete
                  </button>
                </td>
              </tr>
            )
          )}
        </tbody>
      </table>
    </div>
  );
}

export default RecipeList;
