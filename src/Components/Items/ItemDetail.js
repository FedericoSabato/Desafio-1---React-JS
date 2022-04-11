import React from "react";
import ItemCount from "../ItemCount/ItemCount";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import CartContext from "../Context/CartContext";
import { useEffect,useState } from "react";
import { Link } from 'react-router-dom';
import ProductsMock from "../../ProductsMock";
import './Item.css'
import 'bootstrap/dist/css/bootstrap.min.css';


function ItemDetail({itemDetail}) {

    const { id,category }=useParams();
    const {product,setProduct} = useState({});

    const {cartProducts,addToCart} = useContext(CartContext);

    const {title,price,color,image,stock} = itemDetail;

    useEffect(()=>{
        filterProductId();
    },[id])

    const filterProductId =()=>{
        return ProductsMock.map((product)=>{
            if(product.id===parseInt(id)){
                return console.log(product);
            }
        })
    }

    const addToCartArray = (e) => {
        
        e.stopPropagation();
        addToCart(itemDetail);
        
    }

    return(
        <div className="container">
            <div className="item row" >
                <div className="itemImage col"> 
                    <img src={image} width='200'></img>
                </div>
                <div className="itemDescription col mt-5">
                    <h3>{title}</h3>
                    <h5>{color}</h5>
                    <h4>$ {price}</h4>
                    <ItemCount stock= {stock}/>
                    <button className="btn" id='buyButton' onClick={addToCartArray}>Comprar</button>
                </div>
            </div> 
        </div>  
    )
};

export default ItemDetail;