import firebase from 'firebase';
import 'firebase/auth';
import 'firebase/firestore';

// Need to update below config
const config = {
  apiKey: "AIzaSyAaZeR_zKr9rll3P6sTZXg9DAH5agUOCmQ",
  authDomain: "fly-veggies.firebaseapp.com",
  projectId: "fly-veggies",
  storageBucket: "fly-veggies.appspot.com",
  messagingSenderId: "487426968637",
  appId: "1:487426968637:web:ee5c5cec7992672a662e54",
  measurementId: "G-L44508VYG2"
};
if (!firebase.apps.length) {
    firebase.initializeApp(config);
}
const auth = firebase.auth();
const db = firebase.firestore();

export {
    auth,
    db,
    firebase
};