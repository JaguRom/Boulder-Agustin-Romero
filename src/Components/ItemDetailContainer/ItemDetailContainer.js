import "./ItemDetailContainer.css";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import { useEffect, useState } from 'react'
import {getDoc, doc,} from "firebase/firestore";
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

}, []) //eslint-disable-line

return (
      <div className="item-detail-container centered-flex">
        {loading ? (<h1 className="centered-flex loading-style">Loading...</h1>
        ) :(
          <>
          <ItemDetail className="individual-items" product={product} />
          </>
        )}
      </div>
    );
  }
  export default ItemDetailContainer;

