// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAaZeR_zKr9rll3P6sTZXg9DAH5agUOCmQ",
  authDomain: "fly-veggies.firebaseapp.com",
  projectId: "fly-veggies",
  storageBucket: "fly-veggies.appspot.com",
  messagingSenderId: "487426968637",
  appId: "1:487426968637:web:ee5c5cec7992672a662e54",
  measurementId: "G-L44508VYG2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);