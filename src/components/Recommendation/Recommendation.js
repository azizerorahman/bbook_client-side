import React from 'react';
import { Container, Form } from 'react-bootstrap';
import './Recommendation.css'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Recommendation = () => {
    // submit button
    const handleSubmitButton = e => {
        e.preventDefault();

        // success message
        toast.success('Successfully submitted! Thank you for your recommendation.')

        e.target.reset();
    }
    return (
        <Container className='mt-4 mb-5 py-5 px-4 recommendation-section'>
            <h1 className='fw-bold my-5 text-center display-5 primary-color heading-text f-merriweather'>Recommended books <br /> from you to add</h1>
            <Form onSubmit={handleSubmitButton} className='d-flex flex-column flex-md-row justify-content-center align-items-center pt-4 pb-md-5 pb-1 gap-3'>
                <Form.Group className='w-md-50 w-100'>
                    <Form.Control className='border-0 py-3 ps-4 f-merriweather recommendation-box input-field' name="amount" type="text" placeholder="Write your recommendation" required />
                </Form.Group>
                <button className='border-0 text-white py-3 px-5 fw-bold f-merriweather secondary-bg button recommendation-button' type='submit'>Submit</button>
            </Form>
        </Container>
    );
};

export default Recommendation;