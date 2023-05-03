import React, { useState } from "react";
import { Card, Col, Row } from "react-bootstrap";
import { FaRegStar, FaStar, FaGratipay } from "react-icons/fa";
import Rating from "react-rating";
import { toast } from "react-hot-toast";

const RecipeCard = ({ recipe }) => {
  const [favorite, setFavorite] = useState(true);

  const { recipe_name, ingredients, cooking_method, rating } = recipe;
  console.log(recipe);

  const handleFavorite = (event) => {
    toast.success("Favorite! 👍");
    setFavorite(event.target.clicked);
  };

  return (
    <Row className="mt-3">
      <Col>
        <Card className="w-100 h-100">
          <Card.Body>
            <Card.Title style={{ color: "#bb4042" }}>
              Recipe Name: {recipe_name}
            </Card.Title>
            <Card.Text>
              <span className="fw-semibold">Ingredients:</span>
              <ul>
                <li>{ingredients[0]}</li>
                <li>{ingredients[1]}</li>
                <li>{ingredients[2]}</li>
                <li>{ingredients[3]}</li>
                <li>{ingredients[4]}</li>
              </ul>
            </Card.Text>
            <Card.Text>
              <span className="fw-semibold">Cooking Method:</span>
              {cooking_method}
            </Card.Text>
            <div className="d-flex">
              <div className="flex-grow-1">
                <Rating
                  placeholderRating={rating}
                  emptySymbol={<FaRegStar className="text-warning"></FaRegStar>}
                  readonly
                  placeholderSymbol={<FaStar className="text-warning"></FaStar>}
                  fullSymbol={<FaStar></FaStar>}
                />
                <span className="ms-1">{rating?.number}</span>
              </div>
              <button
                onClick={handleFavorite}
                disabled={!favorite}
                className="btn"
              >
                Favorite <FaGratipay />{" "}
              </button>
            </div>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};

export default RecipeCard;
