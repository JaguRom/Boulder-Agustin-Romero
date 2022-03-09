import "./ItemDetailContainer.css";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import { useEffect, useState } from 'react'
import { getItems } from "../ItemArray/ItemArray";
import {getDoc, doc, DocumentReference} from "firebase/firestore";
import {firestoreDb} from "../../Services/Firebase/firebase";

function ItemDetailContainer() {
  //state
  const [product, setProduct] = useState([]);
  //loading
  const [loading, setLoading] = useState(true);
  //params
  const  {productId}  = useParams();



  useEffect(() => {
setLoading(true);

const docRef = doc(firestoreDb, "products", productId);
getDoc(docRef).then(response => {
  const product = {id: response.id , ...response.data()}
  setProduct(product);
}).finally(() => {
  setLoading(false);
})

return (() => {
  setProduct()
})

}, [productId]) // eslint-disable-line

console.log("This is the Firebase product", product);


    /*       getItems(productId).then((product) => {
          setProduct(product);
          console.log(product)
      })
      .catch((error) => {
        console.log(error)
      })
      .finally(() => {
        setLoading(false);
      })
  },[productId]) */

return (
      <div className="centered-flex">
        {loading ? (<h1 className="loading-style">Loading...</h1>
        ) :(
          <>
          <ItemDetail className="individual-items" product={product} />
          </>
        )}
      </div>
    );
  }
  export default ItemDetailContainer;

