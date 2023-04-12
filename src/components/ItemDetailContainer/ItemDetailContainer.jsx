import './ItemDetailContainer.css';
import { useState, useEffect } from 'react';
import { getProductsById } from '../../ItemsAsync';
import ItemDetail from '../ItemDetail/ItemDetail';


const ItemDetailContainer = () => {
    const [products, setProduct] = useState(null)

    useEffect(() => {
        getProductsById('1')
            .then(response => {
                setProduct(response)
            })
            .catch(error => {
                console.error(error);
            })
    },  []);

    return(
        <div className='ItemDetailContainer'>
            <ItemDetail {...products}/>
        </div>
    )
}

export default ItemDetailContainer;