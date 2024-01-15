import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { getFirestore, collection, addDoc } from "firebase/firestore";
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
const db = getFirestore(app);

export async function register(userInfo) {
  try {
    const { email, password, age, fullname } = userInfo;
    await createUserWithEmailAndPassword(auth, email, password);
    await addDoc(collection(db, "users"), {
      email,
      age,
      fullname,
    });
    alert("Successfully Registered");
  } catch (error) {
    alert(error.message);
  }
}

export async function login(userInfo) {
  try {
    const { email, password } = userInfo;
    await signInWithEmailAndPassword(auth, email, password);
    alert("Logged In Successfully");
    return true;
  } catch (error) {
    alert(error.message);
    return false;
  }
}
