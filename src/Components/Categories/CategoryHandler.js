import ItemListContainer from "../Items/itemListContainer";
import { useParams } from "react-router-dom";
import { useState,useEffect } from "react";
import ProductsMock from "../../ProductsMock";

function CategoryHandler(){

    const[category,setCategory] = useState();
    const {categoryId}= useParams();
    let catId= categoryId;

    console.log("cat:"+catId);

    return(

        <div>
            <h1>{catId}</h1>
        </div>
        
    )

}
export default CategoryHandler;