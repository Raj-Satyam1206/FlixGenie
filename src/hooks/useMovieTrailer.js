import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { addTrailerVideo } from "../utils/moviesSlice";


const useMovieTrailer = (movie_id) => {
    const dispatch = useDispatch();

    //fetch trailer videos && updating store with trailer video
    const getMovieVideos = async() => {
        const data = await fetch("https://api.themoviedb.org/3/movie/" + movie_id + "/videos?langauge=en-US" , API_OPTIONS);

        const json = await data.json();
        // console.log(json);

        const filterData = json.results.filter((video) => video.type === "Trailer");
        // console.log(filterData);
        const trailer = filterData.length ? filterData[0] : json.results[0];
        // console.log(trailer);
        dispatch(addTrailerVideo(trailer));
        // setTrailerId(trailer.key);
    }

    useEffect(()=>{
        getMovieVideos();
    } ,[]);
};

export default useMovieTrailer;