// src/firebase.ts
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBhJKT0wSfVc6dCMb3S8EHX9vjhf9hQ4PE",
  authDomain: "prismprojecta3.firebaseapp.com",
  projectId: "prismprojecta3",
  storageBucket: "prismprojecta3.firebasestorage.app",
  messagingSenderId: "430612507450",
  appId: "1:430612507450:web:ae4609f95d104d72947e03"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Exports
export const auth = getAuth(app)
export const db = getFirestore(app)
export const storage = getStorage(app)