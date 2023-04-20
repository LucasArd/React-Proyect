import CartWidgets from "../CartWidget/CartWidget";
import "./navbar.css"
import { NavLink } from "react-router-dom";

const NavBar = () => {
    return (
        <nav className="NavBar-nav">
            <NavLink to={`/`} className="NavLink-h2">
                <h2 className="nav-h2"> SNTGTRG </h2>
            </NavLink>
            <div className="nav-categories">
                <NavLink to={`/`} className="nav-button">
                    <span href="http://localhost:3000/" > Papel </span>
                </NavLink>
                <NavLink to={`/calle`} className="nav-button">
                    <span href="http://localhost:3000/" > Calle </span>
                </NavLink>                
                <NavLink to={`/`} className="nav-button">
                    <span href="http://localhost:3000/" > Expo </span>
                </NavLink>            
            </div>
            <CartWidgets />
        </nav>

    )
}

export default NavBar
