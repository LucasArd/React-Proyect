import ItemListContainer from '../components/ItemListContainer/ItemListContainer';
import 'bootstrap/dist/css/bootstrap.min.css';
import Gallery from '../components/Gallery/gallery';



const IndexView = () => {
  
  return (
    <div className='background-pic'>
      <div className="App">
        <Gallery/>
        <ItemListContainer greeting = {"Bienvenidos"} />
      </div>
    </div>
  );
}

export default IndexView;