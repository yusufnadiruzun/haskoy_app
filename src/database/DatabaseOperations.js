import { database } from "./Firebase.js";
import { ref, set } from "firebase/database";

// Create a new post reference with an auto-generated id
function WriteNewUser(User) {
  
  let result = true;

  set(ref(database, "users/" + User.phone), {
    name: User.name || "",
    email: User.email || "",
    phone: User.phone || "",
    password: User.password || "",
    status: User.status || "",
    created_at: `${new Date().getDay()}/${new Date().getMonth()}/${new Date().getFullYear()}`,
  })
    .then(() => {
      result = false;
    })
    .catch((error) => {
      console.log(error);
    });

  return result;
}
/*
  set(newPostRef, {
    name: User.name || "",
    email: User.email || "",
    phone: User.phone || "",
    password: User.password || "",
    status: User.status || "",
    created_at: `${new Date().getDay()}/${new Date().getMonth()}/${new Date().getFullYear()}`,
  })
    .then(() => {
      result = false;
    })
    .catch((error) => {
      console.log(error);
    });

  return result;
}


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
