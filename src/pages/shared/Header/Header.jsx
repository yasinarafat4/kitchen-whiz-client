import React from "react";
import Lottie from "lottie-react";
import food from "../../../assets/food.json";

const Header = () => {
  return (
    <div className="d-md-flex justify-content-center align-items-center">
      <div>
        <h5 className=" fw-semibold mt-3 ">Best Quality Foods</h5>
        <p className="fs-2  fw-bold">
          Hunger is the <span style={{ color: "#bb4042" }}>best sauce!</span>
        </p>
        <p className="fs-5">
          Welcome! You are in the right place, where you'll find amazing Chinese
          recipes, cooking tips, and culinary inspiration from around the world
          with the best chefs. Let's explore the diverse and delicious world of
          food together!
        </p>
      </div>
      <div>
        <Lottie animationData={food} loop={true}></Lottie>
      </div>
    </div>
  );
};

export default Header;
