import CartWidgets from "../CartWidget/CartWidget";
import "./navbar.css"

const NavBar = () => {
    return (
        <nav className="NavBar-nav">
            <h2 className="nav-h2"> SNTGTRG </h2>
            <div className="nav-categories">
                <a href="http://localhost:3000/" className="nav-button"> Papel </a>
                <a href="http://localhost:3000/"  className="nav-button"> Calle </a>
                <a href="http://localhost:3000/" className="nav-button"> Expos </a>
            </div>
            <CartWidgets />

        </nav>

    )
}

export default NavBar
