import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

// Need to update below config
const config = {
    apiKey: "api_key",
    authDomain: "example_id.firebaseapp.com",
    databaseURL: "database-url.firebaseio.com",
    projectId: "project-id",
    storageBucket: "bucket-id.appspot.com",
    messagingSenderId: "321313132",
    appId: "12313131313323"
};
if (!firebase.apps.length) {
    firebase.initializeApp(config);
}
const auth = firebase.auth();
export {
    auth,
    firebase
};