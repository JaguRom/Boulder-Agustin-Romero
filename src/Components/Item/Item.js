import "./Item.css";

function Item({product}) {
  console.log(product)
    return (
      <div className="individual-items">
        <h1>{product.name}</h1>
        <img src={product.img} alt="" className="product-size"></img>
        <p>{product.description}</p>
        <p>Price: ${product.price}</p>
        <button>Add to cart</button>
      </div>
    );
  }
  export default Item;

 