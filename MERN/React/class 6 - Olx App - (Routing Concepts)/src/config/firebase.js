// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  getDoc,
  doc,
  updateDoc,
} from "firebase/firestore";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
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
export const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);
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

export async function postAdtoDb(ad) {
  try {
    const { title, description, price, thumbnail } = ad;
    const storageRef = ref(storage, `ads/${thumbnail.name}`);
    await uploadBytes(storageRef, thumbnail);

    const url = await getDownloadURL(storageRef);
    await addDoc(collection(db, "ads"), {
      title,
      description,
      thumbnail: url,
      price,
    });
    alert("Ad Posted successfully");
  } catch (e) {
    alert(e.message);
  }
}

export async function getData() {
  try {
    let res = [];
    const querySnapshot = await getDocs(collection(db, "ads"));
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      console.log(doc.id, " => ", doc.data());
      const ad = doc.data();
      ad.id = doc.id;
      res.push(ad);
    });

    console.log(res, "data");

    return res;
  } catch (error) {
    alert(error.message);
  }
}

export async function getDataById(id) {
  try {
    let res;
    const docRef = doc(db, "ads", id);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      console.log("Document data:", docSnap.data());
      return docSnap.data();
    } else {
      // docSnap.data() will be undefined in this case
      console.log("No such document!");
    }
  } catch (error) {
    alert(error.message);
  }
}

export async function getUsers(id) {
  try {
    let res = [];
    const querySnapshot = await getDocs(collection(db, "users"));
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      console.log(doc.id, " => ", doc.data());
      const ad = doc.data();
      ad.id = doc.id;
      res.push(ad);
    });

    console.log(res, "data");

    return res;
  } catch (error) {
    alert(error.message);
  }
}

export async function updateUserData(data) {
  try {
    const { username, email, dob, phoneNo, address, userId } = data;
    const dataRef = doc(db, "users", userId);
    console.log(dataRef, "data-----");
    await updateDoc(dataRef, {
      username,
      email,
      dob,
      phoneNo,
      address,
    });
    alert("Updated successfully");
    console.log(res, "update response");
  } catch (error) {
    alert(error.message);
  }
}
