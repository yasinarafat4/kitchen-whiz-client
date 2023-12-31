import React, { useContext, useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

const Register = () => {
  const { createUser, userProfile } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  // register button
  const handleRegister = (event) => {
    setError("");
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const photoUrl = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;

    createUser(email, password)
      .then((result) => {
        const createdUser = result.user;

        setSuccess("User has created successfully");
        form.reset();
        updateUserProfile(name, photoUrl);
        navigate(from, { replace: true });
      })
      .catch((error) => {
        if (error.code === "auth/email-already-in-use") {
          setError("Email already used. Try with a new email!");
        } else if (error.code === "auth/weak-password") {
          setError("Password should be at least 6 characters!");
        } else {
          setError(error.message);
        }
        setSuccess("");
      });
  };

  const updateUserProfile = (name, photoUrl) => {
    const profile = {
      displayName: name,
      photoURL: photoUrl,
    };
    userProfile(profile)
      .then(() => {})
      .catch((error) => {
        setError(error.message);
      });
  };

  return (
    <div style={{ width: "340px" }} className="p-3 mt-5 mx-auto shadow">
      <Container>
        <h4 className="mb-3 text-center">Register your account</h4>
        <Form onSubmit={handleRegister}>
          <Form.Group className="mb-3">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              name="name"
              placeholder="Enter your name"
              required
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              name="email"
              placeholder="Enter your email address"
              required
            />
          </Form.Group>

          <Form.Group className="mb-3">
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
          <Form.Text className="text-danger fw-semibold">{error}</Form.Text>
          <Form.Text className="text-success fw-semibold fs-6">
            {success}
          </Form.Text>
          <Button
            className="btn btn-dark w-100 mt-2"
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
