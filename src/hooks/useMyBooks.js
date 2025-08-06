import { useEffect, useState } from "react";

const useMyBooks = (email) => {
  const [myBooks, setMyBooks] = useState([]);
  useEffect(() => {
    const url = `https://68933934002e1bfd3079.syd.appwrite.run/my-books?email=${email}`;
    fetch(url, {
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setMyBooks(data));
  }, [email]);
  return [myBooks, setMyBooks];
};

export default useMyBooks;
