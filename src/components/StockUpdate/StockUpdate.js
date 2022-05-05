import React from 'react';
import useBook from '../../hooks/useBook';

const StockUpdate = () => {
    const [book] = useBook();
    return (
        <div>
            <h1>{book.name}</h1>
        </div>
    );
};

export default StockUpdate;