import { useEffect, useRef, useState } from "react";
import {
  Button,
  Container,
  Form,
  OverlayTrigger,
  Tooltip,
  Badge,
} from "react-bootstrap";
import { FaInfoCircle, FaUserCheck } from "react-icons/fa";
import {
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Loading from "../Loading/Loading";
import "./SignIn.css";
import SocialLogin from "../SocialLogin/SocialLogin";
import useToken from "../../hooks/useToken";
import auth from "../../firebase.init";

const SignIn = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const [isChina, setIsChina] = useState(false);

  const from = location.state?.from?.pathname || "/";

  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);

  const [token] = useToken(user);

  useEffect(() => {
    const checkUserLocation = async () => {
      try {
        const response = await fetch("https://ipapi.co/json/");
        const data = await response.json();
        if (data.country_code === "CN") {
          setIsChina(true);
        }
      } catch (error) {
        console.error("Error detecting location:", error);
      }
    };

    checkUserLocation();
  }, []);

  useEffect(() => {
    if (token) {
      navigate(from, { replace: true });
      window.scrollTo(0, 0);
    }
  }, [token, from, navigate]);

  let errorMessage;

  // loading spinner
  if (loading || sending) {
    return <Loading height={"h-small"}></Loading>;
  }

  // display error
  if (error) {
    errorMessage = error.message;
  }

  // sign in
  const handleSignIn = async (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    await signInWithEmailAndPassword(email, password);
  };

  // reset password
  const handleResetPassword = async () => {
    const email = emailRef.current.value;

    if (email) {
      await sendPasswordResetEmail(email);
      toast.success(`Email Sent to ${email}!`);
    } else {
      toast.error("Please, Enter a Email Address.");
    }
  };

  // Fill test credentials
  const fillTestCredentials = () => {
    // Test account credentials
    const testEmail = "test@manager.com";
    const testPassword = "testM@nager";

    // Fill the form fields
    emailRef.current.value = testEmail;
    passwordRef.current.value = testPassword;

    toast.info("Test credentials filled! Click 'Sign in' to continue.", {
      position: "top-center",
      autoClose: 3000,
    });
  };

  const renderFirebaseTooltip = (props) => (
    <Tooltip id="firebase-tooltip" {...props}>
      This authentication system uses Firebase/Google services which may not
      work properly in China.
    </Tooltip>
  );

  return (
    <Container className="my-5 d-flex justify-content-center f-opensans">
      <div className="w-md-50 w-100 p-5 section-box position-relative">
        {isChina ? (
          <div className="alert alert-warning mb-3 py-2 small">
            <FaInfoCircle className="me-2" />
            You need to use a VPN to access Firebase/Google services in China.
          </div>
        ) : (
          <div
            className="position-absolute"
            style={{ top: "6px", right: "10px" }}
          >
            <OverlayTrigger
              placement="left"
              delay={{ show: 250, hide: 400 }}
              overlay={renderFirebaseTooltip}
            >
              <span style={{ cursor: "pointer" }}>
                <FaInfoCircle color="#0d6efd" />
              </span>
            </OverlayTrigger>
          </div>
        )}

        <div
          className="position-absolute"
          style={{ top: "10px", left: "10px" }}
        >
          <Badge
            bg="secondary"
            style={{ cursor: "pointer", fontWeight: "normal" }}
            onClick={fillTestCredentials}
            className="d-flex align-items-center f-opensans"

          >
            <FaUserCheck className="me-1" /> Test Account
          </Badge>
        </div>

        <h1 className="fw-bold text-center heading">Sign in here</h1>
        <p className="text-center gray-color sub-text">
          Have no account yet? <Link to="/sign-up">Sign up</Link>
        </p>
        <Form onSubmit={handleSignIn} className="pt-4">
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control
              className="input-field py-2"
              ref={emailRef}
              name="email"
              type="email"
              placeholder="Email"
              required
            />
          </Form.Group>
          <Form.Group className="mb-1" controlId="formBasicPassword">
            <Form.Control
              className="input-field py-2"
              ref={passwordRef}
              name="password"
              type="password"
              placeholder="Password"
              required
            />
          </Form.Group>
          <div className="d-flex justify-content-between">
            <p className="text-danger mb-0 small-text">
              {error &&
                errorMessage
                  .substring(22)
                  .replace(/[()']+/g, "")
                  .replace(/[-']+/g, " ")
                  .charAt(0)
                  .toUpperCase() +
                  errorMessage
                    .substring(22)
                    .replace(/[()']+/g, "")
                    .replace(/[-']+/g, " ")
                    .slice(1)}
            </p>
            <Button
              onClick={handleResetPassword}
              className="border-0 p-0 reset-button link-button"
              variant="link"
            >
              Reset Password
            </Button>
          </div>
          <Button
            className="border-0 w-100 py-2 px-4 mt-4 rounded-3 fw-bold f-merriweather secondary-bg button"
            type="submit"
          >
            Sign in
          </Button>
        </Form>
        <SocialLogin></SocialLogin>
      </div>
    </Container>
  );
};

export default SignIn;
