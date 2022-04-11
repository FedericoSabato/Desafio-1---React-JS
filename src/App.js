import './App.css';
import 'bootstrap';
import './Components/NavBar/NavBar.css'
import NavBar from './Components/NavBar/NavBar';
import Home from './pages/Home';
import ItemDetailContainer from './Components/Items/ItemDetailContainer';
import {BrowserRouter,Routes,Route,useParams} from "react-router-dom";
import { CartProvider } from './Components/Context/CartContext';
import Cart from './Components/Cart/Cart';

function App() {

  return (
    
    <div className="App">
      <CartProvider>
        <BrowserRouter>
          <NavBar/>
          <Routes>
            <Route path='/'element={<Home/>}/>
            <Route path='/category/:categoryId'element={<Home/>}/>
            <Route path='/item/:id'element={<ItemDetailContainer/>}/>
            <Route path='/cart' element={<Cart/>}/>
          </Routes>
        </BrowserRouter>
      </CartProvider>
  </div>
  );
}

export default App;
