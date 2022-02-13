import Item from "../Item/Item";
import "./ItemList.css";

function ItemList({products}) {
console.log(products);
  return (
    <div className="product-card">
          {products.map((product) => (
        <Item key={product.id} product={product} />
      ))}
    </div>
  );
}
export default ItemList;
