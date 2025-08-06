import { useEffect, useState } from "react";

const useBooks = () => {
  const [books, setBooks] = useState([]);
  const [refetch, setRefetch] = useState(0);

  useEffect(() => {
    fetch("https://68933934002e1bfd3079.syd.appwrite.run/books")
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, [refetch]);

  const refetchBooks = () => setRefetch((prev) => prev + 1);

  return [books, setBooks, refetchBooks];
};

export default useBooks;
