import React, { useContext, useState, useEffect } from "react"
import { auth, firebase } from "../firebase/index"
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
  const db = firebase.firestore();

  function signup(email, password, fname, lname) {
    return auth.createUserWithEmailAndPassword(email, password)
            .then((userCredential) => {
              Router.push('/login');
              Alert('success', 'Successfully Registered!')
              auth.signOut();
            })
            .catch(error => {
              console.log(error.code)
              switch(error.code) {
                case 'auth/email-already-in-use': 
                  Alert('error', 'Email Already Exist')
                  break
                case 'auth/weak-password':
                  Alert('warning', 'Password is too weak')
                  break
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