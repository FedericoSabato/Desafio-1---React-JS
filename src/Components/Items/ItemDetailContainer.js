import React, {useState,useEffect} from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import { collection,getDoc,getDocs} from "firebase/firestore";
import { doc } from "firebase/firestore";
import database from "../../Firebase";

const ItemDetailContainer = ()=>{

    const {id}= useParams();

    const [product, setProduct] = useState();

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

    const getProductById = async () => {

      const docRef = doc(database,'Productos',id);
      const docSnap = await getDoc(docRef);

      if(docSnap.exists()){
        console.log("PRODUCTO: ",docSnap.data())
        let product = docSnap.data()
        product.id = docSnap.id
        setProduct(product)
      }
      else{
        console.log("Error")
      }
    };

    useEffect(() => {
      getProductById();
    }, [id]);
    
    
    return (
      <section className="item-detail-container">
        {product ? <ItemDetail itemDetail={product} /> : <p>Obteniendo producto...</p>}
      </section>
    );
  };
  
  export default ItemDetailContainer;
  