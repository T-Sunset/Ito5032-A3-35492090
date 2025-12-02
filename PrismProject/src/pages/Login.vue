<template>
  <div class="container py-5">
    <div class="row">

      <!-- Main Content on the left side (col-8 on desktop) -->
      <div class="col-12 col-lg-8">
        <div class="content-wrapper p-4">

            <!-- Display if the user is not logged in -->
            <div v-if="!currentUser">
                <h1 class="mb-4 text-secondary">Member & Staff Login</h1>

                <!-- Login Form -->
                <form id="loginForm" @submit.prevent="login">
                    <div class="row mb-3">
                        <label for="email" class="form-label">E-Mail:</label>
                        <input type="text" class="form-control" id="email" name="email"
                        @blur="validateEmail(true)"
                        @input="validateEmail(false)"
                        v-model="formData.email"></input>
                        <div v-if="errors.email" class="text-danger">{{ errors.email }}</div><br/>
                    </div>
                    <div class="row mb-3">
                        <label for="password" class="form-label">Password:</label>
                        <input type="password" class="form-control" id="password" name="password"
                        @blur="validatePassword(true)"
                        @input="validatePassword(false)"
                        v-model="formData.password"></input>
                        <div v-if="errors.password" class="text-danger">{{errors.password}}</div><br/>
                    </div>

                    <!-- Submission Buttons -->
                    <div class="text-center">
                        <button type="submit" class="btn btn-primary me-2">Log In</button>
                        <button type="button" class="btn btn-primary me-2" @click="signUp">Sign Up</button>
                        <button type="button" class="btn btn-secondary" @click="clearForm">Clear</button>
                    </div>
                </form>
            </div>

            <!-- Display if the user IS logged in -->
             <div v-else class="text-center">
                <h1 class="mb-4 text-secondary">Greetings, {{ currentUser.email }}</h1><br/>
                <p>You are currently logged in{{ isAdmin ? " as an admin" : "" }}.</p><br/>
                <button class="btn btn-secondary" @click="logOut">Log Out</button>
             </div>
        </div>
      </div>
    </div>
</div>
</template>

<script setup>
// Imports
import {ref} from 'vue';
import {auth, db, currentUser, isAdmin} from '../firebase.ts';
import {createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut} from 'firebase/auth';
import {getFirestore, doc, getDoc, setDoc} from 'firebase/firestore';
import {useRouter} from 'vue-router';

// Use router to redirect
const router = useRouter();

// Form Data
const formData = ref({
    email: '',
    password: ''
});

// Submit Form
const login = async () => {
    //Validate inputs
    validateEmail(true);
    validatePassword(true);

    //If no errors
    if (!errors.value.email && !errors.value.password) {
        // Successful submission!
        // Get our auth and firestore database
        const auth = getAuth();
        const db = getFirestore();

        // Retrieve input values to variables
        const email = formData.value.email;
        const password = formData.value.password;

        // Try to sign in
        try {
            // Run sign-in
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;

            // Load our role from Firestore Database 'users' collection
            const docRef = doc(db, "users", user.uid);
            const docSnap = await getDoc(docRef); //Get doc

            // Does this user exist in the Firestore?
            if (!docSnap.exists()) {
                throw new Error("No role assigned, error! Contact admin.");
            }

            // Set whether or not we are staff / admin.
            const isAdmin = docSnap.data().admin;

            // Redirect, etc.
            router.push('/');

        } catch (err) {
            errors.value.password = err.message;
        }
    }
};
const signUp = async () => {
    validateEmail(true);
    validatePassword(true);
    if (!errors.value.email && !errors.value.password) {
        // Successful submission!
        // Get our auth and firestore database
        const auth = getAuth();
        const db = getFirestore();

        // Retrieve input values to variables
        const email = formData.value.email;
        const password = formData.value.password;

        // Try to Sign Up
        try {
            // Create new user
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;

            // Store role in Firestore as non-admin
            await setDoc(doc(db, "users", user.uid), {
                admin:false
            });

            // Redirect, etc.
            router.push('/');
        } catch (err) {
            errors.value.password = err.message;
        }
    }
}

// Log Out function
const logOut = async () => {
    // Try to log out 
    try {
        // Run log out function 
        await signOut(auth);

        // Reset isAdmin just in case 
        isAdmin.value = false;

        // Redirect to HomePage
        router.push('/');

    } catch (err) {
        console.error("Error logging out:", err);
    }
};

// Clear Form
const clearForm = () => {
    formData.value = {
        email: '',
        password: ''
    };
};

// Holds Errors
const errors = ref({
    email: '',
    password: ''
});

// Validate Email field
const validateEmail = (blur) => {
    const email = formData.value.email;
    const valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    // Check
    if (!valid) {
        if (blur) errors.value.email = "Please enter a valid email address.";
    }
    else {
        errors.value.email = null;
    }
}

//Validate Password Field
const validatePassword = (blur) => {
    const password = formData.value.password;
    const minLength = 8;
    const hasUppercase = /[A-Z]/.test(password);
    const hasLowercase = /[a-z]/.test(password);
    const hasNumber = /\d/.test(password);
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);

    // Checks
    if (password.length < minLength) {
        if (blur) errors.value.password = `Password must be at least ${minLength} characters long.`;
    }
    else if (!hasUppercase) {
        if (blur) errors.value.password = "Password must contain at least one uppercase letter.";
    }
    else if (!hasLowercase) {
        if (blur) errors.value.password = "Password must contain at least one lowercase letter.";
    }
    else if (!hasNumber) {
        if (blur) errors.value.password = "Password must contain at least one number.";
    }
    else if (!hasSpecialChar) {
        if (blur) errors.value.password = "Password must contain at least one special character.";
    }
    else {
        errors.value.password = null;
    }
}
</script>

<style scoped>
    .content-wrapper, 
    .sidebar-wrapper {
        background: #fff;
        border-radius: 10px;
        border: 1px solid #e5e5e5;
        box-shadow: 0 1px 4px rgba(0,0,0,0.08);
    }
</style>

