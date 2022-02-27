import "./CartWidget.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const element = <FontAwesomeIcon icon={faShoppingCart} className="cart-widget"  />



function CartWidget({info}) {
  return (
<div className="cart-widget-div" >
  <h1>{info}</h1>
  {element}
  </div>
  );
}

export default CartWidget;
