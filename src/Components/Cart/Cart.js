import "./Cart.css"
import {CartContext} from "../../Context/CartContext";
import React, {useContext} from "react";
import {writeBatch, getDoc, addDoc, collection, doc } from "firebase/firestore";
import { firestoreDb } from "../../Services/Firebase/firebase";
import { Link } from "react-router-dom";
import Basic from "../FormikForm/FormikForm";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';





 const Cart = ({info}) =>{
  const {cart, clearCart, removeItem } = useContext(CartContext);
//show purchase button

//Calculo de count total
  let modifiedCount = cart.map((cart)=>{
  return cart.price * cart.count;

});
let total = modifiedCount.reduce((a,b)=>{
  return a + b;
}
,0);


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
if(objContact.name === "" || objContact.phone === "" || objContact.address === "" || objContact.email === ""){
  toast.error('Please fill in the form before confirming your purchase', {
    position: "top-center",
    autoClose: 5000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    });
} else {
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
         toast.success("Order placed successfully.  Order id: " + id, {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          });

       }).catch(err => {
        toast.error("Error:", err, {
          position: "bottom-center",
          autoClose: 5000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          })
       })
     })
    }
}

    
   }
if(cart.length === 0){
  return(
    <>
<ToastContainer
position="bottom-center"
autoClose={5000}
hideProgressBar
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
/>
    <div className="cart-container">
    <div className="cart empty centered-flex">
      <h1>Your cart is empty</h1>
    </div>
    <div className="centered-flex text-decoration-none">
    <Link className="return-home" to="/">
    <h2 className="returnHome-button">Return Home</h2>
    </Link>
    </div>
    </div>
    </>
  )
} else {
 

 return (
<>
<div className="cart-container">
<div className="centered-flex">
<div className="cart-h1 centered-flex">
<h1>{info}</h1>
</div>
</div>
<div className="cart-flex">

{cart.map((product)=>(
  
  <div className="cart-product-card">
      <ul key={product.id}>In Cart:
        <li>Name: {product.name}</li>
        <li>Quantity: {product.count}</li>
        <li>Price per unit:${product.price}</li>
        <li>Total: ${product.count * product.price}</li>
        <button onClick={()=>removeItem(product.id)}>Remove</button>
      </ul>
  </div>
  ))}
</div>
    <button className="clear-button" onClick={clearCart}>Clear Cart</button>
<div className="centered-flex">
<h2 className="total-card centered-flex">Total: ${constReducedCount}</h2>
</div>


<div className="cart-form">
  <Basic/>
</div>

<div className="centered-flex">
  <button className="purchase-button" onClick={confirmOrder}>Confirm Purchase</button> 
</div>

</div>
</>)
 }}
export default Cart;