import React, {useState,useEffect} from "react";
import ItemDetail from "./ItemDetail";

function ItemDetailContainer(){

    const mockItem = [
        {
            id:1,
            title:'Globo Corazón',
            price:500,
            color:'Rojo',
            image:'Images/Globo Corazon Rojo.jpg',
            stock:10,
        },

    ]
    const [itemDetail,setItemDetail] = useState([]);

    const getItemDetail =()=>{
        return new Promise((resolve,reject)=>{
            return setTimeout(()=>{
                resolve(mockItem)
            },2000)
        })
    }
    useEffect(()=>{
        getItemDetail()
        .then((detail)=>{
            setItemDetail(detail);
        }).finally(()=>{
            console.log("Fin de llamada")
        })
    },[])
    
    return(
        <div className="itemDetailContainer">
            {console.log('ItemDetail:'+itemDetail)}
            {itemDetail.map((itemDetail)=>{
                return(
                    <ItemDetail itemDetail ={itemDetail} key={itemDetail.id}/>
                )
            })}
        </div>
    )
};
export default ItemDetailContainer;