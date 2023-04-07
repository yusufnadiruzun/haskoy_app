import { database } from "./Firebase.js";
import { ref, set, child, get, onValue } from "firebase/database";

// Create a new post reference with an auto-generated id

async function WriteNewUser(User) {

  const bool = await set(ref(database, "users/" + User.phone), {
    name: User.name || "",
    email: User.email || "",
    phone: User.phone || "",
    password: User.password || "",
    status: User.status || "",
    created_at: `${new Date().getDay()}/${new Date().getMonth()}/${new Date().getFullYear()}`,
  })
    .then(() => {
      console.log("then ici")
      return true;
    })
    .catch((error) => {
      return false;
    });

  return bool;
}

function LoginControl(userId, password) {


  const dbRef = ref(database);

  const bool = get(child(dbRef, `users/${userId}/password/`))
    .then((snapshot) => {
      if (snapshot.exists()) {
        console.log(snapshot.val() == password);
        return true;
      } else {
        return false;
      }
    })
    .catch((error) => { });
  return bool;
}

const GetStudentList = () => {
  return new Promise((resolve, reject) => {
    const star = ref(database, "users/");
    onValue(star, (snapshot) => {
      const data = snapshot.val();
      if (data !== null) {
        const updatedList = Object.values(data).map((student) => student);
        resolve(updatedList);
      } else {
        reject("Something went wrong while fetching student list");
      }
    });
  });
};

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



export { WriteNewUser, LoginControl, GetStudentList };
