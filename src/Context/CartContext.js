import { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
//UseState
const [cart, setCart] = useState([]);


 

const addToCart = (product, count) => {
//Console log de product y count
console.log("This is product & count", product, count)
if (isInCart(product.id)) {
//Sumar cantidad
sumarCantidad(product.id,count)
    alert("Product is already in cart");
} else {
//Producto individual para cada artículo
setCart ([...cart, {...product, count}]);
}
}

//Console log de cart post función
console.log("This is cart", cart)

//Buscar por id
const isInCart = (id) =>{
return cart.some((product) => product.id === id)
}
console.log("This is isInCart", isInCart())

//Sumar cantidad
const sumarCantidad = (id,count) =>{
    setCart(cart.map((product) => (product.id === id ? {...product, count: product.count + count} : product)))
//SOL IA REVISAR

}

//Remove item
const removeItem = (id) =>{
   setCart(cart.filter((product) => product.id !== id))

}
//Clear cart
const clearCart = () =>{
    setCart([]);
}
return (
        <CartContext.Provider value={{cart,clearCart,removeItem, addToCart}}>
            {children}
        </CartContext.Provider>
    );
};




















//End CartContextProvider   


//{cart, addToCart}
/*    const [cart, setCart] = useState([]); */

/*    const addToCart = (product, count) => {
       //Test
       console.log("This is product", product, count);
       //Test Cart
         console.log("This is cart", cart);
       //Test con cart
       console.log("This is cart con spread operator", [...cart,{product, count}]);
       if (isInCart(product.id)) {
       }    else {



       setCart([...cart,{product, count}])
   } }
 */

/*    //Is in cart
   const isInCart = (id) => {
       const validation= cart.some((item) => item.id === id);
       return validation} */
/*
    //Const Sumar cantidad
    const sumarCantidad = (id, count) => {
    cart.map((product) => product.id === id ? (product.count += count) : null)

    //ClearCart
    const clearCart = () => {
        setCart([]);
    }

    //Filter
    const filterCart = (id) => {
        const itemsFiltered = cart.filter((item) => item.id !== id);
        setCart(itemsFiltered);
    }
 */

   //Console.log cart con spread cargado
  // console.log("This is cart whith state changes", cart);