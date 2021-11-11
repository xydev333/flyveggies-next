import firebase from 'firebase';
import 'firebase/auth';
import 'firebase/firestore';

// Need to update below config
const config = {
  apiKey: "AIzaSyDv_hX8L_m3ZQHAktg-sh_lDGSBnjHLIfs",
  authDomain: "adddatatest-c8f62.firebaseapp.com",
  projectId: "adddatatest-c8f62",
  storageBucket: "adddatatest-c8f62.appspot.com",
  messagingSenderId: "781440124235",
  appId: "1:781440124235:web:56ccc1cd6ad112a27dd4ce",
  measurementId: "G-LSQCW8SYCF"
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