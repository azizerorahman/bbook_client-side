import { Button, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import notFound from '../../images/not-found.png'

const NotFound = () => {
    return (
        <Container className='d-flex flex-column justify-content-center align-items-center'>
            <img className='img-fluid' src={notFound} alt="404 Not Found" />
            <Link to='/' className='mt-3 mb-5'>
                <Button className='border-0 py-2 px-4 rounded-3 fw-bold f-merriweather secondary-bg button'>Back to Home</Button>
            </Link>
        </Container>
    );
};

export default NotFound;