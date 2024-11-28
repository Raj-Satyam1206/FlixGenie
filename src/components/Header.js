import {auth} from "../utils/firebase"; 
import {  onAuthStateChanged , signOut } from "firebase/auth";
import { useSelector, useDispatch  } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addUser, removeUser } from "../utils/userSlice";
import { useEffect} from "react";
import { LOGO , SUPPORTED_LANGUAGES, USER_AVATAR} from "../utils/constants";
import { toggleGptSearchView } from "../utils/gptSlice";
import { changeLanguage } from "../utils/configSlice";


const Header = () => {

  const navigate = useNavigate(); 
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);

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
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex flex-col md:flex-row justify-between">
      <img
        className="w-44 mx-auto md:mx-0"
        src={LOGO}
        alt="logo"
      />
      {user && (
        <div className="flex p-2 justify-between">
          {showGptSearch && (
            <select 
              className="p-2 m-2 bg-gray-900 text-white"
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
