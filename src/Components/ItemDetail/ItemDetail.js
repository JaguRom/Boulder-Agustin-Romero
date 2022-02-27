import "./ItemDetail.css"
import ItemCount from "../ItemCount/ItemCount";
import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import ButtonDetail from "../ButtonDetail/ButtonDetail";
import { CartContext } from "../../Context/CartContext";



function ItemDetail({product}) {
  //Almacenamiento de estado (counter)
  const [counterData, setCounterData] = useState(0);
  console.log("This is counter", counterData);
  //CC cartcontext
    //const {addToCart } = useContext(CartContext);

  //OnAdd + Cartcontext
    const OnAdd = (count) => {;
    setCounterData(count)
   // addToCart(product, count);

      if (count > 0) {
        setCounterData(count);
        console.log(`${count} items added to cart`);
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
    <Link to="/cart">
      <ButtonDetail name="Go to cart." />
    </Link>
  ) : (
        <ItemCount stock={product.stock} initial={1} OnAdd={OnAdd}/>
      )}
      </div>
    );
  }


  



  export default ItemDetail;

