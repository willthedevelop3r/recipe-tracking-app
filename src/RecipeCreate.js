import React, { useState } from "react";
import "./App.css";

// ADDRECIPE HELPER FUNCTION PASSED AS A PROP

function RecipeCreate({ addRecipe }) {
  // INITIAL EMPTY ARRAY
  const [recipes, setRecipes] = useState([]);

  // INITIAL FORM OBJECT
  const [form, setForm] = useState({
    name: "",
    cuisine: "",
    photo: "",
    ingredients: "",
    preparation: "",
  });

  // CHANGE HANDLER FUNCTION FOR THE "FORM"
  const handleChange = ({ target }) => {
    setForm({
      ...form,
      [target.name]: target.value,
    });
  };

  // SUBMIT HANDLER
  const handleSubmit = (event) => {
    event.preventDefault();

    // PURE FUNCTION TO ADD RECIPE TO THE "FORM"
    addRecipe(form);

    // SET RECIPES AS AN OBJECT INSIDE OF AN ARRAY
    setRecipes((recipes) => [...recipes, form]);

    // SETFORM BACK TO "INITIAL STATE" AFTER SUBMISSION
    setForm({
      name: "",
      cuisine: "",
      photo: "",
      ingredients: "",
      preparation: "",
    });
  };

  // LOGS FOR TESTING
  // console.log("Form:", form);
  // console.log("Recipes:", recipes);

  // RENDER A FORM TABLE FOR CREATING A NEW RECIPE
  return (
    <form name="create" onSubmit={handleSubmit}>
      <table>
        <tbody>
          <tr>
            <td>
              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Name"
                required
              />
            </td>
            <td>
              <input
                name="cuisine"
                value={form.cuisine}
                onChange={handleChange}
                placeholder="Cuisine"
                required
              />
            </td>
            <td>
              <input
                name="photo"
                value={form.photo}
                onChange={handleChange}
                placeholder="URL"
                required
              />
            </td>
            <td>
              <textarea
                name="ingredients"
                value={form.ingredients}
                onChange={handleChange}
                placeholder="Ingredients"
                className="textarea-input"
                required
              />
            </td>
            <td>
              <textarea
                name="preparation"
                value={form.preparation}
                onChange={handleChange}
                placeholder="Preparation"
                className="textarea-input"
                required
              />
            </td>
            <td>
              <button type="submit">Create</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default RecipeCreate;
