import { useParams } from "react-router-dom";
import { useState,useEffect } from "react";
import Balloons from "../pages/Balloons";
import Deco from "../pages/Deco";
import Contact from "../pages/Contact";

function CategoryHandler(){

    const[category,setCategory] = useState();
    const {categoryId}= useParams();
    let catId= categoryId;

    console.log("cat:"+catId);

    if(catId=='globos'){
        return(
            <Balloons/>
        )
    }
    if(catId=='ambientaciones'){
        return(
            <Deco/>
        )
    }
    if(catId=='contacto'){
        return(
            <Contact/>
        )
    }

}
export default CategoryHandler;