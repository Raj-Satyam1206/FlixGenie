import { useEffect} from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addTrailerVideo } from "../utils/moviesSlice";

const VideoBackground = ({movie_id}) => {

    // const [trailerId , setTrailerId] = useState(null);
    const dispatch = useDispatch();
    const  trailerVideo = useSelector((store) => store.movies?.trailerVideo);

//fetch trailer videos
    const getMovieVideos = async() => {
        const data = await fetch("https://api.themoviedb.org/3/movie/" + movie_id + "/videos?langauge=en-US" , API_OPTIONS);

        const json = await data.json();
        console.log(json);

        const filterData = json.results.filter((video) => video.type === "Trailer");
        console.log(filterData);
        const trailer = filterData.length ? filterData[0] : json.results[0];
        console.log(trailer);
        dispatch(addTrailerVideo(trailer));
        // setTrailerId(trailer.key);
    }

    useEffect(()=>{
        getMovieVideos();
    } ,[]);

  return (
    <div>
        <iframe 
            width="560" 
            height="315" 
            src={"https://www.youtube.com/embed/" + trailerVideo?.key} 
            title="YouTube video player" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin"
        ></iframe>
    </div>
  )
};

export default VideoBackground;