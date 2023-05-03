import React from "react";
import { Button, Container, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div style={{ width: "340px" }} className="p-3 mt-5 mx-auto shadow">
      <Container>
        <h4 className="mb-3 text-center">Register your account</h4>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              name="name"
              placeholder="Enter your name"
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              name="email"
              placeholder="Enter your email address"
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              name="password"
              placeholder="Enter your password"
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Photo URL</Form.Label>
            <Form.Control
              type="text"
              name="photo"
              placeholder="Enter your photo url"
              required
            />
          </Form.Group>
          <Form.Text className="text-success"></Form.Text>
          <Form.Text className="text-danger"></Form.Text>

          <Button
            className="btn btn-dark w-100"
            variant="primary"
            type="submit"
          >
            Register
          </Button>
          <Form.Text className=" fw-semibold">
            Already Have An Account ?{" "}
            <Link className="text-decoration-none text-danger" to="/login">
              Login
            </Link>{" "}
          </Form.Text>
        </Form>
      </Container>
    </div>
  );
};

export default Register;
