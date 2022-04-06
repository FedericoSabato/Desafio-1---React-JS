import './App.css';
import 'bootstrap';
import './Components/NavBar/NavBar.css'
import NavBar from './Components/NavBar/NavBar';
import Home from './pages/Home';
import ItemDetailContainer from './Components/Items/ItemDetailContainer';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import { CartProvider } from './Components/Context/CartContext';


function App() {

  return (
    <div className="App">
      <CartProvider>
        <BrowserRouter>
          <NavBar/>
          <Routes>
            <Route path='/'element={<Home/>}/>
            <Route path='/category/:categoryId'element={<Home/>}/>
            <Route path='/item/:id'element={<ItemDetailContainer id={1}/>}/>
          </Routes>
        </BrowserRouter>
      </CartProvider>
  </div>
  );
}

export default App;
