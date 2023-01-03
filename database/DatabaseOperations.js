import { auth } from "./Firebase.js";
import { database } from "./Firebase.js";
import { createUserWithEmailAndPassword } from "./Firebase.js";
import { ref, set } from "firebase/database";

function writeNewUser(User) {
  console.log(User.name);
  set(ref(database, "users/" + 2), {
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
/*
function writeNewUser(email) {
  // A post entry.
  set(ref(database, 'users/' + 1), {
    id:26,
    email: email +"neden",
    first: "yusufnadir",
    last:"uzun",
    company:"YNDR",
    country:"Turkey",
    created_at:"2021-05-01T00:00:00.000Z"})
  .then(() => {
    // Data saved successfully!
  })
  .catch((error) => {
    // The write failed...
  });
}
*/
export { writeNewUser };
