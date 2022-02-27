import "./Item.css";
import { Link } from "react-router-dom";
import ButtonDetail from "../ButtonDetail/ButtonDetail";

function Item({product}) {
    return (
      <div className="individual-items">
        <h1>{product.name}</h1>
        <img src={product.img} alt="" className="product-size"></img>
        <p>{product.description}</p>
        <p>Price: ${product.price}</p>
        <Link to={`/detail/${product.id}`}>
          <ButtonDetail name="Go to detail." />
           </Link>
      </div>
    );
  }
  export default Item;

 