import './ItemCount.css';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';


const ItemCount = ({stock, initial, onAdd}) => {
    const [quantity, setQuantity] = useState(initial)

    const increment = () => {
        if(quantity < stock) {
            setQuantity(quantity + 1)
        }
    }

    const decrement = () => {
        if(quantity > 1) {
            setQuantity(quantity - 1)
        }
    }

    return(
        <div className="Counter">
            <div className='Controls'>
                <Button className = "Button btn-secondary" onClick={increment}> + </Button>
                <h5 className = 'Number'>{quantity}</h5>
                <Button className = 'Button btn-secondary' onClick={decrement}> - </Button>
            </div>
            <div className='Controls'>
                <Button className='Button btn-warning Button-agregar' onClick={() => onAdd(quantity)} disabled={!stock}> Agregar </Button>
            </div>
        </div>
    )

}

export default ItemCount;

