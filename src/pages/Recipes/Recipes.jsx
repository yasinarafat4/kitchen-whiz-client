import React from "react";
import { useLoaderData } from "react-router-dom";
import { FaRegThumbsUp } from "react-icons/fa";
import { Container } from "react-bootstrap";
import RecipeCard from "./RecipeCard";

const Recipes = () => {
  const recipes = useLoaderData();
  console.log(recipes);
  const {
    chef_picture,
    chef_name,
    description,
    likes,
    num_of_recipes,
    years_of_experience,
    chef_recipes,
    _id,
  } = recipes;
  return (
    <Container className=" m-3 mx-auto w-100">
      <h2 className="text-center m-5">{chef_name}</h2>
      <div className="row d-flex align-items-center justify-content-center">
        <div className="col-md-6 order-md-2 d-flex align-items-center justify-content-center">
          <img
            src={chef_picture}
            className="rounded-start w-75 mb-3"
            alt="chef image"
          />
        </div>
        <div className="col-md-6">
          <div className="">
            <h4>About {chef_name}</h4>
            <p className="fs-5">
              <span className="fw-semibold "></span> {description}
            </p>
            <p className="fs-5">
              <span className="fw-semibold">Years of Experience:</span>{" "}
              {years_of_experience}
            </p>
            <p className="fs-5">
              <span className="fw-semibold ">Number of Recipes: </span>
              {num_of_recipes}
            </p>
            <div className="d-flex justify-content-between align-items-center">
              <p className="d-flex align-items-center gap-1 fs-5">
                <FaRegThumbsUp /> {likes}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div>
        {chef_recipes.map((recipe) => (
          <RecipeCard recipe={recipe} key={recipe.recipe_id}></RecipeCard>
        ))}
      </div>
    </Container>
  );
};

export default Recipes;
