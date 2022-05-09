import React from "react";
import ItemCount from "../ItemCount/ItemCount";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import CartContext from "../Context/CartContext";
import { useEffect,useState } from "react";
import ProductsMock from "../../ProductsMock";
import './Item.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import database from "../../Firebase";

function ItemDetail({itemDetail}) {

    const { id,category }=useParams();
    const {product,setProduct} = useState({});
    const [productQuantity, setProductQuantity] = useState(0);

    const {cartProducts,addToCart} = useContext(CartContext);

    const {title,price,color,image,stock,qty} = itemDetail;

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
    
    const onAdd = (e, count) => {
        if(!!e & productQuantity<1){
            setProductQuantity(count);
        }
    }
    //useEffect
    useEffect(()=>{
        if(productQuantity>0){
            addToCart(itemDetail,productQuantity);
        }
    },[productQuantity])


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
                    <ItemCount stock= {stock} action={onAdd}/>
                </div>
            </div> 
        </div>  
    )
};

export default ItemDetail;