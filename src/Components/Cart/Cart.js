import "./Cart.css"
import {CartContext} from "../../Context/CartContext";
import React, {useContext} from "react";
import {writeBatch, getDoc, addDoc, collection, updateDoc, doc } from "firebase/firestore";
import { firestoreDb } from "../../Services/Firebase/firebase";
//import {useNotificationServices} from "../../Services/NotificationServices";


const Cart = ({info}) =>{
  const {cart, clearCart, removeItem} = useContext(CartContext);
  console.log("This is cart", cart);

  //Notification
 // const setNotification = useNotificationServices();

  const confirmOrder = () => {
    const objOrder = {
      buyer: {
        name:"A",
        phone:"123",
        adress:"asd",
      },
      items: cart,
      total: 0,
      date: new Date(),
    }
  

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
     addDoc(collection(firestoreDb, "products"), objOrder).then(({id}) => {
       batch.commit().then(() => {
         alert("Order placed successfully.  Order id: " + id)
       }).catch(err => {
         alert("Error:", err)
       })
     })
    }

//Console.log de Object Order
    console.log("This is the order", objOrder);
    
    
    
    //addDoc
/*     addDoc(collection(firestoreDb, "orders"), objOrder).then((response)=>{console.log ("This is collection response", response)})
    clearCart() */
    
   }

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
    <button onClick={confirmOrder}>Send Order</button>
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

  /*   const total= cart.reduce((acc, item) => acc + item.product.price * item.count, 0);
  console.log("This is total", total);
  const totalPrice = total.reduce((acc, curr) => acc + curr, 0)
console.log("This is totalPrice", totalPrice);
 */
//Get TOTAL ALTERNATIVO
/* const getTotal = () => {
        const countArray = cart.map(p => {
            if(p.count > 1){
                return p.price * p.count;
            }
            return p.price
        });
        
        if(countArray.length){
            return countArray.reduce((acc, price) => acc += price);
        } else {
            return 0;
        }
    }
 */