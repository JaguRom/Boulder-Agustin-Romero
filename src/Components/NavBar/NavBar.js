import "./NavBar.css"
import CartWidget from "../CartWidget/CartWidget";
import Button from "../Button/Button";
import {NavLink} from "react-router-dom";

function NavBar() {
    return (
      <header className="nav-container">
      <nav>
            <NavLink to={'/'} className="button" buttonDetail="Home" >Home</NavLink>
            <NavLink to={'/category/Climbing Gear'} className="button climbingGear" buttonDetail="Climbing Gear">Climbing Gear</NavLink>
            <NavLink to={'/category/Trekking'} className="button" buttonDetail="Trekking">Trekking</NavLink>
            <NavLink to={'/category/Camping'} className="button" buttonDetail="Camping">Camping</NavLink>
            <CartWidget />
      </nav>
      </header>
    )
}

export default NavBar;