import React, { useEffect, useState } from "react";
import Header from "../../shared/Header/Header";
import { Col, Container, Row } from "react-bootstrap";
import ChefsCard from "../ChefsCard/ChefsCard";
import DailySpecials from "../DailySpecials/DailySpecials";
import CustomersReviews from "../CustomersReviews/CustomersReviews";

const Home = () => {
  const [chefs, setChefs] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/chefs")
      .then((res) => res.json())
      .then((data) => setChefs(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <Container>
      {/* Header Section*/}
      <Header></Header>

      {/* Daily Special Section */}
      <DailySpecials></DailySpecials>

      {/* all chefs data mapped here */}
      <h2 className="text-center fw-bold mb-5">Our All Chefs</h2>
      <Row className="mx-auto">
        {chefs.map((chef) => (
          <Col md={12} lg={6} key={chef._id}>
            <ChefsCard chef={chef}></ChefsCard>
          </Col>
        ))}
      </Row>

      {/* Customers Reviews Section*/}
      <CustomersReviews></CustomersReviews>
    </Container>
  );
};

export default Home;
