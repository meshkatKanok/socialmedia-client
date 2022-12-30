import React, { Children, createContext, useEffect, useState } from 'react';
import app from '../Register/firebase.confiq';
import {createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut} from 'firebase/auth'
export const AuthContext=createContext()
const auth=getAuth(app)

const provider = new GoogleAuthProvider();
const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const creatUser=(email,password)=>{
return createUserWithEmailAndPassword(auth,email,password)
    }
    const googlelogin=()=>{
        return signInWithPopup(auth,provider)
    }
    const EmailSignin=(email,password)=>{
        return signInWithEmailAndPassword(auth,email,password)
    }
    useEffect(() => {
        const unScrbscribe = onAuthStateChanged(auth, currentuser => {
            setUser(currentuser)
            
        })
        return () => {
            return unScrbscribe()
        }
    }, [])
    const signout=()=>{
        return signOut(auth)

    }
    const userInfo={
        creatUser,
        googlelogin,
        EmailSignin,
        user,
        signout
    }
    return (
        <div>
            <AuthContext.Provider value={userInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;