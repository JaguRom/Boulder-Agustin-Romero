import "./NavBar.css"
import CartWidget from "../CartWidget/CartWidget";
import ItemList from "../ItemList/ItemList";


function NavBar() {
    return (
      <header className="nav-container">
      <nav>
            <button className="home button"> Home </button>
            <button className="climbingGear button"> Climbing Gear </button>
            <button className="trekking button"> Trekking </button>
            <button button className="camping button"> Camping </button>
            <CartWidget />
      </nav>
      </header>
    )
}

export default NavBar;