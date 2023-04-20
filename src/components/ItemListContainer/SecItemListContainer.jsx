import "./SecItemListContainer.css";
import { useState, useEffect } from "react";
import SecItemList from "../ItemList/SecItemList";

const SecItemListContainer = ({ greeting }) => {
    const [items2, setItems] = useState([]);
    const BASE_URL = "https://my-json-server.typicode.com/LucasArd/Api_sntgtrg2/products2"
  
    useEffect(() => { // Se puede hacer una peticion sin usar El useEffect pero es incorrecto, usamos useEffect para que REACT maneje las peticiones
      fetch(BASE_URL).then((response) => { // Una promesa para obtener los datos de la API usando FETCH
        return response.json(); // Para entender la respuesta la pasamos a JSON (para ver el body, lo que necesito) pero JSON nos devuelve otra promesa 
      }).then((data) => {  // esta promesa me va a dar informacion (data - la informacion del body que necesito) 
        setItems(data); // una vez que tenemos lo que necesitamos, se lo asignamos al STATE por medio del setItems
      });
    },[]);

    return (
        <div className="products-seccion2">
            <h1 className="greeting">{greeting}</h1>
            <SecItemList products={items2} className = "cards-container" />
        </div>
    )
}



export default SecItemListContainer;