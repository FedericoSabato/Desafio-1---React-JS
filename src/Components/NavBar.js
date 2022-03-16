import 'bootstrap/dist/css/bootstrap.min.css';

function NavBar(){
    return(
        <header className="App-header">
            <div className='Nav-Bar'> 
            <nav class="navbar navbar-expand-lg navbar-light">
                <div class="container-fluid">
                    <a id='brandTitle' class="navbar-brand" href="#">Eventos Especiales</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="#">Inicio</a>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="#">Globos</a>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="#">Ambientaciones</a>
                        </li>
                    </ul>
                    </div>
                </div>
                </nav>
            </div>
        </header> 

    )   
};

export default NavBar;