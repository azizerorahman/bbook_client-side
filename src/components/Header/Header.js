import { signOut } from 'firebase/auth';
import React from 'react';
import { Button, Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import logo from '../../images/logo.png'
import './Header.css'

const Header = () => {
    const [user] = useAuthState(auth);

    // sign out
    const handleSignOut = () => {
        signOut(auth);
    }
    return (
        <header>
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                <Container>
                    <Link to='/' className="navbar-brand py-1 d-flex flex-column align-items-start">
                        <img className='navbar-logo' src={logo} alt="logo" />
                        <span className='m-0 primary-color tag-line'>A warehouse of <span className='secondary-color'>books.</span></span>
                    </Link>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#features">Features</Nav.Link>
                            <Nav.Link href="#pricing">Pricing</Nav.Link>
                            <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                        {
                            user ?
                                <Button onClick={handleSignOut} className='border-0 py-2 px-4 mt-3 rounded-3 fw-bold f-merriweather secondary-bg button'>Sign Out</Button>
                                :
                                <Nav>
                                    <Link className='nav-link' to="/sign-in">Sign in</Link>
                                    <Link className='nav-link' to="/sign-up">Sign up</Link>
                                </Nav>
                        }
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
};

export default Header;