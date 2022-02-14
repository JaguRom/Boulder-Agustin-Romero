import "./ItemListContainer.css"
import ItemCount from "../ItemCount/ItemCount";
import ItemList from "../ItemList/ItemList";
import { useEffect, useState } from 'react'
import { getProducts } from "../ItemArray/ItemArray";

function ItemListContainer({greeting}) {
  //OnAdd
  const OnAdd = (count) => {
  if (count > 0) {
    console.log(`${count} items added to cart`);
  } else {
    console.log("No items added")
  }
};

  //state
  const [products, setProducts] = useState([]);
  //loading
  const [loading, setLoading] = useState(true);

  useEffect(() => {
      getProducts().then((products) => {
          setProducts(products);
      })
      .catch((error) => {
        console.log(error)
      })
      .finally(() => {
        setLoading(false);
      })
  },[])


return (
      <div>
        {loading ? (<h1 className="loading-style">Loading...</h1>
        ) :(
          <>
          <h1 className="item-list-container-h1">{greeting}</h1>
          <ItemCount stock={10} initial={1} OnAdd={OnAdd} />
          <ItemList products={products} />
          </>
        )}
      </div>
    );
  }
  export default ItemListContainer;

