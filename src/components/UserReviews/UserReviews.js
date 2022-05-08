import React from 'react';
import { Container, Row } from 'react-bootstrap';
import useUserReviews from '../../hooks/useUserReviews';
import UserReview from '../UserReview/UserReview';

const UserReviews = () => {
    const [userReviews] = useUserReviews();

    return (
        <Container className='mb-5 pb-3 pt-5'>
            <Row xs={1} md={3} className="g-4 mt-2">
                {
                    userReviews.map(userReview =>
                        <UserReview
                            key={userReview._id}
                            userReview={userReview}
                        ></UserReview>
                    )
                }
            </Row>
        </Container>
    );
};

export default UserReviews;