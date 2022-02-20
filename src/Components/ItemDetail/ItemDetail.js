import "./ItemDetail.css"
import ItemCount from "../ItemCount/ItemCount";

function ItemDetail({product}) {

    //OnAdd
    const OnAdd = (count) => {
      if (count > 0) {
        console.log(`${count} items added to cart`);
      } else {
        console.log("No items added")
      }
    };
 console.log(product)
    return (
      <div className="individual-items">
        <h1>{product.name}</h1>
        <img src={product.img} alt="" className="product-size"></img>
        <p>{product.description}</p>
        <p>Price: ${product.price}</p>
        <p>Available stock: {product.stock}</p>
        <ItemCount stock={product.stock} initial={1} OnAdd={OnAdd}/>
      </div>
    );
  }
  export default ItemDetail;

