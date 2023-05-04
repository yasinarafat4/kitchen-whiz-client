import React from "react";
import aboutImg from "../../assets/about.png";
import { Container } from "react-bootstrap";

const About = () => {
  return (
    <Container>
      <h2 className="text-center m-5">About Us</h2>
      <div className="d-lg-flex justify-content-center align-items-center mb-5">
        <div className="">
          <p>
            {" "}
            Welcome to our website, where we strive to bring you the best
            Chinese cuisine. Our mission is to share the rich cultural heritage
            of Chinese food with our audience while providing a modern take on
            traditional recipes.
          </p>

          <p>
            Our team of chefs and food experts is passionate about Chinese food
            and is dedicated to creating delicious and authentic dishes. We
            believe that Chinese cuisine reflects the country's diverse history
            and culture, and we strive to showcase the unique flavors and
            techniques that make Chinese food so special.
          </p>

          <p>
            We source the freshest and highest quality ingredients to ensure
            that our dishes are not only delicious but also healthy. We
            understand the importance of balance in Chinese cuisine, and we
            strive to incorporate this balance into our recipes.
          </p>

          <p>
            We believe that food is not just about nourishment but also about
            community, and we hope that our website can bring people together to
            share their love for Chinese food. We welcome feedback and
            suggestions from our audience and are always looking for ways to
            improve our recipes and content.
          </p>

          <p>
            Thank you for choosing us as your source of culinary inspiration. We
            hope our recipes bring you joy, comfort, and a taste of China.
          </p>
        </div>
        <img className="m-lg-3 w-100 rounded" src={aboutImg} alt="" />
      </div>
    </Container>
  );
};

export default About;
