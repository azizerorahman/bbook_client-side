import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Book.css'

const Book = ({ book }) => {
    const { _id, image, name, description, price, quantity, supplier } = book;

    return (
        <Col>
            <Card className="h-100 p-4 book">
                <img className="card-img-top" src={image} alt={name} />
                <Card.Body className='p-0'>
                    <Card.Title className='fs-4 fw-bold mt-4 mb-0 f-merriweather'>{name}</Card.Title>
                    <p className='my-1'><span className='lightergray-color'>Supplier</span> • {supplier}</p>
                    <p className='f-inter black-color py-3'>{description}</p>
                </Card.Body>
                <Card.Footer className='p-0 bg-transparent border-0'>
                    <div className='d-flex justify-content-between fs-3 f-rasa'>
                        <p className='m-0 lightergray-color'>Price: <span className='primary-color'>${price}</span></p>
                        <p className='m-0 lightergray-color'>Quantity: <span className='primary-color'>{quantity}</span></p>
                    </div>
                    <Link to={`/inventory/${_id}`}>
                        <Button className='border-0 py-2 px-4 mt-3 rounded-3 fw-bold f-merriweather secondary-bg button'>Update</Button>
                    </Link>
                </Card.Footer>
            </Card>
        </Col>
    );
};

export default Book;