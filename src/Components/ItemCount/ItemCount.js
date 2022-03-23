import React, { useState } from "react";
import "./ItemCount.css";

const ItemCount = ({stock, initial, OnAdd}) => {
const [count, setCount] = useState(initial);

const increment = () => {
    if (count < stock) {
        setCount(count + 1);
    }
}

const decrement = () => {
    if (count > 0){
    setCount(count - 1)
    }

}

return(
    <>
        <div className="item-count-boxes">
            <h2>Counter</h2>
            <p>{count}</p>
            <button onClick={increment}>+</button>
            <button onClick={decrement}>-</button>
            <button onClick={() => OnAdd(count)}>Add to cart</button>
        </div>
    </>
)
}

export default ItemCount;