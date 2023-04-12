import CartWidgets from "../CartWidget/CartWidget";
import "./navbar.css"

const NavBar = () => {
    return (
        <nav className="NavBar-nav">
            <h2 className="nav-h2"> SNTGTRG </h2>
            <div className="nav-categories">
                <span href="http://localhost:3000/" className="nav-button"> Papel </span>
                <span href="http://localhost:3000/"  className="nav-button"> Calle </span>
                <span href="http://localhost:3000/" className="nav-button"> Expos </span>
            </div>
            <CartWidgets />

        </nav>

    )
}

export default NavBar
