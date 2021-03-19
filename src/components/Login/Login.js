import React, { useState } from 'react'
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from '../../FireBase.Config';
import './Login.css';
import userEvent from '@testing-library/user-event';


firebase.initializeApp(firebaseConfig);

const Login = () => {

    const [newUser,setNewuser] = useState(false);
    const [user,setUser] = useState({
        isSignedIn: false,
        
        name: '',
        email: '',
        password: '',
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
                error: '',
                success: false
            }
            setUser(signedOutUser)
          })
          .catch((error) => {
            console.log(error);
          });
    }

    const handleBlur = (e) => {
        let isFieldValid = true;
        console.log(e.target.name,e.target.value);
        if(e.target.name === 'email'){
            isFieldValid = /\S+@\S+\.\S+/.test(e.target.value);
            console.log(isFieldValid);
        }
        if(e.target.name === 'password'){
            const isPasswordValid = e.target.value.length > 6;
            const passwordHasNumber = /\d{1}/.test(e.target.value);
            isFieldValid = (passwordHasNumber && isPasswordValid);
        }
        if(isFieldValid){
            const newUserInfo ={...user};
            newUserInfo[e.target.name] = e.target.value;
            setUser(newUserInfo);
        }
    }

    const handleSubmit = (e) => {
        // console.log(user.email,user.password);
        if(newUser && user.email && user.password){
            firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
            .then((res) => {
                const newUserInfo = {...user};
                newUserInfo.error = '';
                newUserInfo.success = true;
                setUser(newUserInfo);
                upDateUserName(user.name)
            })
            .catch((error) => {
                const newUserInfo = {...user};
                newUserInfo.error = error.message;
                newUserInfo.success = false;
              setUser(newUserInfo);
            });
        }

        if(!newUser && user.email && user.password){
            firebase.auth().signInWithEmailAndPassword(user.email, user.password)
  .then((res) => {
    const newUserInfo = {...user};
                newUserInfo.error = '';
                newUserInfo.success = true;
                setUser(newUserInfo);
                console.log('Sign in user info' ,res.user);
    
  })
  .catch((error) => {
    const newUserInfo = {...user};
                newUserInfo.error = error.message;
                newUserInfo.success = false;
              setUser(newUserInfo);
  });
        }
        e.preventDefault();
    }


    const upDateUserName =(name) => {

        var user = firebase.auth().currentUser;

            user.updateProfile({
            displayName:name
            }).then(function() {
            console.log('user name updated successfully')
            }).catch(function(error) {
            console.log(error)
            });

    }

    return (
        <div className="signInMathod">
        <h1>Our Own Authetication</h1>
        <input type="checkbox" onChange={() => setNewuser(!newUser)} name="newUser" id=""/>
        <label htmlFor="newUser">New User Sign Up</label>

        <form action="" onSubmit={handleSubmit}>
        
            {newUser && <input type="text" name="name" onBlur={handleBlur} placeholder="Your Name"/>}
            <br/>
            <input type="text" name="email" onBlur={handleBlur} placeholder="Your Email address" required/>
            <br/>
            <input type="password" name="password" onBlur={handleBlur} placeholder="Your Password" required/>
            <br/>
            <input type="submit" value="submit" />
        </form>
        <p style={{color: 'red'}}>{user.error}</p>
        {
            user.success && <p style={{color: 'green'}}>User {newUser ? 'Created' : 'Logged In'} Successfully</p>
        }



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
