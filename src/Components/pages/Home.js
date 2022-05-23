import ItemListContainer from "../Items/itemListContainer";
import './pages.css'

function Home(){
    return(
        <div className="homeContainer">
            <h1>Nuestros productos:</h1>
            <div className="homeProducts">
                <ItemListContainer/>
            </div>  
        </div>
    );
}
export default Home;