import './App.css';
import { useState } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

import RecipeForm from './components/RecipeForm';
import RecipeTable from './components/RecipeTable';

function App() {
  // Declare a new State variable
  // React hook used managing component state
  const [recipes, setRecipes] = useState([]);
  const [recipeToEdit, setRecipeToEdit] = useState(null);

  function onRecipeCreated(recipe) {
    setRecipeToEdit(null);
    setRecipes([...recipes, recipe]);
  }

  function onRecipeDelete(recipe) {
    setRecipes(recipes.filter((x) => x.id !== recipe.id));
  }

  function onRecipeEdit(recipe) {
    setRecipeToEdit(recipe);
    setRecipes(recipes.filter((x) => x.id !== recipe.id));
  }

  return (
    <div className="text-center m-5">
      <div className="card p-4">
        <RecipeForm
          recipeToEdit={recipeToEdit}
          onRecipeCreated={onRecipeCreated}
        ></RecipeForm>
        <RecipeTable
          recipes={recipes}
          onRecipeEdit={onRecipeEdit}
          onRecipeDelete={onRecipeDelete}
        ></RecipeTable>
      </div>
    </div>
  );
}

export default App;
