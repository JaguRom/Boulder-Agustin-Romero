import "./CartWidget.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import {CartContext} from "../../Context/CartContext";
import React, {useContext} from "react";


const element = <FontAwesomeIcon icon={faShoppingCart} className="cart-widget"  />



function CartWidget({info}) {
  const {cart} = useContext(CartContext);
//Calculo de count total
  let modifiedCount = cart.map((cart)=>{
    return cart.count;
});

let constReducedCount = modifiedCount.reduce(reduceFunction, 0)

function reduceFunction(accumulator, currentValue) {
  return accumulator + currentValue;
}
if (constReducedCount <= 0) {

return (
<div className="cart-widget-div" >
  <h1> </h1>
  </div>
  );
} else {
return (
<div className="cart-widget-div" >
  <h1>{info}</h1>
  <h2>{constReducedCount}</h2>
  {element}
  </div>
  );
}
} 

export default CartWidget;
