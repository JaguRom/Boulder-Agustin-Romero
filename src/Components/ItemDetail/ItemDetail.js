import "./ItemDetail.css"
import ItemCount from "../ItemCount/ItemCount";
import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import ButtonDetail from "../ButtonDetail/ButtonDetail";
import { CartContext } from "../../Context/CartContext";



function ItemDetail({product}) {
  //Almacenamiento de estado (counter)
  const [counterData, setCounterData] = useState(0);
  //Almacenamiento de estado (cart)
  const {addToCart} = useContext(CartContext);
 

  //OnAdd + Cartcontext
  const OnAdd = (count) => {
  addToCart (product, count);

  setCounterData(count);


      if (count > 0) {
        setCounterData(count);

      } else {
        console.log("No items added")
      }
    };
    return (
      <div className="individual-items">
        <h1>{product.name}</h1>
        <img src={product.img} alt="" className="product-size"></img>
        <p>{product.description}</p>
        <p>Price: ${product.price}</p>
        <p>Available stock: {product.stock}</p>
        {counterData ? (
          <>
          <Link to="/Cart">
          <ButtonDetail name="Go to cart." />
          </Link>
          <Link to="/">
          <ButtonDetail name="Return Home" />
          </Link>
          </>
  ) : (
        <ItemCount stock={product.stock} initial={1} OnAdd={OnAdd}/>
      )}
      </div>
    );
  }

  export default ItemDetail;

