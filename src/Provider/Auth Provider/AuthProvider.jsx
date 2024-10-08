import { createContext, useEffect, useState } from "react";
import { getAuth,createUserWithEmailAndPassword, onAuthStateChanged ,signInWithEmailAndPassword} from "firebase/auth";
import app from "../Firebase/firebase.config";

export const AuthContext = createContext()
const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [user, setUser]= useState(null)
    const [loading, setLoading]= useState(true)

    const createUser =(email, password)=>{
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const singIn = (email, password)=>{
        return signInWithEmailAndPassword(auth, email, password)
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (currentUser)=>{
            setUser(currentUser)
        })
        return ()=>{
            return unsubscribe()
        }
    },[])

    // console.log(user);

    const authInfo ={
        user,loading,createUser,singIn
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;