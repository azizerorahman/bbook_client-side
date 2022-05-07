import React from 'react';
import { Button } from 'react-bootstrap';
import deleteIcon from '../../icons/delete-icon.png'

const Item = ({ book, handleDeleteItem }) => {
    const { _id, name, price, quantity, supplier, sold } = book;

    return (
        <tr>
            <td>{name}</td>
            <td className='text-center'>{price}</td>
            <td className='text-center'>{quantity}</td>
            <td className='text-center'>{sold}</td>
            <td>{supplier}</td>
            <td className='text-center'>
                <Button onClick={() => handleDeleteItem(_id, name)} className='border-0 p-0 link-button' variant="link"><img src={deleteIcon} alt="Delete" /></Button>
            </td>
        </tr>
    );
};

export default Item;