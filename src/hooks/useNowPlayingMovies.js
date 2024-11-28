
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addNowPlayingMovies } from "../utils/moviesSlice";

const useNowPlayingMovies = () => {
  //fetch the data and put it onto the store
  const dispatch = useDispatch();

  //For Memoization
  const nowPlayingMovies = useSelector((store) => store.movies.nowPlayingMovies);

 
  const getNowPlayingMovies = async () => {
    const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1' , API_OPTIONS);

    const json = await data.json();
    // console.log(json.results);
    dispatch(addNowPlayingMovies(json.results));
  };

  

  useEffect(()=>{
    //If the store already has the data, then dont make unnecessary fetch calls
    if(!nowPlayingMovies) 
       getNowPlayingMovies();
  }, []);
};

export default useNowPlayingMovies;
 