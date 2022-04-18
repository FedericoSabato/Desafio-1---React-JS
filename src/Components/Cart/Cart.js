import React from "react";
import { useContext,useState } from "react";
import CartContext from "../Context/CartContext";

function Cart(){

    const {cartProducts} = useContext(CartContext);
    const [value,setValue] = useState();

    function deleteFromCart(){
        console.log("ASHE"+value)
    }

    return(
        <div className="cartProducts">
            {cartProducts.map((products)=>{
                return(
                    <div className="item" key={products.id}>
                        <div className="itemImage"> 
                            <img src={products.image} width='200'></img>
                        </div>
                        <div className="itemDescription">
                            <h3>{products.title}</h3>
                            <h5>{products.color}</h5>
                            <h4>$ {products.price}</h4>
                        </div>
                        <button onClick={deleteFromCart} value={value}>x</button>
                    </div>
                )
            })}
        </div>
    );


}
export default Cart;