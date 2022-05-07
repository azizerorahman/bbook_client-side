import React from 'react';
import { Container, Form, Table } from 'react-bootstrap';
import useBook from '../../hooks/useBook';
import './StockUpdate.css'
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { confirmAlert } from '@ergisgjergji/react-confirm-alert';
import '@ergisgjergji/react-confirm-alert/src/react-confirm-alert.css';

const StockUpdate = () => {
    const [book] = useBook();
    const { _id, image, name, description, price, quantity, supplier, sold } = book;

    // delivered button
    const handleDeliveredButton = e => {
        e.preventDefault();

        confirmAlert({
            title: 'Confirmation for delivery',
            message: 'Are you sure about delivery?',
            buttons: [
                {
                    label: 'Yes',
                    onClick: () => {
                        const updatedQuantity = quantity - 1;
                        const updatedInfo = { updatedQuantity };

                        // send updated data to server
                        const url = `http://localhost:5000/book/${_id}`;
                        fetch(url, {
                            method: 'PUT',
                            headers: {
                                'content-type': 'application/json'
                            },
                            body: JSON.stringify(updatedInfo)
                        })
                            .then(res => res.json())
                            .then(data => {
                                toast.success(`${name} delivered successfully.`);
                            })
                    }
                },
                {
                    label: 'No',
                    onClick: () => {
                        return;
                    }
                }
            ]
        });
    }
    return (
        <Container className='my-4'>
            <div className='d-flex gap-4'>
                <div>
                    <img src={image} alt={name} />
                </div>
                <div>
                    <h3 className='fw-bold mt-4 mb-0 f-merriweather'>{name}</h3>
                    <p className='f-inter book-description py-3'>{description}</p>
                    <Table striped bordered className='mb-4'>
                        <tbody>
                            <tr>
                                <td>Book ID</td>
                                <td>{_id}</td>
                            </tr>
                            <tr>
                                <td>Price</td>
                                <td>{price} $</td>
                            </tr>
                            <tr>
                                <td>Quantity</td>
                                <td>{quantity}</td>
                            </tr>
                            <tr>
                                <td>Sold</td>
                                <td>{sold}</td>
                            </tr>
                            <tr>
                                <td>Supplier</td>
                                <td>{supplier}</td>
                            </tr>
                        </tbody>
                    </Table>
                    <button onClick={handleDeliveredButton} className='border-0 w-100 mb-4 text-white py-2 px-4 rounded-3 fw-bold f-merriweather primary-bg delivered-button'>Delivered</button>
                    <Form.Group className="mb-3">
                        <Form.Control className='input-field py-2' name="stock" type="number" placeholder="Amount" required />
                    </Form.Group>
                    <button className='border-0 w-100 text-white py-2 px-4 rounded-3 fw-bold f-merriweather secondary-bg button'>Delivered</button>

                </div>
            </div>
            <ToastContainer />
        </Container>
    );
};

export default StockUpdate;