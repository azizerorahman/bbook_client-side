import { useEffect, useState } from "react"

const useBooks = () => {
    const [books, setBooks] = useState([]);
    useEffect(() => {
        fetch('https://hidden-brook-68612.herokuapp.com/books')
            .then(res => res.json())
            .then(data => setBooks(data))
    }, [books]);
    return [books, setBooks];
}

export default useBooks;