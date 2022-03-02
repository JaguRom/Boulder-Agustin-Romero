import "./Cart.css"
import {CartContext} from "../../Context/CartContext";
import React, {useContext} from "react";
import Button from "../Button/Button";

const Cart = ({info}) =>{
  const {cart, clearCart, removeItem} = useContext(CartContext);
  
  console.log("This is cart", cart);

 return (
<>
<div>
   <h1>{info}</h1>

{cart.map((product)=>(
      <ul key={product.id}>In Cart:
        <li>Name: {product.name}</li>
        <li>Quantity: {product.count}</li>
        <li>Price per unit: {product.price}</li>
        <li>Total: {product.count * product.price}</li>
        <button onClick={()=>removeItem(product.id)}>Remove</button>
      </ul>
    ))}
    <button onClick={clearCart}>Clear Cart</button>
</div>

</>)

 }
export default Cart;


//Codigo Alternativo
/* function Cart({info}) {
  const {cart} = useContext(CartContext);
  
  console.log("This is cart", {cart})
    return (
    <>
    {cart.map((product)=>(
      <li key={product.id}>{product.cantidad}</li>
    ))}
  
    <div className="cart-widget-div" >
    <h1>{info}</h1>
    <CartWidget />
    </div>
    </>
    );
  } */