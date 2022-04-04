import React from "react";
import ItemCount from "../ItemCount/ItemCount";
import { useParams } from "react-router-dom";
import { useEffect,useState } from "react";
import ProductsMock from "../../ProductsMock";

function ItemDetail({itemDetail}) {

    const { id,category }=useParams();
    const {product,setProduct} = useState({});

    const {title,price,color,image,stock} = itemDetail;

    useEffect(()=>{
        filterProductId();
    },[id])
    const filterProductId =()=>{
        return ProductsMock.map((product)=>{
            if(product.id===parseInt(id)){
                return setProduct(product)
            }
        })
    }
    return(
        <div className="item" >
            <div className="itemImage"> 
                <img src={image} width='200'></img>
            </div>
            <div className="itemDescription">
                <h3>{title}</h3>
                <h5>{color}</h5>
                <h4>$ {price}</h4>
                <ItemCount stock= {stock}/>
                <button className="btn buyButton">Comprar</button>
            </div>
        </div>
    )
};

export default ItemDetail;