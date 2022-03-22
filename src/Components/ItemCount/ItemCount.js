import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';

const ItemCount = ({stock})=>{
    
    const [count,setCount] = useState(1);

    const onAdd =()=> {
        if(stock>count){
            setCount(count +1);
        }
        else{
            alert('Ya no hay stock');
        }
    }
    const onSus =()=> {
        if(count>0){
            setCount(count -1);
        }
        else{
            alert('No se puede');
        }
    }

    return(
        <div>
            <button type="button" class="btn addButton" onClick={onAdd}>+</button>
            <p>{count}</p>
            <button type="button" class="btn susButton" onClick={onSus}>-</button>
        </div>  
    )

};

export default ItemCount;