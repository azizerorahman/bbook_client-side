import React from 'react';
import { Col, Container, Row, Table } from 'react-bootstrap';
import useBook from '../../hooks/useBook';

const StockUpdate = () => {
    const [book] = useBook();
    const { _id, image, name, description, price, quantity, supplier, sold } = book;
    return (
        <Container className='my-4'>
            <div className='d-flex gap-4'>
                <div>
                    <img src={image} alt={name} />
                </div>
                <div>
                    <h3 className='fw-bold mt-4 mb-0 f-merriweather'>{name}</h3>
                    <p className='f-inter book-description py-3'>{description}</p>
                    <Table striped bordered>
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
                                <td>Available in Stock</td>
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
                </div>
            </div>
        </Container>
    );
};

export default StockUpdate;