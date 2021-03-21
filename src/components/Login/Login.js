import React, { useContext, useState } from 'react'
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from '../../FireBase.Config';
import './Login.css';
import { FaGoogle } from "react-icons/fa";
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router-dom';


    firebase.initializeApp(firebaseConfig);

const Login = () => {

    const [newUser,setNewuser] = useState(false);
    const [user,setUser] = useState({
        isSignedIn: false,
        
        name: '',
        email: '',
        password: '',
        photo: ''
    });

    const [loggedInUser,setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };


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
            setLoggedInUser(signedInUser);
                history.replace(from);
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
                setLoggedInUser(newUserInfo);
                history.replace(from);
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

        <div className="container signInMathod">
        <div className="row">
            <div className="col-md-4"></div>
            <div className="col-md-4">
            <div className="formDesign shadow p-3 mb-5 bg-body rounded">
            <h2 className="py-3">Login Or Sign Up</h2>
        <input  type="checkbox" className="p-2" onChange={() => setNewuser(!newUser)} name="newUser" id=""/>
        <label htmlFor="newUser"><h6>Create An Account</h6></label>
        <br/>
        <br/>

        <form action="" onSubmit={handleSubmit}>
        
            {newUser && <input style={{border: 'none',outline:'none', background:'none' }} type="text" name="name" onBlur={handleBlur} placeholder="Your Name"/>}
            <br/>
            <br/>
            <input style={{border: 'none',outline:'none', background:'none' }} type="text" className="p-2" name="email" onBlur={handleBlur} placeholder="Your Email address" required/>
            <br/>
            <br/>
            <input style={{border: 'none',outline:'none', background:'none'}} type="password" className="p-2" name="password" onBlur={handleBlur} placeholder="Your Password" required/>
            <br/>
            <br/>
            <input style={{border: 'none',outline:'none', background:'none'}} type="password" name="password" placeholder="Confirm Password" required/>
            <br/>
            <br/>
            <input className="signIn" type="submit" value={newUser ? 'Sign Up' : 'Sign In'} />
        </form>
        
        <p style={{color: 'red'}}>{user.error}</p>
        {
            user.success && <p style={{color: 'green'}}>User {newUser ? 'Created' : 'Logged In'} Successfully</p>
        }



            {
                user.isSignedIn ? <button className="btn btn-outline-primary" onClick={handleSignOut}> <FaGoogle/>Sign Out from Google</button> :
                <button className="btn btn-outline-primary" onClick={handleSignIn}><FaGoogle/> Sign In With Google</button>
            }
            </div>
            </div>
            <div className="col-md-4"></div>
        </div>
        
            {/* {
                
                user.isSignedIn && 
                <div>
                 <p>Welcome, {user.name}</p>
                 <p>email {user.email}</p>
                
                </div>
            } */}
        </div>
    )
}

export default Login
