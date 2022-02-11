

function Item({product}) {
  console.log(product)
    return (
      <div>
        <h1>{product.name}</h1>
        <img src="" alt=""></img>
        <p>{product.description}</p>
        <p>Product price</p>
        <button>Add to cart</button>
      </div>
    );
  }
  export default Item;

 