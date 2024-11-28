import { useDispatch, useSelector } from "react-redux";
import { addTrendingShows } from "../utils/moviesSlice";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";

const useTrendingShows = () => {
    const dispatch = useDispatch();
    const trendingShows = useSelector((store) => store.movies.addTrendingShows);


    const getTrendingShows = async() => {
        const data = await fetch("https://api.themoviedb.org/3/trending/tv/day?language=en-US" , API_OPTIONS);
        const json = await data.json();

        console.log(json.results);

        dispatch(addTrendingShows(json.results));
    };

    useEffect(()=>{
        if(!trendingShows)
            getTrendingShows();
    } ,[]);
};

export default useTrendingShows;