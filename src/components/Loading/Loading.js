import React from 'react';
import { Spinner } from 'react-bootstrap';
import './Loading.css'

const Loading = () => {
    return (
        <div className='d-flex align-items-center justify-content-center spinner-box'>
            <Spinner animation="grow" />
        </div>
    );
};

export default Loading;