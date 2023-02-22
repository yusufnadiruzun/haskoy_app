import { database } from "./Firebase.js";
import { ref, set, child, get, onValue } from "firebase/database";

// Create a new post reference with an auto-generated id
function WriteNewUser(User) {
  let result = false;

  set(ref(database, "users/" + User.phone), {
    name: User.name || "",
    email: User.email || "",
    phone: User.phone || "",
    password: User.password || "",
    status: User.status || "",
    created_at: `${new Date().getDay()}/${new Date().getMonth()}/${new Date().getFullYear()}`,
  })
    .then(() => {
      result = true;
    })
    .catch((error) => {
      console.log(error);
    });

  return result;
}

function LoginControl(userId, password) {
  

  const dbRef = ref(database);

  get(child(dbRef, `users/${userId}/password/`))
    .then((snapshot) => {
      if (snapshot.exists()) {
        console.log(snapshot.val() == password);
        return true;
      } 
    })
    .catch((error) => {});
  
}

/*
  const db = database;
  const starCountRef = ref(db, "users/" + userId + "/password" + password);
  onValue(starCountRef, (snapshot) => {
    const data = snapshot.val();
    console.log(data);
  });
}
*/

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

export { WriteNewUser, LoginControl };
