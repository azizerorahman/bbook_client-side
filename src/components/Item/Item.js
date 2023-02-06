import React from "react";
import { Button } from "react-bootstrap";
import deleteIcon from "../../icons/delete-icon.png";
import { confirmAlert } from "@ergisgjergji/react-confirm-alert";
import "@ergisgjergji/react-confirm-alert/src/react-confirm-alert.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Item = ({ book }) => {
  const { _id, name, price, quantity, supplier, sold } = book;

  // delete button
  const handleDeleteItem = (id, name) => {
    confirmAlert({
      message: "Are you sure you want to delete it?",
      buttons: [
        {
          label: "Yes",
          onClick: () => {
            // send updated data to server
            const url = `https://bbook.onrender.com/inventory/${id}`;
            fetch(url, {
              method: "DELETE",
            })
              .then((res) => res.json())
              .then((data) => {
                if (data.deletedCount > 0) {
                  toast.success(`${name} deleted.`);
                }
              });
          },
        },
        {
          label: "No",
          onClick: () => {
            return;
          },
        },
      ],
    });
  };

  return (
    <tr>
      <td>{name}</td>
      <td className="text-center">{price}</td>
      <td className="text-center">{quantity}</td>
      <td className="text-center">{sold}</td>
      <td>{supplier}</td>
      <td className="text-center">
        <Button
          onClick={() => handleDeleteItem(_id, name)}
          className="border-0 p-0 link-button"
          variant="link"
        >
          <img src={deleteIcon} alt="Delete" />
        </Button>
      </td>
    </tr>
  );
};

export default Item;
