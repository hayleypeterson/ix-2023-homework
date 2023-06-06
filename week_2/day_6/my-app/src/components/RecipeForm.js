import React, { useState, useEffect } from 'react';
import { Recipe } from '../models/Recipe';

export default function RecipeForm(props) {
  const [name, setname] = useState('');
  const [maker, setmaker] = useState('');
  const [id, setid] = useState('');
  const [desc, setdesc] = useState('');

  // React hook that runs a function anytime a given variable/object changes
  useEffect(() => {
    if (props.recipeToEdit) {
      setname(props.recipeToEdit.name);
      setmaker(props.recipeToEdit.maker);
      setid(props.recipeToEdit.id);
      setdesc(props.recipeToEdit.desc);
    }
  }, [props.recipeToEdit]);

  function onRecipeFormSubmit(e) {
    e.preventDefault();

    if (!isValid()) {
      return;
    }

    let recipe = new Recipe(name, maker, id, desc);
    props.onRecipeCreated(recipe);
    clearInputs();
  }

  function isValid() {
    return name !== '' && maker !== '' && id !== '' && desc != '';
  }

  function clearInputs() {
    setname('');
    setmaker('');
    setid('');
    setdesc('');
  }

  return (
    <div>
      <h1>My Recipe Book</h1>

      <form id="form" onSubmit={onRecipeFormSubmit}>
        <div className="mb-3">
          <label className="form-label"> Recipe Name </label>
          <input
            id="name-input"
            type="text"
            className="form-control"
            value={name}
            onChange={(e) => setname(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label className="form-label"> Ingredients </label>
          <input
            id="maker-input"
            type="text"
            className="form-control"
            value={maker}
            onChange={(e) => setmaker(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label className="form-label"> #ID </label>
          <input
            id="id-input"
            type="text"
            className="form-control"
            value={id}
            onChange={(e) => setid(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label className="form-label"> Steps to Make </label>
          <textarea
            id="id-input"
            type="text"
            className="form-control"
            value={desc}
            onChange={(e) => setdesc(e.target.value)}
          />
        </div>

        <div className="d-grid mt-4">
          <button className="btn btn-outline-primary" type="submit">
            {props.recipeToEdit ? 'Update Recipe' : 'Add Recipe'}
          </button>
        </div>
      </form>
    </div>
  );
}
