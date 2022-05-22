// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCNM8t5FoQpGKOtKLFHBYvwydUh-0_iV-c",
    authDomain: "shakils-hardware.firebaseapp.com",
    projectId: "shakils-hardware",
    storageBucket: "shakils-hardware.appspot.com",
    messagingSenderId: "944852775655",
    appId: "1:944852775655:web:828ea550af5bee49f06842"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;