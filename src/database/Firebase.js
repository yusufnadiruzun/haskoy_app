// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDTSXfHeg2WU4FCHzMgSTYUWb-PxM3qYo8",
  authDomain: "haskoyapp.firebaseapp.com",
  projectId: "haskoyapp",
  storageBucket: "haskoyapp.appspot.com",
  messagingSenderId: "794234092672",
  appId: "1:794234092672:web:238e26db79706b2df5fa65",
  measurementId: "G-79P8H8XFBT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const database = getDatabase(app);



export { auth, createUserWithEmailAndPassword,database };