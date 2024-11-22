import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";

const VideoBackground = ({movie_id}) => {

    // const [trailerId , setTrailerId] = useState(null);
    const  trailerVideo = useSelector((store) => store.movies?.trailerVideo);

    useMovieTrailer(movie_id);
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