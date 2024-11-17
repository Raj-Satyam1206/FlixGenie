import React, { useEffect } from "react";
import Login from "./Login";
import Browse from "./Browse";
import { createBrowserRouter, RouterProvider} from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";

const Body = () => {
  const dispatch = useDispatch();
  // const navigate = useNavigate();

  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
  ]);

  useEffect(()=>{
    onAuthStateChanged(auth, (user) => {
      if (user) {
        //User is signed In
        const {uid , email , displayName } = user;
        dispatch(addUser({uid : uid , email : email , displayName : displayName ,}));
        // navigate("/browse");
      } 
      else {
        // User is signed out
        dispatch(removeUser());
        // navigate("/");
      }
    });
  } , [])

  return (
    <>
      <RouterProvider router={appRouter} />
    </>
  );
};

export default Body;
