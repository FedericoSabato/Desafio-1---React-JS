import React from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

function Item({productData}){

    const {id,title,price,color,image,stock} = productData;   

    return(
        <div className="item" >
            <Link to={"/item/:id"}>
                <div className="itemImage"> 
                    <img src={image} width='200'></img>
                </div>
            </Link> 
            <div className="itemDescription">
                <h3>{title}</h3>
                <h5>{color}</h5>
                <h4>$ {price}</h4>
            </div>      
        </div>
    )
};

export default Item;