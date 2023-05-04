import React from "react";
import "./ChefsCard.css";
import { FaRegThumbsUp } from "react-icons/fa";
import { Link } from "react-router-dom";

const ChefsCard = ({ chef }) => {
  const {
    chef_picture,
    chef_name,
    likes,
    num_of_recipes,
    years_of_experience,
    _id,
  } = chef;
  return (
    // Chefs card section
    <div className="card mb-3 mx-auto" style={{ maxWidth: "500px" }}>
      <div className="row g-0">
        <div className="col-md-4">
          <img
            src={chef_picture}
            className="img-fluid rounded-start"
            alt="chef image"
          />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{chef_name}</h5>
            <p className="card-text">
              <span className="fw-semibold">Years of Experience:</span>{" "}
              {years_of_experience}
            </p>
            <p className="card-text">
              <span className="fw-semibold">Number of Recipes: </span>
              {num_of_recipes}
            </p>
            <div className="d-flex justify-content-between align-items-center">
              <p className="d-flex align-items-center gap-1">
                <FaRegThumbsUp /> {likes}
              </p>
              <Link to={`/recipes/${_id}`}>
                <button className="btn">View Recipes</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChefsCard;
