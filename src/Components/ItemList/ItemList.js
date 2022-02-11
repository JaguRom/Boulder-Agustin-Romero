import Item from "../Item/Item";

function ItemList({products}) {
console.log(products);
  return (
    <div>
          {products.map((product) => (
        <Item key={product.id} product={product} />
      ))}
    </div>
  );
}
export default ItemList;
