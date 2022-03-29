import React, {useState,useEffect} from "react";
import Item from "./Item";

function ItemList(){

    const mockItems = [
        {
            id:1,
            title:'Globo Corazón',
            price:500,
            color:'Rojo',
            image:'Images/Globo Corazon Rojo.jpg',
            stock:10,
        },
        {
            id:2,
            title:'Globo Corazón',
            price:500,
            color:'Rosa',
            image:'Images/Globo Corazon Rosa.jpg',
            stock:7,
        },
        {
            id:3,
            title:'Globo Corazón',
            price:500,
            color:'Verde',
            image:'Images/Globo Corazon Verde.jpg',
            stock:10,
        },
        {
            id:4,
            title:'Globo Corazón',
            price:500,
            color:'Negro',
            image:'Images/Globo Corazon Negro.jpg',
            stock:2,
        },
    ]
    const [products, setProducts] = useState([])
    const getProducts = () => {
        return new Promise((resolve,reject)=>{
            return setTimeout(()=>{
                resolve(mockItems)
            },2000)
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