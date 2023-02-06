import { useEffect, useState } from "react";

const useBooks = () => {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    fetch("https://bbook.onrender.com/books")
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, [books]);
  return [books, setBooks];
};

export default useBooks;
