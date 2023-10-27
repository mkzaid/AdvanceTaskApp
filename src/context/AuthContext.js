import React, {useState, useEffect} from 'react'
import {auth} from '../firebase';
import { createUserWithEmailAndPassword , onAuthStateChanged , signInWithEmailAndPassword, signOut , sendPasswordResetEmail , updateEmail , updatePassword} from 'firebase/auth';



const AuthContext = React.createContext();
export const useAuth = ()=>{
    return React.useContext(AuthContext);
}

export  function AuthProvider({children}) {
    const [currentUser, setCurrentUser] = useState(); 
    const [loading , setLoading]  = useState(true);
    useEffect(()=>{
        onAuthStateChanged(auth, (user)=>{
            setCurrentUser(user);
            setLoading(false)
        })
    },[])
    const signUp =  (email, password) => createUserWithEmailAndPassword(auth, email, password)
    const signIn = (email,password) => signInWithEmailAndPassword(auth, email , password);
    const resetPass = (email)=> sendPasswordResetEmail(auth,email);
    const updateEmailftn = (email)=> updateEmail(currentUser,email);
    const updatePass = (password)=> updatePassword(currentUser,password);
    const signout = ()=> signOut(auth);
    const value = {
        signUp,
        signIn,
        signout,
        resetPass,
        updateEmailftn,
        updatePass,
        currentUser
    }
  return (
    <AuthContext.Provider value = {value} >
          {!loading && children}
    </AuthContext.Provider>
  )
}
