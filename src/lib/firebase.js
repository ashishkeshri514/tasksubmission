import firebase from "firebase";
import "firebase/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyCprlLuRkpC7CMT-iFuDLX9-O9WxKP0bu8",
  authDomain: "task-submit-8f36e.firebaseapp.com",
  projectId: "task-submit-8f36e",
  storageBucket: "task-submit-8f36e.appspot.com",
  messagingSenderId: "53297233899",
  appId: "1:53297233899:web:0cfe6026d0103748e163ae"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();


export { auth, provider, storage };
export default db;
