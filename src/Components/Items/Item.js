import React, {useState,useEffect} from "react";
import ItemCount from "../ItemCount/ItemCount";

function Item({productData}){

    const {id,title,price,color,image,stock} = productData;

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
            </div>
        </div>
    )
};

export default Item;