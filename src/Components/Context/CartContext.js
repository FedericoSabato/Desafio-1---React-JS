import React from "react";
import { createContext,useState} from "react";

const CartContext = createContext();

const CartProvider = ({children})=>{

    const[cartProducts, setCartProducts]=useState([]);
    const[finalPrice, setFinalPrice]=useState(0);
    
    const addToCart = (product,productQuantity) =>{

        product.qty = productQuantity;
        setCartProducts(cartProducts => [...cartProducts,product])
        setFinalPrice(finalPrice +(product.price*productQuantity));
    }

    const deleteProduct =(product,productQuantity) =>{

        setFinalPrice(finalPrice - (product.price*product.qty))

        setCartProducts(cartProducts.filter((cartProduct)=>{
            
        return cartProduct.id !== product.id    

    }))
    }
    
    const data ={
        cartProducts,
        addToCart,
        finalPrice,
        deleteProduct
    }

    return(
        <CartContext.Provider value={data}>
            {children}
        </CartContext.Provider>
    )
}
export {CartProvider};
export default CartContext;
