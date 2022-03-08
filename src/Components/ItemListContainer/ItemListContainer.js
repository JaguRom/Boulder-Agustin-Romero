import ItemList from "../ItemList/ItemList";
import { useEffect, useState } from 'react'
import { getProducts, getProductsByCategory } from "../ItemArray/ItemArray";
import { useParams } from "react-router-dom";
import {getDocs, collection} from "firebase/firestore";
import {firestoreDb} from "../../Services/Firebase/firebase";
 

function ItemListContainer({
  greeting
}) {
  //state
  const [products, setProducts] = useState([]);
  //loading
  const [loading, setLoading] = useState(true);
  //useParams
  const  {categoryId}  = useParams();


  useEffect(() => {
    if (categoryId) {
      setTimeout(() => {
        getProductsByCategory(categoryId).then((products) => {
          setProducts(products);
          setLoading(false);
        });
      }, 2000);
    } else {
      getProducts().then((products) => {
        setProducts(products);
        setLoading(false);
      });
    }
  }, [categoryId]);


return (
      <div>
        {loading ? (<h1 className="loading-style">Loading...</h1>
        ) :(
          <>
          <h1 className="item-list-container-h1">{greeting}</h1>
          <ItemList products={products} />
          </>
        )}
      </div>
    );
  }
  export default ItemListContainer;

