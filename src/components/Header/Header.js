import { signOut } from "firebase/auth";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../firebase.init";
import logo from "../../images/logo.png";
import "./Header.css";

const Header = () => {
  const [user] = useAuthState(auth);

  // sign out
  const handleSignOut = () => {
    signOut(auth);
    localStorage.removeItem("accessToken");
  };
  return (
    <header>
      <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
        <Container>
          <Link
            to="/"
            className="navbar-brand py-1 d-flex flex-column align-items-start"
          >
            <img className="navbar-logo" src={logo} alt="logo" />
            <span className="m-0 primary-color tag-line">
              A warehouse of <span className="secondary-color">books.</span>
            </span>
          </Link>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Link className="nav-link" to="/">
                Home
              </Link>
              <Link className="nav-link" to="/about-us">
                About Us
              </Link>
            </Nav>
            {user ? (
              <Nav>
                <Link className="nav-link" to="/manage-inventories">
                  Manage Inventory
                </Link>
                <Link className="nav-link" to="/add-book">
                  Add Book
                </Link>
                <Link className="nav-link" to="/my-books">
                  My Books
                </Link>
                <Button
                  onClick={handleSignOut}
                  className="border-0 ms-md-3 ms-0 py-2 px-4 rounded-3 fw-bold f-merriweather secondary-bg button"
                >
                  Sign Out
                </Button>
              </Nav>
            ) : (
              <Nav>
                <Link className="nav-link" to="/sign-in">
                  Sign in
                </Link>
                <Link className="nav-link" to="/sign-up">
                  Sign up
                </Link>
              </Nav>
            )}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
