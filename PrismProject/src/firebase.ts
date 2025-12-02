// src/firebase.ts
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getStorage } from "firebase/storage";
import {ref, watch} from 'vue';

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

// Reactive user
export const currentUser = ref(auth.currentUser);
export const isAdmin = ref(false);

// Listen for auth changes
onAuthStateChanged(auth, async (user) => {
  currentUser.value = user;

  // If we're logged in as a user...
  if (user) {
    // Fetch admin field from Firestore once
    const docSnap = await getDoc(doc(db, "users", user.uid));

    // Does this user exist in Firestore 'users' db?
    if (docSnap.exists()) {
      isAdmin.value = !!docSnap.data().admin; // Set isAdmin boolean to whether or not this user is an admin
    } else {
      isAdmin.value = false; // If the user does not exist in the db, default to false
    }
  } else {
    isAdmin.value = false; // If we've logged out, should set admin to false regardless
  }
});