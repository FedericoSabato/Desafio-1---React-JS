import React from "react";
import { createContext,useState} from "react";

const CartContext = createContext();

const CartProvider = ({children})=>{

    const[cartProducts, setCartProducts]=useState([]);
    const[finalPrice, setFinalPrice]=useState(0);
    
    const addToCart = (product) =>{
        console.log("PRODUCTO a agregar"+ product.price);
        setCartProducts(cartProducts => [...cartProducts,product])
        setFinalPrice(finalPrice +(product.price));
    }

    const data ={
        cartProducts,
        addToCart,
        finalPrice
    }

    return(
        <CartContext.Provider value={data}>
            {children}
        </CartContext.Provider>
    )
}
export {CartProvider};
export default CartContext;
