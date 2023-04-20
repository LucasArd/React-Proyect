import Card from 'react-bootstrap/Card';
import './SecItems.css';
import Button from 'react-bootstrap/esm/Button';
import { NavLink } from 'react-router-dom';



const SecItems = ({ id, name, img, price, stock }) => { // Recordar que desde la API no piuedo llamar a archivos locales por seguridad

  return (
    <Card className="bg-dark text-white">
      <Card.Img src={img} alt={name} className='card-img-BS' />
      <Card.ImgOverlay>
        <Card.Title>{name}</Card.Title>
        <Card.Text >
          This is a wider card with supporting text below as a natural lead-in
          to additional content. This content is a little bit longer.
        </Card.Text>
        <NavLink to={`/products/detail2/${id}`}>
          <Button className='Button btn-warning'>Ver detalle</Button>
        </NavLink>
      </Card.ImgOverlay>
    </Card>
  );
};

export default SecItems; 