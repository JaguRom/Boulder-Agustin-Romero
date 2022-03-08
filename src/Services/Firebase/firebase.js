// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import  {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBh_1yfTFNb6-6hnhwfHImI40ClBvuMY3M",
  authDomain: "boulderapp-a03ae.firebaseapp.com",
  projectId: "boulderapp-a03ae",
  storageBucket: "boulderapp-a03ae.appspot.com",
  messagingSenderId: "300463134534",
  appId: "1:300463134534:web:4fdd642b05cf489eeef747",
  measurementId: "G-19BD1MYL9P"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//Initialize Firestore
export const firestoreDb = getFirestore(app);