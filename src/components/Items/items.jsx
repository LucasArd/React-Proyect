import Card from 'react-bootstrap/Card';
import './items.css';
import Button from 'react-bootstrap/esm/Button';
import { NavLink } from 'react-router-dom';



const Item = ({id, name, img, price, stock}) => { // Recordar que desde la API no piuedo llamar a archivos locales por seguridad

    return (
        <Card  className='bg-dark border-warning mb-5 text-white'>
          <Card.Img variant="top" className='card-img-top' src = {img} alt={name} />
          <Card.Body className = "card-body2">
            <Card.Title>{name}</Card.Title>
            <Card.Text>
              Impresion HD de obra de grafito sobre papel de alto gramaj.
              <br/>
              $ {price}
            </Card.Text>
            <NavLink to={`/products/detail/${id}`}>
              <Button className='Button btn-warning' >Ver detalle</Button>
            </NavLink>
          </Card.Body>
        </Card>
      );
};

export default Item; 

