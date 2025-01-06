import { useParams } from "react-router-dom"
import MovieTrailer from "./MovieTrailer";
import MovieData from "./MovieData";
import { useEffect} from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { getMoviesData } from "../utils/moviesSlice";
import Header from "./Header";

const MovieDetails = () => {
    const {id} = useParams();
    const dispatch = useDispatch();
    const moviesData = useSelector((store) => store.movies.moviesData);

    // console.log(moviesData);

    // console.log("Movie ID:", id);

    useEffect(()=>{
        // Fetch movie details and dispatch to Redux store
        const fetchMovieDetails = async () => {
            const response = await fetch(`https://api.themoviedb.org/3/movie/${id}?language=en-US` , API_OPTIONS);
    
            const data = await response.json();
            // console.log(data);

            // console.log("Dispatching moviesData:", data);
            dispatch(getMoviesData(data));
            // console.log("After dispatch, moviesData:", moviesData);
        };

        fetchMovieDetails();
    } ,[id , dispatch]);

    // if(!moviesData) return <p>Loading...</p>;
    
  return (
    <div className="bg-black min-h-screen text-white">
        <Header />
        <div className="p-4">
            <MovieTrailer movie_id={id}/>
            <MovieData />
        </div>
    </div>
  );
};

export default MovieDetails;