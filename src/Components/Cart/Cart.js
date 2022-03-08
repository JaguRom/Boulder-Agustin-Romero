import "./Cart.css"
import {CartContext} from "../../Context/CartContext";
import React, {useContext} from "react";


const Cart = ({info}) =>{
  const {cart, clearCart, removeItem} = useContext(CartContext);
  console.log("This is cart", cart);

/*   const total= cart.reduce((acc, item) => acc + item.product.price * item.count, 0);
  console.log("This is total", total);
  const totalPrice = total.reduce((acc, curr) => acc + curr, 0)
console.log("This is totalPrice", totalPrice);
 */

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