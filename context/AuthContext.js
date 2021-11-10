import React, { useContext, useState, useEffect } from "react"
import { auth, db } from "../firebase/index"
import "react-toastify/dist/ReactToastify.min.css";
import Router from 'next/router';
import Alert from '../components/Alert/Alert'

const AuthContext = React.createContext()

export function useAuth() {
  return useContext(AuthContext)
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState()
  const [loading, setLoading] = useState(true)

  function signup(email, password) {
    return auth.createUserWithEmailAndPassword(email, password, firstname, lastname)
            .then((userCredential) => {
              const user = userCredential.user;
              await db.collection("users").add({
                uid: user.uid,
                fname: firstname,
                lname: lastname,
              })
              Router.push('/login');
              Alert('success', 'Verification Email Sent!')
              auth.signOut();
            })
            .catch(error => {
              console.log(error.code)
              switch(error.code) {
                case 'auth/email-already-in-use': 
                  Alert('error', 'Email Already Exist')
                case 'auth/weak-password':
                  Alert('warning', 'Password is too weak')
              } 
            });
  }

  function login(email, password) {
    return auth.signInWithEmailAndPassword(email, password)
  }

  function logout() {
    return auth.signOut()
  }

  function resetPassword(email) {
    return auth.sendPasswordResetEmail(email)
  }

  function updateEmail(email) {
    return currentUser.updateEmail(email)
  }

  function updatePassword(password) {
    return currentUser.updatePassword(password)
  }

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      setCurrentUser(user)
      setLoading(false)
    })

    return unsubscribe
  }, [])

  const value = {
    currentUser,
    login,
    signup,
    logout,
    resetPassword,
    updateEmail,
    updatePassword
  }

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  )
}