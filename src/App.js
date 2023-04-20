import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import IndexView from './views/IndexView';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import NavBar from './components/navbar/navbar';
import CalleView from './views/CalleView';
import DetailProductView from './views/DetailProductView';




function App() {
  const PAPEL_URL = "https://my-json-server.typicode.com/LucasArd/Api_sntgtrg/products/"; 
  const GRAF_URL = "https://my-json-server.typicode.com/LucasArd/Api_sntgtrg2/products2/";


  return (
    <div className='background-pic'>
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path="/" element={<IndexView/>}></Route>
          <Route path="/calle" element={<CalleView/>}></Route>
          <Route path="/products/detail2/:idProduct" element={<DetailProductView props={GRAF_URL}/>}></Route>
          <Route path="/products/detail/:idProduct" element={<DetailProductView props={PAPEL_URL}/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
