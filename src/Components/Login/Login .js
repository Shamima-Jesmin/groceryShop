import React, { useContext, useState } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Form } from 'react-bootstrap';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router';
import firebaseConfig from '../firebase.config';

const Login  = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };

    const provider = new firebase.auth.GoogleAuthProvider();
    if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig);
    } else {
        firebase.app(); // if already initialized, use that one
    }
   const [user, setUser] = useState({
       isSignedIn: false,
       name:'',
       email:''
    })
    const handleGoogleSignIn = () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth()
            .signInWithPopup(provider)
            .then((result) => {
                // console.log(result)
                const { displayName , email} = result.user;
                const signedInUser = {
                isSignedIn:true,
                name:displayName,
                email:email
                }
                setUser(signedInUser)
               setLoggedInUser(signedInUser)
                console.log(signedInUser)
                history.replace (from);
                const user = result.user;
                console.log(user)
            }).catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                var email = error.email;
                var credential = error.credential;

            });
    }


    return (
        <div>
           <button style={{marginLeft:'500px', marginTop:'20px'}} onClick={handleGoogleSignIn}>Sign in with Google</button> 
           {
               user.isSignedIn && <p>Welcome, {user.name}</p>
           } 
        </div>
    );
};

export default Login ;
