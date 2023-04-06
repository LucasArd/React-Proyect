import "./ItemListContainer.css";
import { useState, useEffect } from "react";
import { getProducts } from "../../ItemsAsync";
import ItemList from "../ItemList/ItemList";


const ItemListContainer = ({ greeting }) => {
    const [products, setProducts] = useState ([]);

    useEffect(() => {
        getProducts()
            .then(response => {
                setProducts(response);
            })
            .catch(error => {
                console.error(error);
            });
    });

    return (
        <div className="products-seccion">
            <h1 className="greeting">{greeting}</h1>
            <ItemList products={products} className = "cards-container" />
        </div>
    )
}



export default ItemListContainer;