import React, { useRef } from 'react';
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
    const restockAmountRef = useRef(0);

    // delivered button
    const handleDeliveredButton = e => {
        e.preventDefault();

        confirmAlert({
            message: 'Are you sure about delivery?',
            buttons: [
                {
                    label: 'Yes',
                    onClick: () => {
                        const updatedQuantity = quantity - 1;
                        const updatedSold = sold + 1;
                        const updatedInfo = { updatedQuantity, updatedSold };

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
                            .then(() => {
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

    // restock button
    const handleRestockButton = e => {
        e.preventDefault();

        const restockAmount = restockAmountRef.current.value;
        if (restockAmount <= 0) {
            toast.error('Please, Enter a number greater than 0 (Zero).')
            return;
        }
        else {
            confirmAlert({
                message: 'Are you sure you want to restock?',
                buttons: [
                    {
                        label: 'Yes',
                        onClick: () => {
                            const updatedQuantity = parseInt(quantity) + parseInt(restockAmount);
                            const updatedSold = sold + 0;
                            const updatedInfo = { updatedQuantity, updatedSold };

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
                                .then(() => {
                                    toast.success(`${name} restocked successfully.`);
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
    }
    return (
        <Container className='my-4'>
            <div className='d-flex gap-4 align-items-center'>
                <div>
                    <img src={image} alt={name} />
                </div>
                <div>
                    <h3 className='fw-bold mb-0 f-merriweather'>{name}</h3>
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
                    <h5 className='fw-bold fs-6 f-inter'>Restock {name}</h5>
                    <Form.Group className="mb-3">
                        <Form.Control ref={restockAmountRef} className='input-field py-2' name="stock" type="number" placeholder="Amount" required />
                    </Form.Group>
                    <button onClick={handleRestockButton} className='border-0 w-100 text-white py-2 px-4 rounded-3 fw-bold f-merriweather secondary-bg button'>Restock</button>

                </div>
            </div>
            <ToastContainer />
        </Container>
    );
};

export default StockUpdate;