import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Footer.css';
import logo from '../../images/logo.png';
import facebookIcon from '../../icons/facebook-icon.png'
import instagramIcon from '../../icons/instagram-icon.png'
import linkedinIcon from '../../icons/linkedin-icon.png'
import twitterIcon from '../../icons/twitter-icon.png'

const Footer = () => {
    // get updated year
    const today = new Date();
    const year = today.getFullYear();

    return (
        <footer className='footer'>
            <Container className='py-5'>
                <Row>
                    <Col xs={6} className='d-flex flex-column justify-content-between'>
                        <div className='d-flex'>
                            <Link to='/' className="navbar-brand py-1 d-flex flex-column align-items-start">
                                <img className='navbar-logo' src={logo} alt="logo" />
                                <span className='m-0 primary-color tag-line'>A warehouse of <span className='secondary-color'>books.</span></span>
                            </Link>
                        </div>
                        <small className='f-poppins lightgray-color'>&copy; {year} BBook. All rights reserved.</small>
                    </Col>
                    <Col xs={3} className='d-flex flex-column justify-content-between'>
                        <h4 className='f-merriweather navigation-title'>Navigation</h4>
                        <div className='d-flex flex-column'>
                            <div>
                                <Link className='text-decoration-none lightgray-color f-merriweather' to='/home'>Home</Link>
                            </div>
                            <div>
                                <Link className='text-decoration-none lightgray-color f-merriweather' to='/about'>About Me</Link>
                            </div>
                            <div>
                                <Link className='text-decoration-none lightgray-color f-merriweather' to='/blogs'>Blogs</Link>
                            </div>
                            <div>
                                <Link className='text-decoration-none lightgray-color f-merriweather' to='/login'>Login</Link>
                            </div>
                            <div>
                                <Link className='text-decoration-none lightgray-color f-merriweather' to='/register'>Register</Link>
                            </div>
                        </div>
                    </Col>
                    <Col xs={3} className='d-flex flex-column justify-content-between'>
                        <div>
                            <p className='f-merriweather mb-1'>BBook LTD.</p>
                            <p className='lightgray-color f-merriweather m-0'>admin@bbook.com</p>
                            <p className='lightgray-color f-merriweather m-0'>Jln. Stiabudhi No. 193</p>
                            <p className='lightgray-color f-merriweather m-0'>Bandung Indonesia</p>
                        </div>
                        <div className='d-flex gap-3'>
                            <a href="https://www.facebook.com/bookwarehouse1/" className='rounded-pill secondary-bg'>
                                <img className='p-2' src={facebookIcon} alt="facebook" />
                            </a>
                            <a href="https://www.instagram.com/bookwarehousevancouver/" className='rounded-pill secondary-bg'>
                                <img className='p-2' src={instagramIcon} alt="instagram" />
                            </a>
                            <a href="https://www.linkedin.com/company/the-book-warehouse-ltd" className='rounded-pill secondary-bg'>
                                <img className='p-2' src={linkedinIcon} alt="linkedin" />
                            </a>
                            <a href="https://twitter.com/book_warehouse" className='rounded-pill secondary-bg'>
                                <img className='p-2' src={twitterIcon} alt="twitter" />
                            </a>
                        </div>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;