import { auth } from "./Firebase.js";
import { database } from "./Firebase.js";
import { createUserWithEmailAndPassword } from "./Firebase.js";
import { ref, set,push} from "firebase/database";
import {  useDispatch } from "react-redux";
import { SigninAction } from "../redux/actionTypes.js";

// Create a new post reference with an auto-generated id
function WriteNewUser(User){
 
  const dispatch = useDispatch();
  
  
const postListRef = ref(database, 'users');
const newPostRef = push(postListRef);

set(newPostRef, {
  name: User.name || "",
  email: User.email || "",
  phone: User.phone || "",
  password: User.password || "",
  status: User.status || "",
  created_at: `${new Date().getDay()}/${new Date().getMonth()}/${new Date().getFullYear()}`,
    
}).then(dispatch(SigninAction(false))).catch();
}

/*
function writeNewUser(User) {

  push(database, "users/" + {
    name: User.name || "",
    email: User.email || "",
    phone: User.phone || "",
    password: User.password || "",
    status: User.status || "",
    created_at: `${new Date().getDay()}/${new Date().getMonth()}/${new Date().getFullYear()}`,
  })
    .then(() => {
      // Data saved successfully!
    })
    .catch((error) => {
      // The write failed...
    });
}
*/


export { WriteNewUser };
