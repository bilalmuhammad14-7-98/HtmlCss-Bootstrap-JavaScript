import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBLhK2VKXN7Yvmvk_Y46sCRT4Uvh2sLmQE",
  authDomain: "expertizoauthapp.firebaseapp.com",
  projectId: "expertizoauthapp",
  storageBucket: "expertizoauthapp.appspot.com",
  messagingSenderId: "418506531514",
  appId: "1:418506531514:web:6a9ab7e199338066149883",
  measurementId: "G-PVFJPZXGE9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export function register(userInfo) {
  const { email, password } = userInfo;

  console.log(userInfo, "userInfp-----");
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed up
      const user = userCredential.user; //
      alert("Successfully Registered");
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      //
      alert(errorMessage);
    });
}

export function login(userInfo) {
  const { email, password } = userInfo;
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in

      const user = userCredential.user; //
      alert("Logged In Successfully");
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorMessage);
    });
}
