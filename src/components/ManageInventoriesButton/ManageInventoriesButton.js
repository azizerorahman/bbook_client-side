import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ManageInventoriesButton = () => {
    return (
        <div className='d-flex justify-content-center pt-4'>
            <Link to='/manage-inventories' >
                <Button className='border-0 py-2 px-4 rounded-3 fw-bold f-merriweather secondary-bg button'>Manage Inventories</Button>
            </Link>
        </div>
    );
};

export default ManageInventoriesButton;