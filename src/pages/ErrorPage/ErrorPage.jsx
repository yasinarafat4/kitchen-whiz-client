import React from "react";
import { Link } from "react-router-dom";
import { Button, Container, Image } from "react-bootstrap";
import errorImage from "../../assets/404-error.png";

const ErrorPage = () => {
  return (
    <Container className="text-center">
      <Image src={errorImage} fluid />
      <h1 className="mt-4">Oops! Page not found</h1>
      <p>We couldn't find the page you're looking for.</p>
      <Button className="border-0 mb-5" variant="primary" as={Link} to="/">
        Back to Home
      </Button>
    </Container>
  );
};

export default ErrorPage;
