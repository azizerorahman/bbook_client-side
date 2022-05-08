import { useEffect, useState } from "react"

const useUserReviews = () => {
    const [userReviews, setUserReviews] = useState([]);
    useEffect(() => {
        fetch('https://hidden-brook-68612.herokuapp.com/user-reviews')
            .then(res => res.json())
            .then(data => setUserReviews(data))
    }, []);
    return [userReviews, setUserReviews];
}

export default useUserReviews;