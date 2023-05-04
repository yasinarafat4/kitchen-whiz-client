import React, { lazy, Suspense, useEffect, useState } from "react";
import Header from "../../shared/Header/Header";
import { Col, Container, Row } from "react-bootstrap";
import DailySpecials from "../DailySpecials/DailySpecials";
import CustomersReviews from "../CustomersReviews/CustomersReviews";
// Lazy loading here
const ChefsCard = React.lazy(() => import("../ChefsCard/ChefsCard"));

/* Lazy loading test here
const ChefsCard = React.lazy(() => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(import("../ChefsCard/ChefsCard")), 2000);
  });
});
*/

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
      <Suspense
        fallback={
          <div className="d-flex justify-content-center align-items-center fs-3 text-danger fw-semibold">
            Loading...
          </div>
        }
      >
        <Row className="mx-auto">
          {chefs.map((chef) => (
            <Col md={12} lg={6} key={chef._id}>
              <ChefsCard chef={chef}></ChefsCard>
            </Col>
          ))}
        </Row>
      </Suspense>

      {/* Customers Reviews Section*/}
      <CustomersReviews></CustomersReviews>
    </Container>
  );
};

export default Home;
