import React, { useState } from 'react'
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from '../../FireBase.Config';
import './Login.css';


firebase.initializeApp(firebaseConfig);

const Login = () => {

    const [user,setUser] = useState({
        isSignedIn: false,
        name: '',
        email: '',
        photo: ''
    })

    const provider = new firebase.auth.GoogleAuthProvider();

    const handleSignIn = () => {
        firebase.auth().signInWithPopup(provider)
        .then((res) =>{
            const{displayName,photoURL,email} = res.user
            const signedInUser ={
                isSignedIn: true,
                name:displayName,
                email:email,
                photo:photoURL
            }
            setUser(signedInUser);
            console.log(res);
        })
        .catch((err)=>{
            console.log(err);
            console.log(err.message);
        })
    }

    return (
        <div className="signInMathod">
            <button onClick={handleSignIn}>Sign In</button>
            {
                
                user.isSignedIn && 
                <div>
                 <p>Welcome, {user.name}</p>
                 <p>email {user.email}</p>
                
                </div>
            }
        </div>
    )
}

export default Login
