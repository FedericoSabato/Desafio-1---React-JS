import './App.css';
import 'bootstrap';
import './Components/NavBar/NavBar.css'
import NavBar from './Components/NavBar/NavBar';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Balloons from './pages/Balloons';
import Decorations from './pages/Decorations';
import ItemDetailContainer from './Components/Items/ItemDetailContainer';
import {BrowserRouter,Routes,Route} from "react-router-dom";

function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path='/'element={<Home/>}/>
          <Route path='/category/:categoryId'element={<Home/>}/>
          <Route path='/item/:id'element={<Home/>}/>
        </Routes>
      </BrowserRouter>
<ItemDetailContainer id={2}/>
      
  </div>
  );
}

export default App;
