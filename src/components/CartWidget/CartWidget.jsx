import "./cartWidget.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCartShopping } from '@fortawesome/free-solid-svg-icons'

const CartWidgets = () =>{
    return (
        <div className='containerCartW'>
            <FontAwesomeIcon icon = {faCartShopping} size ="2xl" style = {{color:"white"}}/> 
            <div>
                0
            </div>
            
        </div>
    )
}

export default CartWidgets