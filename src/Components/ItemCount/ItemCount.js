import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import './ItemCount.css'

const ItemCount = ({stock,action}) =>{
    
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
        <div className='itemButtons'>
            <button type="button" class="btn" id='susBut'onClick={onSus}>-</button>
            <p>{count}</p>
            <button type="button" class="btn" id='addBut' onClick={onAdd}>+</button>
            <button className="btn" id='buyButton' onClick={(e) => action(e, count)} >Comprar</button>
        </div>  
    )

};

export default ItemCount;