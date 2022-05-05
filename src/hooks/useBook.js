import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";

const useBook = () => {
    const { id } = useParams();

    const [book, setBook] = useState([]);
    useEffect(() => {
        const url = `http://localhost:5000/book/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setBook(data));
    }, [id]);
    return [book, setBook];
}

export default useBook;