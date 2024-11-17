import React, { useState , useRef} from 'react';
import Header from './Header';
import { checkValidate } from '../utils/validate';
import {createUserWithEmailAndPassword , signInWithEmailAndPassword , updateProfile} from "firebase/auth";
import {auth} from "../utils/firebase";
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';

const Login = () => {
  
  const [isSignInForm , setIsSignInForm] = useState(true);
  const [errormessage , setErrorMessage] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);


  const handleValidate = () =>{
    //Validate the form data
      const message = checkValidate(name.current.value , email.current.value, password.current.value);
      
      // console.log(name.current.value);
      // console.log(email.current.value);
      // console.log(password.current.value);
      // console.log(message);

      setErrorMessage(message);

      if(message) return;

      if(!isSignInForm){
        //SignUpLogic

          createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
          .then((userCredential) => {
            // Signed up 
            const user = userCredential.user;
            updateProfile(user, {
              displayName: name.current.value,
            }).then(() => {
              // Profile updated!
              const {uid , email , displayName } = auth.currentUser;
              dispatch(addUser({uid : uid , email : email , displayName : displayName}));
              navigate("/browse");
            }).catch((error) => {
              setErrorMessage(error.message);
            }); 
          })

          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setErrorMessage(errorCode + " " + errorMessage);
          });
      }

      else{
        //SignInLogic

          signInWithEmailAndPassword(auth, email.current.value, password.current.value)
          .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            console.log(user);
            navigate("/browse");
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setErrorMessage(errorCode + " " + errorMessage);
          });
      }
  }

  const handleSignIn = () => {
    setIsSignInForm(!isSignInForm);
  };


  return (
    <>
      <Header />
      <div className='absolute'>
          <img 
              src="https://assets.nflxext.com/ffe/siteui/vlv3/03ad76d1-e184-4d99-ae7d-708672fa1ac2/web/IN-en-20241111-TRIFECTA-perspective_149877ab-fcbd-4e4f-a885-8d6174a1ee81_large.jpg" 
              alt="Background Page" 
          />
      </div>

      <form 
          onSubmit={(e) => e.preventDefault()} 
          className=' w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80'
          >

          <h1 className='font-bold text-3xl py-4'>
              {isSignInForm ? "Sign In" : "Sign Up" }
          </h1>

          {
            !isSignInForm && 
                (<input ref={name} type="text" placeholder='Full Name' className='p-4 my-4 w-full bg-gray-700' />) 
          }
          <input
              ref={email} 
              type="text" 
              placeholder='Email Address' 
              className='p-4 my-4 w-full bg-gray-700' 
          />
          <input 
              ref={password}
              type="password" 
              placeholder='Password' 
              className='p-4 my-4 w-full bg-gray-700' 
          />

          <p className='text-red-500 font-bold text-lg py-2'>{errormessage}</p>

          <button 
              className='p-4 my-6 bg-red-700 w-full rounded-lg' 
              onClick = {handleValidate}
            >   
              {isSignInForm ? "Sign In" : "Sign Up" }
          </button>
          <p 
              className='py-4 cursor-pointer' 
              onClick={handleSignIn}>

                {isSignInForm ? "New to Netflix? Sign Up Now !!" : "Already a User? Sign In Now !!"}
          </p>
      </form>
    </>
  )
}

export default Login;