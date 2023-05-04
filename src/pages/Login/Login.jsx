import React, { useContext, useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import app from "../../firebase/firebase.config";
import {
  GithubAuthProvider,
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
} from "firebase/auth";

const Login = () => {
  const [error, setError] = useState("");

  const auth = getAuth(app);
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();

  const { logIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  console.log(location);
  const from = location.state?.from?.pathname || "/";

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    console.log(email, password);
    logIn(email, password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        navigate(from, { replace: true });
        form.reset();
        setError("");
      })
      .catch((error) => {
        console.log(error);
        if (error.code === "auth/user-not-found") {
          setError("User Not Found. Invalid email or password.");
        } else if (error.code === "auth/wrong-password") {
          setError("Wrong Password. Please try again.");
        } else {
          setError(error.message);
        }
      });
  };

  const handleGoogleSignIn = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        navigate(from, { replace: true });
      })
      .catch((error) => console.log(error.message));
  };

  const handleGithubSignIn = () => {
    signInWithPopup(auth, githubProvider)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        navigate(from, { replace: true });
      })
      .catch((error) => console.log(error.message));
  };

  return (
    <div style={{ width: "340px" }} className="p-3 mt-5 mx-auto shadow">
      <Container>
        <h4 className="mb-3 text-center">Login your account</h4>
        <Form onSubmit={handleLogin}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              name="email"
              placeholder="Enter your email address"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              name="password"
              placeholder="Enter your password"
            />
          </Form.Group>

          <Form.Text className="text-success"></Form.Text>
          <Form.Text className="text-danger fw-semibold fs-6">
            {error}
          </Form.Text>
          <Button
            className="btn btn-dark w-100 mt-3"
            variant="primary"
            type="submit"
          >
            Login
          </Button>
          <Form.Text className=" fw-semibold">
            Don't Have An Account ?{" "}
            <Link className="text-decoration-none text-danger" to="/register">
              Register
            </Link>{" "}
          </Form.Text>
        </Form>
      </Container>
      <p className="text-center fw-semibold fs-5">OR</p>
      <div className="d-flex flex-column gap-1">
        <Button
          onClick={handleGoogleSignIn}
          style={{ backgroundColor: "blue" }}
        >
          <FaGoogle style={{ color: "#EE2455 " }} /> Login with Google{" "}
        </Button>
        <Button
          onClick={handleGithubSignIn}
          style={{ backgroundColor: "black" }}
        >
          <FaGithub /> Login with Github
        </Button>
      </div>
    </div>
  );
};

export default Login;
