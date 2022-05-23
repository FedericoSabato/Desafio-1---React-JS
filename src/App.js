import './App.css';
import 'bootstrap';
import NavBar from './Components/NavBar/NavBar';
import Home from './Components/pages/Home'
import ItemDetailContainer from './Components/Items/ItemDetailContainer';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import { CartProvider } from './Components/Context/CartContext';
import Cart from './Components/Cart/Cart';
import CategoryHandler from './Components/Categories/CategoryHandler';
import Footer from './Components/Footer/Footer';

function App() {

  return (
    
    <div className="App">
      <CartProvider>
        <BrowserRouter>
          <NavBar/>
          <Routes>
            <Route path='/'element={<Home/>}/>
            <Route path='/category/:categoryId' element={<CategoryHandler/>}/>
            <Route path='/item/:id'element={<ItemDetailContainer/>}/>
            <Route path='/cart' element={<Cart/>}/>
          </Routes>
        </BrowserRouter>
      </CartProvider>
      <Footer/>
  </div>
  );
}

export default App;
