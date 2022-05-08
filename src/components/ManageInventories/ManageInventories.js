import React from 'react';
import { Button, Container, Table } from 'react-bootstrap';
import useBooks from '../../hooks/useBooks';
import Item from '../Item/Item';
import { Link } from 'react-router-dom';

const ManageInventories = () => {
    const [books] = useBooks();

    return (
        <Container className='my-5'>
            <Table striped bordered>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th className='text-center'>Price</th>
                        <th className='text-center'>Quantity</th>
                        <th className='text-center'>Sold</th>
                        <th>Supplier</th>
                        <th className='text-center'>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        books.map(book =>
                            <Item
                                key={book._id}
                                book={book}
                            ></Item>
                        )
                    }
                </tbody>
            </Table>
            <div className='d-flex justify-content-center pt-4'>
                <Link to='/inventory/add-book' >
                    <Button className='border-0 py-2 px-4 rounded-3 fw-bold f-merriweather secondary-bg button'>Add New Item</Button>
                </Link>
            </div>
        </Container>
    );
};

export default ManageInventories;