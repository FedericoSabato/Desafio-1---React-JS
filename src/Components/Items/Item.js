import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";
import './Item.css'

function Item({productData}){

    const {id,title,price,color,image,stock} = productData;   

    return(

        <div className="container">
            <div className="item">
                <Link to={"/item/"+id}>
                    <div className="itemImage"> 
                        <img src={`../${image} `} height='200'></img>
                    </div>
                </Link> 
                <div className="itemDescription">
                    <h3>{title}</h3>
                    <h4>{color}</h4>
                    <h4>$ {price}</h4>
                </div>      
            </div>
        </div>

    )
};

export default Item;