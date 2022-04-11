import React, {useState,useEffect} from "react";
import Item from "./Item";
import ProductsMock from "../../ProductsMock";

function ItemList(){
    
    const [products, setProducts] = useState([])
    const getProducts = () => {
        return new Promise((resolve,reject)=>{
            return setTimeout(()=>{
                resolve(ProductsMock)
            },500)
        })
    }
    useEffect(()=>{
        getProducts()
        .then ((productos)=>{
            setProducts(productos);
        }).finally(()=>{
            console.log("Fin de llamada")
        })
    },[])

    return(
        <div className="itemContainer">
            {console.log(products)}
            {products.map((products)=>{
                return(
                    <Item productData={products} key= {products.id}/>
                )
            })}
        </div>
    )
};

export default ItemList;