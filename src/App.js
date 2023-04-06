import './App.css';
import NavBar from './components/navbar/navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import Gallery from './components/Gallery/gallery';


function App() {

  return (
    <div className='background-pic'>
      <div className="App">
        <NavBar/>
        <Gallery/>
        <ItemListContainer greeting = {"Bienvenidos"} />
        <Button >ACEPTAR</Button>
      </div>
    </div>
  );
}

export default App;
