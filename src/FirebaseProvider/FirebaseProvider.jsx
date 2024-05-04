
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useState } from "react";
import auth from "../Firebase/Firebase.config";


export const AuthContext=createContext(null)
const FirebaseProvider = ({children}) => {
    const [user,setUser]=useState(null)
    console.log(user)

    // create user
    const createUser=(email,password)=>{
   return createUserWithEmailAndPassword(auth,email,password);
    
    }
    // sign in user
    const signInUser=(email,password)=>{
        return signInWithEmailAndPassword(auth,email,password)
        
    }


    // social singn in

    const googleProvider= new GoogleAuthProvider()

    const googleLogIn=()=>{
       return signInWithPopup(auth,googleProvider)
       .then(result=>{
        console.log(result)
    })
    .catch(error=>{
        console.log(error)
    })
    }

    // github login
    const githubProvider=new GithubAuthProvider()
    const githubLogIn=()=>{
        signInWithPopup(auth,githubProvider)
        .then(result=>{
            console.log(result)
        })
        .catch(error=>{
            console.log(error)
        })
    }

    // log out function
    const logOut=()=>{
        setUser(null)
        signOut(auth);
    }
    // hold the user 
    onAuthStateChanged(auth, (user) => {
        if (user) {
          setUser(user)
        } 
      });

    const AllValue={
        createUser,
        signInUser,
        googleLogIn,
        githubLogIn,
        logOut,
        user,
    }
    return (
        <AuthContext.Provider value={AllValue}>
            {children}
        </AuthContext.Provider>
    );
};

export default FirebaseProvider;