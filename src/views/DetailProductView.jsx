import { useParams } from "react-router-dom";
import useFetch from "../utils/useFetch";
import { Card } from "react-bootstrap";
import ItemCount from "../components/ItemCount/ItemCount";



const DetailProductView = ({props}) => {

    const { idProduct } = useParams();

    const [data] = useFetch(`${props}/${idProduct}`);

    const { name, price, img, stock } = data;

    return (
        <div className="d-flex justify-content-center">
            <Card className='bg-dark border-warning mb-5 text-white w-50 '>
                <Card.Img variant="top" className='card-img-top ' src={img} alt={name} />
                <Card.Body className="card-body">
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        Impresion HD de obra de grafito sobre papel de alto gramaje.
                        <br />
                        $ {price}
                    </Card.Text>
                    <ItemCount initial={1} stock={stock} onAdd={(quantity) => console.log('cantidad agregada', { quantity })} />
                </Card.Body>
            </Card>
        </div>

    )
}

export default DetailProductView;