import { Button, Container, Table } from "react-bootstrap";
import useBooks from "../../hooks/useBooks";
import Item from "../Item/Item";
import { Link } from "react-router-dom";
import "./ManageInventories.css";

const ManageInventories = () => {
  const [books, , refetchBooks] = useBooks();

  return (
    <Container className="my-5">
      <Table responsive striped bordered>
        <thead>
          <tr>
            <th>Name</th>
            <th className="text-center">Price</th>
            <th className="text-center">Quantity</th>
            <th className="text-center">Sold</th>
            <th>Supplier</th>
            <th className="text-center">Delete</th>
          </tr>
        </thead>
        <tbody>
          {books.map((book) => (
            <Item key={book._id} book={book} refetchBooks={refetchBooks}></Item>
          ))}
        </tbody>
      </Table>
      <small className="scroll-message lightgray-color">
        *Scroll left to right to see full table.
      </small>
      <div className="d-flex justify-content-center pt-4">
        <Link to="/add-book">
          <Button className="border-0 py-2 px-4 rounded-3 fw-bold f-merriweather secondary-bg button">
            Add New Item
          </Button>
        </Link>
      </div>
    </Container>
  );
};

export default ManageInventories;
