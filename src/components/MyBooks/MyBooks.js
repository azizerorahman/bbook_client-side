import { signOut } from "firebase/auth";
import { Container, Table } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { useNavigate } from "react-router-dom";
import useMyBooks from "../../hooks/useMyBooks";
import Item from "../Item/Item";

const MyBooks = () => {
  const [user] = useAuthState(auth);
  const email = user.email;
  const navigate = useNavigate();

  const [myBooks] = useMyBooks(email);

  if ((myBooks.status === 401 || 403) && myBooks.status !== undefined) {
    signOut(auth);
    localStorage.removeItem("accessToken");
    navigate("/");
    window.scrollTo(0, 0);
  }

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
          {myBooks.map((myBook) => (
            <Item key={myBook._id} book={myBook}></Item>
          ))}
        </tbody>
      </Table>
      <small className="scroll-message lightgray-color">
        *Scroll left to right to see full table.
      </small>
    </Container>
  );
};

export default MyBooks;
