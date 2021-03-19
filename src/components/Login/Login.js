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
    

    const handleSignOut = () => {
        firebase.auth().signOut()
        .then((res) => {
            const signedOutUser = {
                isSignedIn:false, 
                name : '',
                photo: '',
                email : '',
            }
            setUser(signedOutUser)
          })
          .catch((error) => {
            console.log(error);
          });
    }

    const handleBlur = (e) => {
        console.log(e.target.name,e.target.value);
        if(e.target.name === 'email'){
            const isEmailValid = /\S+@\S+\.\S+/.test(e.target.value);
            console.log(isEmailValid);
        }
        if(e.target.name === 'password'){
            const isPasswordValid = e.target.value.length > 6;
            const passwordHasNumber = /\d{1}/.test(e.target.value);
            console.log(passwordHasNumber && isPasswordValid);
        }
    }

    const handleSubmit = () => {

    }


    return (
        <div className="signInMathod">
        <h1>Our Own Authetication</h1>

        <form action="" onSubmit={handleSubmit}>
            <input type="text" name="email" onBlur={handleBlur} placeholder="Your Email address" required/>
            <br/>
            <input type="password" name="password" onBlur={handleBlur} placeholder="Your Password" required/>
            <br/>
            <input type="submit" value="submit" />
        </form>



            {
                user.isSignedIn ? <button className="btn btn-outline-primary"onClick={handleSignOut}>Google Sign Out</button> :
                <button className="btn btn-outline-primary"onClick={handleSignIn}>Google Sign In</button>
            }
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
