import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import banner from '../../images/banner-cover.svg';
import './Banner.css'

const Banner = () => {
    return (
        <Container className='mt-4'>
            <Row className='align-items-center p-5 banner'>
                <Col sm={7}>
                    <h1 className='fw-bold display-5 primary-color f-merriweather'>Book is a <br /> window to the World</h1>
                    <h4 className='my-4 f-merriweather banner-text'>Wake up your dream by reading a book every day</h4>
                    <Link to='/login'>
                        <Button className='border-0 py-2 px-4 mt-3 rounded-3 fw-bold f-merriweather secondary-bg button'>Read Now</Button>
                    </Link>
                </Col>
                <Col sm={5} className='d-flex justify-content-end'>
                    <img src={banner} alt="banner" />
                </Col>
            </Row>
        </Container>
    );
};

export default Banner;