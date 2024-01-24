// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { getFirestore, collection, addDoc, getDocs } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCpmSBUcXTeqv_FbQTbq_kiNW4iYW_RclQ",
  authDomain: "olx-project-3c657.firebaseapp.com",
  projectId: "olx-project-3c657",
  storageBucket: "olx-project-3c657.appspot.com",
  messagingSenderId: "72342159991",
  appId: "1:72342159991:web:708c413c3f031195d67c72",
  measurementId: "G-KX57ZE64C8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
// const analytics = getAnalytics(app);

export async function register(userInfo) {
  try {
    const { username, dob, email, password } = userInfo;
    await createUserWithEmailAndPassword(auth, email, password);
    await addDoc(collection(db, "users"), {
      email,
      dob,
      username,
    });
    alert("Successfully Registered");
    return true;
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
