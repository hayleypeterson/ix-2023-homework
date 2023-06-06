import React from 'react';

export default function RecipeTable(props) {
  return (
    <div>
      <table className="table mt-5">
        <thead>
          <tr>
            <th>ID</th>
            <th>Recipe Name</th>
            <th>Ingredients</th>
            <th> Steps </th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody id="table-body">
          {props.recipes.map((recipe) => {
            return (
              <tr key={recipe.id}>
                <td>{recipe.id}</td>
                <td>{recipe.name}</td>
                <td>{recipe.maker}</td>
                <td> {recipe.desc} </td>
                <td>
                  <button
                    className="btn btn-outline-danger btn-sm me-1"
                    onClick={() => props.onRecipeDelete(recipe)}
                  >
                    Delete
                  </button>
                  <button
                    className="btn btn-outline-warning btn-sm ms-1"
                    onClick={() => props.onRecipeEdit(recipe)}
                  >
                    Edit
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>

    </div>
  );
}
