import { createContext, useState } from "react/cjs/react.production.min";

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
   const [cart, setCart] = useState([]);

   const addToCart = (product, count) => {
       //Test
       console.log("This is product", product, count);
       //Test Cart
         console.log("This is cart", cart);
       //Test con cart
       console.log("This is cart con spread operator", [...cart,{product, count}]);
       if (isInCart(product.id)) {
       }    else {
//BORRAR    


       setCart([...cart,{product, count}])
   } }

   //Is in cart
   const isInCart = (id) => {
       const validation= cart.some((item) => item.id === id);
       return validation}

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


   //Console.log cart con spread cargado
   console.log("This is cart whith state changes", cart);
    return (
        <CartContext.Provider value={{cart, addToCart}}>
            {children}
        </CartContext.Provider>
    );
};  }