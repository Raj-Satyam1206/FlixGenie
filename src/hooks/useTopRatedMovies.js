import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addTopRatedMovies } from "../utils/moviesSlice";
import { useEffect } from "react";


const useTopRatedMovies = () => {
    const dispatch = useDispatch();
    const topRatedMovies = useSelector((state) => state.movies.addTopRatedMovies);


    const getTopRatedMovies = async() => {
        const data = await fetch("https://api.themoviedb.org/3/movie/top_rated?page=1" , API_OPTIONS);
        const json = await data.json();
        // console.log(json);

        dispatch(addTopRatedMovies(json.results));
    }

    useEffect(()=>{
        if(!topRatedMovies)
            getTopRatedMovies();
    },[]);
};

export default useTopRatedMovies;