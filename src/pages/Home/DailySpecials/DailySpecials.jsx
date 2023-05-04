import React, { useState } from "react";
import foodOne from "../../../assets/foodOne.png";
import foodTwo from "../../../assets/foodTwo.png";
import foodThree from "../../../assets/foodThree.png";
import { Card } from "react-bootstrap";
import Marquee from "react-fast-marquee";

const DailySpecials = () => {
  const [isPaused, setIsPaused] = useState(false);

  const handleMouseOver = () => {
    setIsPaused(true);
  };

  const handleMouseOut = () => {
    setIsPaused(false);
  };
  return (
    <div className="d-grid grid-col-6 mb-5">
      <h2 className="text-center fw-bold mb-3">Our Daily Specials</h2>
      <Marquee
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
        speed={40}
        gradient={false}
        pauseOnHover={!isPaused}
      >
        <div className="row row-cols-3 mx-auto">
          <div className="col">
            <Card className="text-center shadow" style={{ width: "20rem" }}>
              <Card.Img variant="top" src={foodOne} />
              <Card.Body>
                <Card.Title className="fs-4">Kung Pao Chicken</Card.Title>
                <Card.Text className="fs-6 fw-semibold">$34.50</Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div className="col">
            <Card className="text-center shadow" style={{ width: "20rem" }}>
              <Card.Img variant="top" src={foodTwo} />
              <Card.Body>
                <Card.Title className="fs-4">
                  {" "}
                  Dried Char Siu Noodles
                </Card.Title>
                <Card.Text className="fs-6 fw-semibold">$45.50</Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div className="col">
            <Card className="text-center shadow" style={{ width: "20rem" }}>
              <Card.Img variant="top" src={foodThree} />
              <Card.Body>
                <Card.Title className="fs-5">
                  Sichuan-style Spicy Chicken
                </Card.Title>
                <Card.Text className="fs-6 fw-semibold">$35.50</Card.Text>
              </Card.Body>
            </Card>
          </div>
        </div>
      </Marquee>
    </div>
  );
};

export default DailySpecials;
