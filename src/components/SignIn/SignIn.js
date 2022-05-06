import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const SignIn = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/";

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    if (user) {
        navigate(from, { replace: true });
    }

    // sign in
    const handleSignIn = e => {
        e.preventDefault();

        const email = e.target.email.value;
        const password = e.target.password.value;

        signInWithEmailAndPassword(email, password);
    }
    return (
        <section className='my-5 d-flex justify-content-center f-opensans'>
            <div className='w-50 p-5 section-box'>
                <h1 className='fw-bold text-center heading'>Sign in here</h1>
                <p className='text-center gray-color sub-text'>Have no account yet? <Link to='/sign-up'>Sign up</Link></p>
                <Form onSubmit={handleSignIn} className='pt-4'>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control className='input-field py-2' name="email" type="email" placeholder="Email" required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Control className='input-field py-2' name="password" type="password" placeholder="Password" required />
                    </Form.Group>

                    <Button className='border-0 w-100 py-2 px-4 mt-3 rounded-3 fw-bold f-merriweather secondary-bg button' type='submit'>Sign in</Button>
                </Form>
            </div>
        </section>
    );
};

export default SignIn;