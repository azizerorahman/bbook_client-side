import React from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddBook = () => {
    const [user] = useAuthState(auth);

    // add book button
    const handleAddBookButton = e => {
        e.preventDefault();

        const name = e.target.name.value;
        const newBook = {
            adderEmail: user.email,
            name: e.target.name.value,
            quantity: e.target.quantity.value,
            sold: e.target.sold.value,
            price: e.target.price.value,
            supplier: e.target.supplier.value,
            url: e.target.url.value,
            description: e.target.description.value
        }

        // send data to server
        fetch('http://localhost:5000/books', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newBook)
        })
            .then(res => res.json())
            .then(() => {
                toast.success(`${name} successfully added.`);
                e.target.reset();
            })
    }

    return (
        <Container className='my-5 d-flex justify-content-center'>
            <div className='w-50 p-5 section-box'>
                <Form onSubmit={handleAddBookButton} className='pt-4'>
                    <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Control
                            value={user?.displayName}
                            className='input-field py-2'
                            name="username"
                            type="text"
                            placeholder="Full Name"
                            required
                            readOnly
                            disabled
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Control
                            className='input-field py-2'
                            name="name"
                            type="text"
                            placeholder="Book Name"
                            required
                        />
                    </Form.Group>
                    <Row xs={1} md={2} className="gx-3">
                        <Col>
                            <Form.Group className="mb-3" controlId="formBasicQuantity">
                                <Form.Control
                                    className='input-field py-2'
                                    name="quantity"
                                    type="number"
                                    placeholder="Quantity"
                                    required
                                />
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group className="mb-3" controlId="formBasicSold">
                                <Form.Control
                                    className='input-field py-2'
                                    name="sold"
                                    type="number"
                                    placeholder="Sold"
                                    required
                                />
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group className="mb-3" controlId="formBasicPrice">
                                <Form.Control
                                    className='input-field py-2'
                                    name="price"
                                    type="number"
                                    placeholder="Price"
                                    required
                                />
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group className="mb-3" controlId="formBasicSupplier">
                                <Form.Control
                                    className='input-field py-2'
                                    name="supplier"
                                    type="text"
                                    placeholder="Supplier Name"
                                    required
                                />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Form.Group controlId="formBasicPicture">
                        <Form.Control
                            className='input-field py-2'
                            name="url"
                            type="url"
                            placeholder="Picture URL"
                            required
                        />
                    </Form.Group>
                    <p className='ms-1 mb-3 tag-line gray-color'>*Start url with http:// or https://</p>
                    <Form.Group controlId="formBasicDescription">
                        <Form.Control
                            as="textarea"
                            rows={3}
                            className='input-field py-2'
                            name="description"
                            type="textarea"
                            placeholder="Description"
                            required
                        />
                    </Form.Group>
                    <Button className='border-0 w-100 py-2 px-4 mt-3 rounded-3 fw-bold f-merriweather secondary-bg button' type='submit'>Add Book</Button>
                </Form>
            </div>
        </Container>
    );
};

export default AddBook;