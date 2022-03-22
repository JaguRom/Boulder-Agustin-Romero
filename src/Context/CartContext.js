import { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
//UseState
const [cart, setCart] = useState([]);

const addToCart = (product, count) => {
//Console log de product y count
if (isInCart(product.id)) {
//Sumar cantidad
sumarCantidad(product.id,count)
} else {
//Producto individual para cada artículo
setCart ([...cart, {...product, count}]);
}
}

//Buscar por id
const isInCart = (id) =>{
return cart.some((product) => product.id === id)
}

//Sumar cantidad
const sumarCantidad = (id,count) =>{
    setCart(cart.map((product) => (product.id === id ? {...product, count: product.count + count} : product)))
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
        <CartContext.Provider value={{cart,clearCart,removeItem, addToCart, isInCart}}>
            {children}
        </CartContext.Provider>
    );
};