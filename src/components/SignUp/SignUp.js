import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import './SignUp.css'
import auth from '../../firebase.init';

const SignUp = () => {

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

    const [
        updateProfile,
        updating,
        updateError
    ] = useUpdateProfile(auth);


    const handleSignUp = async e => {
        e.preventDefault();

        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;

        await createUserWithEmailAndPassword(email, password);
        await updateProfile({ displayName: name });
    }
    return (
        <section className='my-5 d-flex justify-content-center f-opensans'>
            <div className='w-50 p-5 section-box'>
                <h1 className='fw-bold text-center heading'>Create account</h1>
                <p className='text-center gray-color sub-text'>Already have an account? <Link to='/sign-in'>Sign in</Link></p>
                <Form onSubmit={handleSignUp} className='pt-4'>
                    <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Control className='input-field py-2' name="name" type="text" placeholder="Full Name" required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control className='input-field py-2' name="email" type="email" placeholder="Email" required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Control className='input-field py-2' name="password" type="password" placeholder="Password" required />
                    </Form.Group>
                    <Form.Group className="mb-3 d-flex align-items-center" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" id='checkbox' required />
                        <label className='ms-2 gray-color checkbox-label' htmlFor='checkbox'>I have read and agree to the <Link to='/terms-and-conditions'>Terms &#38; Conditions</Link>.</label>
                    </Form.Group>
                    <Button className='border-0 w-100 py-2 px-4 mt-3 rounded-3 fw-bold f-merriweather secondary-bg button' type='submit'>Sign up</Button>
                </Form>
            </div>
        </section>
    );
};

export default SignUp;