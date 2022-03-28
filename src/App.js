import './App.css';
import 'bootstrap';
import './Components/NavBar/NavBar.css'
import NavBar from './Components/NavBar/NavBar';
import ItemListContainer from './Components/Items/itemListContainer';
import ItemCount from './Components/ItemCount/ItemCount';
import ItemList from './Components/Items/ItemList';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <ItemListContainer/>
    </div>
  );
}

export default App;
