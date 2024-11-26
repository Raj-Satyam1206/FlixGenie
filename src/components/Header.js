import {auth} from "../utils/firebase"; 
import {  onAuthStateChanged , signOut } from "firebase/auth";
import { useSelector, useDispatch  } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addUser, removeUser } from "../utils/userSlice";
import { useEffect} from "react";
import { LOGO , USER_AVATAR} from "../utils/constants";
import { toggleGptSearchView } from "../utils/gptSlice";


const Header = () => {

  const navigate = useNavigate(); 
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);

  const handleSignOut = () =>{
    signOut(auth).then(() => {
    }).catch((error) => {
      // An error happened.
      navigate("/error");
    });
  };

  const handleGptSearchClick = () => {
    //Toggle GPT Search
    dispatch(toggleGptSearchView());
  }
  
  useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        //User is signed In
        const {uid , email , displayName } = user;
        dispatch(addUser({uid : uid , email : email , displayName : displayName ,}));
        navigate("/browse");
      } 
      else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });

      // Unsubscribe when component unmounts
      return () => unsubscribe();  
  } , []);

  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
      <img
        className="w-44"
        src={LOGO}
        alt="logo"
      />
      {user && (
        <div className="flex p-2">
          <button
            className="py-2 px-4 mx-4 my-2 bg-purple-800 text-white rounded-lg"
            onClick={handleGptSearchClick}
          >
            GPT Search
          </button>
          <img 
            className="w-12 h-12"
            alt="usericon" 
            src= {USER_AVATAR}
            // src={user?.photoURL}
          />
          <button onClick ={handleSignOut} className="font-bold text-white">(Sign Out)</button>
      </div>
      )}
      
    </div>
  );
};

export default Header;
