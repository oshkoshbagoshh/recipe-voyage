const createRecipe = async (event) => {
  event.preventDefault();
  
  const recipe_name = document.querySelector('#recipe_name').value.trim();
  const ingredients = document
    .querySelector('#recipe_ingredients')
    .value.trim();
  const instructions = document
    .querySelector('#recipe_instructions')
    .value.trim();

  if (recipe_name && ingredients && instructions) {
    const response = await fetch(`/api/recipes`, {
      method: 'POST',
      body: JSON.stringify({ recipe_name, ingredients, instructions }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert('Failed to create recipe');
    }
  }
};

const delButtonHandler = async (event) => {
  if (event.target.hasAttribute('data-id')) {
    const id = event.target.getAttribute('data-id');

    const response = await fetch(`/api/recipes/${id}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert('Failed to delete recipe');
    }
  }
};

document
  .querySelector('.new-recipe-form')
  .addEventListener('submit',createRecipe); //used to be newFormHandler


  // this is where our error is coming in 
document
  .querySelector('.recipe-list')
  .addEventListener('click', delButtonHandler);