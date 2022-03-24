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
        <h1 className="h1-class">{product.name}</h1>
        <img src={product.img} alt="" className="img-class product-size"></img>
        <p className="description-class">{product.description}</p>
        <p className="price-class">Price: ${product.price}</p>
        <p className="stock-class">Available stock: {product.stock}</p>
        {counterData ? (
          <>
          <div className="cart-button">
          <Link to="/Cart">
          <ButtonDetail name="Go to cart." />
          </Link>
          </div>
          <div className="return-button">
          <Link to="/">
          <ButtonDetail name="Return Home" />
          </Link>
          </div>
          </>
  ) : (
        <ItemCount stock={product.stock} initial={1} OnAdd={OnAdd}/>
      )}
      </div>
    );
  }

  export default ItemDetail;

