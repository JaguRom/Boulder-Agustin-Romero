import "./Cart.css"
import {CartContext} from "../../Context/CartContext";
import React, {useContext} from "react";
import {writeBatch, getDoc, addDoc, collection, doc } from "firebase/firestore";
import { firestoreDb } from "../../Services/Firebase/firebase";
import { Link } from "react-router-dom";
import Basic from "../FormikForm/FormikForm";





 const Cart = ({info}) =>{
  const {cart, clearCart, removeItem } = useContext(CartContext);
  
  //Calculo de count total
  let modifiedCount = cart.map((cart)=>{
    return cart.price * cart.count;

});
let total = modifiedCount.reduce((a,b)=>{
  return a + b;
}
,0);

//
let constReducedCount = modifiedCount.reduce(reduceFunction, 0)
function reduceFunction(accumulator, currentValue) {
  return accumulator + currentValue;
}





  const confirmOrder = () => {
    const values = localStorage.getItem('values');
    const objContactValues = JSON.parse(values);
    const objContact = {
        name: objContactValues.name,
        phone: objContactValues.phone,
        address: objContactValues.address,
        email: objContactValues.email,
    }

  const objOrder = {
      buyer: objContact,
      items: cart,
      total: total,
      date: new Date(),
    }

    clearCart()
    //Write batch
    const batch = writeBatch(firestoreDb)
    const outOfStock = []

    objOrder.items.forEach(prod => {
    getDoc(doc(firestoreDb,"products",prod.id )).then(response => {
    if(response.data().stock >= prod.quantity){
    batch.update(doc(firestoreDb, "products", response.id), 
    {stock: response.data().stock - prod.quantity})
    } else {
    outOfStock.push({ id: response.id, ...response.data()})
    }
    })
    })
    if (outOfStock.length === 0) {
     addDoc(collection(firestoreDb, "orders"), objOrder).then(({id}) => {
       batch.commit().then(() => {
         //clearCart()
         alert("Order placed successfully.  Order id: " + id)




       }).catch(err => {
         alert("Error:", err)
       })
     })
    }



   }
if(cart.length === 0){
  return(
    <>
    <div className="centered-flex">
      <h1>Your cart is empty</h1>
    </div>
    <div className="centered-flex text-decoration-none">
    <Link className="return-home" to="/">
    <h2>Return Home</h2>
    </Link>
    </div>
    </>
  )
} else {
 

 return (
<>
<div>
   <h1>{info}</h1>

{cart.map((product)=>(
  
  <div>
      <ul key={product.id}>In Cart:
        <li>Name: {product.name}</li>
        <li>Quantity: {product.count}</li>
        <li>Price per unit:${product.price}</li>
        <li>Total: ${product.count * product.price}</li>
        <button onClick={()=>removeItem(product.id)}>Remove</button>
      </ul>
  </div>
  ))}
<div>
<h2 className="centered-flex">Total: ${constReducedCount}</h2>
</div>
    <button onClick={clearCart}>Clear Cart</button>
</div>


<div>
  <Basic/>
</div>
<div className="centered-flex">
  <button onClick={confirmOrder}>Confirm Purchase</button> 
</div>
</>)

 }}

export default Cart;
