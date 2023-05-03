import React from "react";

const RecipeCard = ({ recipe }) => {
  const { recipe_name, ingredients, cooking_method, rating } = recipe;
  return (
    <div>
      <h3>{recipe_name}</h3>
    </div>
  );
};

export default RecipeCard;
