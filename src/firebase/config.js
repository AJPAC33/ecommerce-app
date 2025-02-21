// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB_TGvFgEQWD-DxLKTEKUY66bBIg5An2bs",
  authDomain: "ecommerceapp-7dc8e.firebaseapp.com",
  projectId: "ecommerceapp-7dc8e",
  storageBucket: "ecommerceapp-7dc8e.firebasestorage.app",
  messagingSenderId: "197699449116",
  appId: "1:197699449116:web:8232115b59e52c78fbcad9",
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp);
