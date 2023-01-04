import { auth } from "./Firebase.js";
import { database } from "./Firebase.js";
import { createUserWithEmailAndPassword } from "./Firebase.js";
import { ref, set,push} from "firebase/database";


// Create a new post reference with an auto-generated id
function writeNewUser(User){
const postListRef = ref(database, 'users');
const newPostRef = push(postListRef);
set(newPostRef, {
  name: User.name || "",
  email: User.email || "",
  phone: User.phone || "",
  password: User.password || "",
  status: User.status || "",
  created_at: `${new Date().getDay()}/${new Date().getMonth()}/${new Date().getFullYear()}`,
    
}).then().catch(err => console.log(err));
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


export { writeNewUser };
