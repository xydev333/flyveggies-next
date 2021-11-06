import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// Need to update below config
const config = {
    apiKey: "AIzaSyAaZeR_zKr9rll3P6sTZXg9DAH5agUOCmQ",
    authDomain: "fly-veggies.firebaseapp.com",
    databaseURL: "gs://fly-veggies.appspot.com",
    projectId: "fly-veggies",
    storageBucket: "fly-veggies.appspot.com",
    messagingSenderId: "487426968637",
    appId: "1:487426968637:web:ee5c5cec7992672a662e54"
};
if (!firebase.apps.length) {
    firebase.initializeApp(config);
    
    ifrbase.auth.Auth.Persistence.LOCAL;
    
    $(btn-login).click(function()
    {
        var email = $("#email").val();
        var password = $("#password").val();
        
        if(email != ""  && password!= "")
        {
            var result = firebase.auth().signInWithEmailAndPassword(email, password);
            
            result.catch(function(error)
            {
                var errorCode = error.code;
                var errorMessage = error.message;
                
                console.log(errorCode);
                console.log(errorMessage);

                window.alert("Message: " + errorMessage);
            });
        }
        else
        {
            window.alert("form is incomplete. please fill out all fields.");
        }
    });
    
}
const auth = firebase.auth();
export {
    auth,
    firebase
}