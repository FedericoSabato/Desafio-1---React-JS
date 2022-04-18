import React, {useState,useEffect} from "react";
import Item from "./Item";
import { collection,getDocs} from "firebase/firestore";
import database from "../../Firebase";

function ItemList(){
    
    const [products, setProducts] = useState([])
    const getProducts = async() =>{
      
        const itemsCollection = collection(database,'Productos');
        const productSnapshot = await getDocs(itemsCollection)
        const productsList = productSnapshot.docs.map ((doc)=>{
  
          let product = doc.data();
          product.id = doc.id;
          console.log(product)
          return product
          
        })
        return productsList
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

            {console.log("Productos: ",products)}
            {products.map((products)=>{
                return(
                    <Item productData={products} key= {products.id}/>
                )
            })}

        </div>
    )
};

export default ItemList;