import Card from 'react-bootstrap/Card';
import './items.css';
import ItemCount from '../ItemCount/ItemCount';


const Item = ({id, name, img, price, stock}) => {

    return (
        <Card  className='bg-dark border-warning mb-5 text-white'>
          <Card.Img variant="top" className='card-img-top' src = {img} alt={name} />
          <Card.Body className = "card-body">
            <Card.Title>{name}</Card.Title>
            <Card.Text>
              Impresion HD de obra de grafito sobre papel de alto gramaje.
              <br/>
              $ {price}
            </Card.Text>
            <ItemCount initial ={1} stock = {5} onAdd= {(quantity) => console.log ('cantidad agregada', {quantity})} />
          </Card.Body>
        </Card>
      );
};

export default Item;
