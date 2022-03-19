import './App.css';
import './Components/NavBar/NavBar.css';
import NavBar from './Components/NavBar/NavBar';
import Card from './Components/Card/Card';
import ItemListContainer from './Components/itemListContainer';
import 'bootstrap';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <ItemListContainer/> 
    </div>
  );
}

export default App;
