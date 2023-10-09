// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import firebase from 'firebase/compat/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import { getStorage } from "firebase/storage";


// import firebase from "firebase"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBhBwCuLtoHzwVx8dqDjUT3QY62liomkZk",
  authDomain: "disneyplus-clone-511f8.firebaseapp.com",
  projectId: "disneyplus-clone-511f8",
  storageBucket: "disneyplus-clone-511f8.appspot.com",
  messagingSenderId: "291223853796",
  appId: "1:291223853796:web:c4be3f0a2411a7b2d0aaf1"
};

// Initialize Firebase
// const firebaseApp = firebase.initializeApp(firebaseConfig);
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
// const db = firebase.firestore();
// const db = app.firestore();

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
// const provider = new firebase.auth.GoogleAuthProvider();
const provider = new GoogleAuthProvider();
// provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
// provider.setCustomParameters({
//     'login_hint': 'user@example.com'
//   });
// const storage = firebase.storage();
const storage = getStorage(app);
export {auth, storage, provider};
export default db;