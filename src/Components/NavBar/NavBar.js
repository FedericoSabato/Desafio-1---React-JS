import 'bootstrap/dist/css/bootstrap.min.css';
import CartWidget from './CartWidget';

function NavBar(){
    return(
        <header className="App-header">
            <div className='Nav-Bar'> 
            <nav class="navbar navbar-expand-lg navbar-light">
                <div class="container-fluid">
                    <a id='brandTitle' class="navbar-brand" href="#">EVENTOS ESPECIALES</a>
                    
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="#">Inicio</a>
                            </li>
                            <li class="nav-item">
                            <a class="nav-link" href="#">Globos</a>
                            </li>
                            <li class="nav-item">
                            <a class="nav-link" href="#">Ambientaciones</a>
                            </li>
                        </ul>
                    </div>
                    <CartWidget/>
                </div>
                </nav>
            </div>
        </header>
         
    )   
};
export default NavBar;