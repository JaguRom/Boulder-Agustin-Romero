import "./CartWidget.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const element = <FontAwesomeIcon icon={faShoppingCart} />



function CartWidget() {
  return (
<div className="cart-widget" >{element}</div>
  );
}

export default CartWidget;
