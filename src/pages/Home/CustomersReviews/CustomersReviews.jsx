import React from "react";
import restaurant from "../../../assets/restaurant.png";
import sliderBg from "../../../assets/whitebg.png";

import customerOne from "../../../assets/customerOne.png";
import customerTwo from "../../../assets/customerTwo.png";
import customerThree from "../../../assets/customerThree.png";

import { Carousel, Image } from "react-bootstrap";
import { FaStar } from "react-icons/fa";
import Rating from "react-rating";

const CustomersReviews = () => {
  return (
    <>
      <h2 className="text-center fw-bold mb-5 mt-5">Customers Reviews</h2>

      <div className="row mb-5">
        <div className="col-md-7">
          <img className="w-100 rounded" src={restaurant} alt="" />
        </div>
        <div className="col-md-5">
          <Carousel className="shadow">
            <Carousel.Item>
              <img className="d-block" src={sliderBg} alt="First slide" />
              <Carousel.Caption>
                <div className="d-flex justify-content-center align-items-center">
                  <Image
                    style={{
                      width: "40px",
                      height: "40px",
                      margin: "10px",
                      border: "1px solid black",
                    }}
                    src={customerOne}
                    roundedCircle
                  />
                  <h5 style={{ color: "black" }}>Emily S.</h5>
                </div>
                <p style={{ color: "black", fontSize: "15px" }}>
                  I stumbled upon this food website while searching for healthy
                  meal options, and I'm so glad I did! The variety of recipes is
                  amazing, and I love that I can easily filter based on my
                  dietary needs. I've already tried a few recipes and they've
                  all been delicious. Thanks, Kitchen Whiz!
                </p>
                <div>
                  <Rating
                    emptySymbol={<FaStar className="text-warning"></FaStar>}
                    readonly
                    placeholderSymbol={
                      <FaStar className="text-warning"></FaStar>
                    }
                    fullSymbol={<FaStar></FaStar>}
                  />
                </div>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img src={sliderBg} alt="First slide" />
              <Carousel.Caption>
                <div className="d-flex justify-content-center align-items-center">
                  <Image
                    style={{
                      width: "40px",
                      height: "40px",
                      margin: "10px",
                      border: "1px solid black",
                    }}
                    src={customerTwo}
                    roundedCircle
                  />
                  <h5 style={{ color: "black" }}>Sarah R.</h5>
                </div>
                <p style={{ color: "black", fontSize: "15px" }}>
                  I've been using Foodie Finder for a few months now and it's
                  become my go-to resource for meal planning. The recipes are
                  easy to follow and the ingredients are all easily accessible.
                  The website is also very user-friendly and I love that I can
                  save my favorite recipes to my account. Highly recommend!
                </p>
                <div>
                  <Rating
                    emptySymbol={<FaStar className="text-warning"></FaStar>}
                    readonly
                    placeholderSymbol={
                      <FaStar className="text-warning"></FaStar>
                    }
                    fullSymbol={<FaStar></FaStar>}
                  />
                </div>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img src={sliderBg} alt="First slide" />
              <Carousel.Caption>
                <div className="d-flex justify-content-center align-items-center">
                  <Image
                    style={{
                      width: "40px",
                      height: "40px",
                      margin: "10px",
                      border: "1px solid black",
                    }}
                    src={customerThree}
                    roundedCircle
                  />
                  <h5 style={{ color: "black" }}>John D.</h5>
                </div>
                <p style={{ color: "black", fontSize: "15px" }}>
                  I recently hosted a dinner party and was looking for some
                  unique and tasty appetizer ideas. I found exactly what I was
                  looking for on Foodie Finder! The appetizers were a hit and my
                  guests couldn't stop raving about them. I'll definitely be
                  using this website for future events.
                </p>
                <div>
                  <Rating
                    emptySymbol={<FaStar className="text-warning"></FaStar>}
                    readonly
                    placeholderSymbol={
                      <FaStar className="text-warning"></FaStar>
                    }
                    fullSymbol={<FaStar></FaStar>}
                  />
                </div>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
    </>
  );
};

export default CustomersReviews;
