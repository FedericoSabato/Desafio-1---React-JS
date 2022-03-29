import React, {useState,useEffect} from "react";
import ItemCount from "../ItemCount/ItemCount";

function ItemDetail(itemDetail) {

    const {id, title, price, color, image, stock} = itemDetail;
    
    return(
        <div className="itemDetail" >
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
}

export default ItemDetail;