import ItemList from "../ItemList/ItemList";
import { useEffect, useState } from 'react'
import { getProducts, getProductsByCategory } from "../ItemArray/ItemArray";
import { useParams } from "react-router-dom";
import {getDocs, collection, query, where} from "firebase/firestore";
import {firestoreDb} from "../../Services/Firebase/firebase";
 

function ItemListContainer({greeting}) {
  //state
  const [products, setProducts] = useState([]);
  //loading
  const [loading, setLoading] = useState(true);
  //useParams
  const  {categoryId}  = useParams();
  

  useEffect(() => {
    setLoading(true); 
    const collectionRef = categoryId ?   
    query (collection(firestoreDb, "products"), where ("category", "==", categoryId)) :
    collection (firestoreDb, "products");
 
 getDocs(collectionRef).then(QuerySnapshot => {
   const products = QuerySnapshot.docs.map(doc => {
     console.log("This is the doc", doc);
    return {id: doc.id, ...doc.data()}
    })
    console.log("This is the products", products);
    setProducts(products);
    }).finally(() => {
      setLoading(false);
    })
  }, [categoryId])
  


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

//Old Code
  /*const productcsCollectionRef =  collection
   */
    /*    if (categoryId) {
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
  }, [categoryId]); */