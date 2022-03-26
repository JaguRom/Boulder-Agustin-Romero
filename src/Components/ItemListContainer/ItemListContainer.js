import "./ItemListContainer.css";
import ItemList from "../ItemList/ItemList";
import { useEffect, useState } from 'react'
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
    return {id: doc.id, ...doc.data()}
    })
    setProducts(products);
    }).finally(() => {
      setLoading(false);
    })
  }, [categoryId])



return (
      <div className="item">
        {loading ? (<h1 className="centered-flex loading-style">Loading...</h1>
        ) :(
          <>
          <div className="centered-flex">
          <h1 className="centered-flex item-list-container-h1">{greeting}</h1>
          </div>
          <ItemList products={products} />
          </>
        )}
      </div>
    );
  }

  export default ItemListContainer;