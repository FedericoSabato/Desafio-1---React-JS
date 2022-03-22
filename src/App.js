import './App.css';
import 'bootstrap';
import './Components/NavBar/NavBar.css'
import './Components/ItemCount/ItemCount.css';
import NavBar from './Components/NavBar/NavBar';
import Card from './Components/Card/Card';
import ItemListContainer from './Components/itemListContainer';
import ItemCount from './Components/ItemCount/ItemCount';


function App() {
  return (
    <div className="App">
      <NavBar/>
      <ItemListContainer/>
      <ItemCount stock={8}/>
    </div>
  );
}

export default App;
