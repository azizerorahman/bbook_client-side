import { useEffect, useState } from "react";

const useUserReviews = () => {
  const [userReviews, setUserReviews] = useState([]);
  useEffect(() => {
    fetch("https://68933934002e1bfd3079.syd.appwrite.run/user-reviews")
      .then((res) => res.json())
      .then((data) => setUserReviews(data));
  }, []);
  return [userReviews, setUserReviews];
};

export default useUserReviews;
