import React, {useState,useEffect} from "react";
import ItemDetail from "./ItemDetail";
import ProductsMock from "../../ProductsMock";

const ItemDetailContainer = ({id})=>{
    const [product, setProduct] = useState();

    const searchId = (id, array) => array.find((el) => el.id === id);
    
    const getProducts = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(ProductsMock);
    }, 500);
    });

    const getProductById = async (id, setState) => {
    try {
        const result = await getProducts;
        setState(searchId(id, result));
    } catch (error) {
        console.log(error);
    }
    };

    useEffect(() => {
      getProductById(Number(id), setProduct);
      console.log(product);
    }, [id]);
    
    

    return (
      <section className="item-detail-container">
        {product ? <ItemDetail itemDetail={product} /> : <p>Obteniendo producto...</p>}
      </section>
    );
  };
  
  export default ItemDetailContainer;
  