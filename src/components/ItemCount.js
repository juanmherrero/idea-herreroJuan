
import React, { useEffect, useState } from 'react';


const ItemCount = ({ stock = 0, initial = 1, onAdd}) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        setCount(initial);
    },[]);

    const increment = () => {
        if (count < stock) {
            setCount(count+1);
        }
    }

    const decrement = () => {
        if (count > initial) {
            setCount(count-1);
        }
    }
    return (
        <>
        <p>Agregar {count} productos al carrito</p>
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
        {
            stock
            ? <button onClick={() => onAdd(count)}>Agregar al carro</button>
            : <button disabled>Agregar al carro</button>
        }
        </>
    )
}

export default ItemCount;