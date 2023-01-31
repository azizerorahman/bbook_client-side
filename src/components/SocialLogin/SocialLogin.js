import React, { useEffect } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import "./SocialLogin.css";
import { useLocation, useNavigate } from "react-router-dom";
import googleIcon from "../../icons/google-icon.png";
import githubIcon from "../../icons/github-icon.png";
import {
  useSignInWithGithub,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import Loading from "../Loading/Loading";
import useToken from "../../hooks/useToken";

const SocialLogin = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [signInWithGoogle, googleUser, googleLoading, googleError] =
    useSignInWithGoogle(auth);

  const [signInWithGithub, githubUser, githubLoading, githubError] =
    useSignInWithGithub(auth);

  let from = location.state?.from?.pathname || "/";
  let errorMessage;

  const [token] = useToken(googleUser || githubUser);

  useEffect(() => {
    if (token) {
      navigate(from, { replace: true });
      window.scrollTo(0, 0);
    }
  }, [token, from, navigate]);

  // loading spinner
  if (googleLoading || githubLoading) {
    return <Loading height={"h-small"}></Loading>;
  }

  // display google error
  if (googleError) {
    errorMessage = googleError.message;
  }

  // display github error
  if (githubError) {
    errorMessage = githubError.message;
  }

  return (
    <div className="mt-3">
      <Row className="d-flex align-items-center mb-4">
        <Col className="line"></Col>
        <Col className="p-0 d-flex justify-content-center">
          <small className="text-center">Or continue with</small>
        </Col>
        <Col className="line"></Col>
      </Row>
      <Container className="d-flex flex-column flex-sm-row justify-content-center gap-sm-3 gap-0">
        <Button
          onClick={() => signInWithGoogle()}
          className="d-flex align-items-center justify-content-center mb-3 py-2 px-4 rounded-3 fw-bold f-merriweather primary-color social-button"
          variant="white"
        >
          <img className="me-2" src={googleIcon} alt="google" />
          <span>Google</span>
        </Button>
        <Button
          onClick={() => signInWithGithub()}
          className="d-flex align-items-center justify-content-center mb-3 py-2 px-4 rounded-3 fw-bold f-merriweather primary-color social-button"
          variant="white"
        >
          <img className="me-2" src={githubIcon} alt="github" />
          <span>Github</span>
        </Button>
      </Container>
      <p className="text-center text-danger mb-1 small-text">{errorMessage}</p>
    </div>
  );
};

export default SocialLogin;
