import "./NavBar.css"
import CartWidget from "../CartWidget/CartWidget";
import {NavLink} from "react-router-dom";

function NavBar() {
    return (
      <header className="nav-container">
      <nav>
            <NavLink to={'/'} className="button home" >Home</NavLink>
            <NavLink to={'/category/Climbing Gear'} className="button climbingGear">Climbing Gear</NavLink>
            <NavLink to={'/category/Trekking'} className="button trekking">Trekking</NavLink>
            <NavLink to={'/category/Camping'} className="button camping">Camping</NavLink>
            <NavLink to ={'/Cart'} className="noDec" >{<CartWidget />}</NavLink>
      </nav>
      </header>
    )
}

export default NavBar;