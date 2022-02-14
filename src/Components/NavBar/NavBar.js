import "./NavBar.css"
import CartWidget from "../CartWidget/CartWidget";
import Button from "../Button/Button";

function NavBar() {
    return (
      <header className="nav-container">
      <nav>
            <Button buttonDetail="Home" />
            <Button buttonDetail="Climbing Gear"/>
            <Button buttonDetail="Trekking"/>
            <Button buttonDetail="Camping"/>
            
            <CartWidget />
      </nav>
      </header>
    )
}

export default NavBar;