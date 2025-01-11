import {auth} from "../utils/firebase"; 
import {  onAuthStateChanged , signOut } from "firebase/auth";
import { useSelector, useDispatch  } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { addUser, removeUser } from "../utils/userSlice";
import { useEffect, useRef} from "react";
import { LOGO , SUPPORTED_LANGUAGES, USER_AVATAR} from "../utils/constants";
import { toggleGptSearchView } from "../utils/gptSlice";
import { changeLanguage } from "../utils/configSlice";


const Header = () => {

  const navigate = useNavigate(); 
  const dispatch = useDispatch();
  const location = useLocation();
  const user = useSelector((store) => store.user);
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
  const authStateInitialized = useRef(false);

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

  const handleLanguageChange = (e) => {
    // console.log(e.target.value);
    dispatch(changeLanguage(e.target.value));
  };
  
  // This will be executed only once after the user signs in/ signs up/ signs out 
  // Navigate must happen in the context of the <Router> component 
  // That is , it should be used at a place which is present in the entire program. 
  //That's why we use Header component for using the onAuthStateChanged() API and use the navigate logic
  // useEffect(()=>{
  //   const unsubscribe = onAuthStateChanged(auth, (user) => {
  //     if (user) {
  //       //User is signed In
  //       const {uid , email , displayName } = user;
  //       dispatch(addUser({uid : uid , email : email , displayName : displayName ,}));
  //       console.log("Navigating to /browse");
  //       navigate("/browse");
  //     } 
  //     else {
  //       // User is signed out
  //       dispatch(removeUser());
  //       console.log("Navigating to /");
  //       navigate("/");
  //     }
  //   });

  //     // Unsubscribe when component unmounts
  //     return () => unsubscribe();  
  // } , []);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      // console.log("Auth state changed:", user);

      if (!authStateInitialized.current) {
        authStateInitialized.current = true;
        return; // Skip navigation on initial render
      }

      if (user) {
        // console.log("Navigating to /browse");
        const { uid, email, displayName, photoURL } = user;
        dispatch(addUser({ uid, email, displayName, photoURL }));
        // dispatch(addUser({ uid: user.uid, email: user.email, displayName: user.displayName }));
        if (window.location.pathname !== "/browse") navigate("/browse");
      } else {
        // console.log("Navigating to /");
        dispatch(removeUser());
        if (window.location.pathname !== "/") navigate("/");
      }
    });

    return () => unsubscribe();
  }, [dispatch, navigate]);

  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex flex-col md:flex-row justify-between">
      <img
        className="w-44 mx-auto md:mx-0"
        src={LOGO}
        alt="logo"
      />
      {user && location.pathname === "/browse" && (
        <div className="flex p-2 justify-between">
          {showGptSearch && (
            <select 
              className="p-2 m-2 bg-gray-900 text-white border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-black hover:bg-gray-800"
              onChange={handleLanguageChange}
            >
            {/* <option value="en">English</option>
            <option value="spanish">Spanish</option>
            <option value="hindi">Hindi</option> */}
              {SUPPORTED_LANGUAGES.map((lang) => (
                <option 
                  key={lang.identifier} 
                  value={lang.identifier}
                >  
                  {lang.name}
                </option>
              ))}
            </select>
            )
          }
          <button
            className="py-2 px-4 mx-4 my-2 bg-purple-800 text-white rounded-lg"
            onClick={handleGptSearchClick}
          >
            {showGptSearch ? "HomePage" : "GPT Search"}
          </button>
          <img 
            className="hidden md:block w-12 h-12"
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
