import React from 'react';
import { Container, Row } from 'react-bootstrap';
import useBooks from '../../hooks/useBooks';
import Banner from '../Banner/Banner';
import Book from '../Book/Book';

const Home = () => {
    const [books] = useBooks();
    return (
        <Container>
            <Banner></Banner>
            <section className='mt-5'>
                <h3 className='fs-1 text-center fw-bold mb-4 primary-color f-merriweather'>Inventory</h3>
                <Row xs={1} md={3} className="g-4">
                    {
                        books.map(book =>
                            <Book
                                key={book._id}
                                book={book}
                            ></Book>
                        )
                    }
                </Row>
            </section>
        </Container>
    );
};

export default Home;