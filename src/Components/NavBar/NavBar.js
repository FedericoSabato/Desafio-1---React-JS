import 'bootstrap/dist/css/bootstrap.min.css';
import CartWidget from './CartWidget';
import { Link } from 'react-router-dom';
import { useContext } from "react";
import CartContext from "../Context/CartContext";

function NavBar(){

    const {cartProducts} = useContext(CartContext);

    return(
        <header className="App-header">
            <div className='Nav-Bar'> 
            <nav class="navbar navbar-expand-lg navbar-light">
                <div class="container-fluid">
                    <Link to={"/"}id='brandTitle' class="navbar-brand" href="#">EVENTOS ESPECIALES</Link>        
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                            <Link to={"/"} class="nav-link active" href="#">Inicio</Link>
                            </li>
                            <li  class="nav-item">
                            <Link to={"/category/1"} class="nav-link" href="#">Globos</Link>
                            </li>
                            <li class="nav-item">
                            <Link to={"/category/2"} class="nav-link" href="#">Ambientaciones</Link>
                            </li>
                            <li class="nav-item">
                            <Link to={"/category/3"} class="nav-link" href="#">Contacto</Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <div>
                            <Link to={"/cart"} id='cartButton'><CartWidget/></Link>
                        </div>
                        <div>
                            <p>{cartProducts.length}</p>
                        </div>
                    </div>
                    
                </div>
                </nav>
            </div>
        </header>
         
    )   
};
export default NavBar;