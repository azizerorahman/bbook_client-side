import React from 'react';
import { Card, Col } from 'react-bootstrap';
import './UserReview.css'
import quotation from '../../images/quotation.png'

const UserReview = ({ userReview }) => {
    const { name, image, review } = userReview;

    return (
        <Col>
            <Card className="h-100 py-5 px-4 position-relative review">
                <img className="position-absolute top-0 start-50 translate-middle" src={image} alt={name} />
                <img className='position-absolute top-0 end-0 translate-middle' src={quotation} alt="quotation" />
                <Card.Body className='mb-2 p-0 d-flex flex-column align-items-center'>
                    <Card.Title className='fs-5 pb-2 mt-4 mb-4 f-merriweather'>{name}</Card.Title>
                    <small className='lightgray-color text-center f-poppins'>{review}</small>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default UserReview;