// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCMorFAhOwnPx2SLd-nfUL9Ub3gM8Osf0Y",
  authDomain: "flixgpt-5ac0a.firebaseapp.com",
  projectId: "flixgpt-5ac0a",
  storageBucket: "flixgpt-5ac0a.firebasestorage.app",
  messagingSenderId: "1080391996164",
  appId: "1:1080391996164:web:efab1bbe0a0cdcea457651",
  measurementId: "G-R7WNBVPHF4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();