import SecItems from "../Items/SecItems";
import "./SecItemList.css";

const SecItemList = ({products}) => {
    return(
        <div className="ListGroup">
            {products.map(product => <SecItems key={product.id} {...product} />)}
        </div>
    )
}

export default SecItemList;