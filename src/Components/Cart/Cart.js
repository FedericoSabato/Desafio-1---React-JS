import React from "react";
import { useContext,useState } from "react";
import CartContext from "../Context/CartContext";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Cart.css'
import database from "../../Firebase";
import { addDoc,collection } from "firebase/firestore";

function Cart(){

    const {cartProducts} = useContext(CartContext);
    const {finalPrice} = useContext(CartContext);
    const [orderOk,setorderOk] = useState(false);
    const [value,setValue] = useState();
    const [formData,setformData] =useState(
        {
            name:'',
            phone:'',
            email:'',
        }
    )

    const [order,setOrder] =useState({
        buyer: formData,
        items: cartProducts.map ((cartProduct)=>{
            return{
                title: cartProduct.title,
                color: cartProduct.color,
                quantity: cartProduct.qty,
                id: cartProduct.id,
            }
        }),
        total: finalPrice
    })

    const deleteFromCart= (e) =>{ 

        e.stopPropagation();
        let newCartProducts = [];
        setValue(e.target.value);

        cartProducts.map((products)=>{

            cartProducts = cartProducts.filter((products) => products.id !== value);
            console.log('nuevo array: ', newCartProducts)
            
        })
    }

    const handleChange = (e) =>{
        
        setformData({
            ...formData,
            [e.target.name] : e.target.value
        })
        
    }

    const handleSubmit = (e) =>{

        let orderPrev ={
            ...order,
            buyer: formData,
        }
        
        e.preventDefault();
        setOrder({

            ...order,
            buyer: formData,

        })
        pushOrder(orderPrev);
        
    }

    const pushOrder = async(orderPrev) =>{
        const orderFirebase =collection(database, 'Ordenes')
        const newOrder = await addDoc(orderFirebase, orderPrev)
        setorderOk(newOrder.id);
    }
    
    return(
        <div className="cartProducts">
            {cartProducts.map((products)=>{
                return(
                    <div className="item" key={products.id}>
                        <div className="itemImage"> 
                            <img src={products.image} width='200'></img>
                        </div>
                        <div className="itemDescription">
                            <h3>{products.title}</h3>
                            <h5>{products.color}</h5>
                            <h4>$ {products.price * products.qty}</h4>
                            <h4>Cantidad: {products.qty}</h4>
                        </div>
                        <button id="button" onClick={deleteFromCart} value={products.id} >x</button>
                    </div>
                )
            })}

            <div>
                <div>
                    <div>Precio Final:</div>
                    <p className="price">$ {finalPrice}</p>
                    <button className="btn" id="button" data-bs-toggle="modal" data-bs-target="#exampleModal">Realizar Compra</button>
                    {console.log(order)}
                    <div className="modal" tabindex="-1" id="exampleModal" >
                        <div className="modal-dialog">
                            <div className="modal-content">
                                {orderOk ? (
                                    <div> 
                                        <h3> Su compra se ha realizado!</h3>
                                        <h4>ID de compra: {orderOk}</h4>
                                    </div>
                                ) : (
                                    <form onSubmit={handleSubmit}>
                                    <div className="modal-header">
                                        <h5 className="modal-title">Finalizar Compra</h5>
                                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div className="modal-body">
                                    <div className="input-group input-group-lg">
                                        <span className="input-group-text" id="inputGroup-sizing-lg">Nombre Completo</span>
                                        <input value={formData.name} name='name' onChange={handleChange} type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg"></input>
                                    </div>
                                    <div className="input-group input-group-lg">
                                        <span className="input-group-text" id="inputGroup-sizing-lg">Telefono</span>
                                        <input value={formData.phone} name='phone' onChange={handleChange} type="number" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg"></input>
                                    </div>
                                    <div className="input-group input-group-lg">
                                        <span className="input-group-text" id="inputGroup-sizing-lg">E-Mail</span>
                                        <input value={formData.email} name='email' onChange={handleChange} type="email" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg"></input>
                                    </div>
                                    </div>
                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                                        <button type="submit" className="btn" id="button">Comprar</button>
                                    </div>
                                </form>
                                )}
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

}

export default Cart;