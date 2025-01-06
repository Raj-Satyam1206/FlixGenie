import { Link } from "react-router-dom";
import { IMG_CDN_URL } from "../utils/constants";

const MovieCard = ({movie}) => {
  // const navigate = useNavigate();

    if(!movie?.poster_path) return null;

    // const handleClick = () => {
    //   console.log("Movie Details:", movie);
    //   navigate(`/movie/${movie.id}`); 
    // };

  return (
    <Link to={`/movie/${movie.id}`}> 
      <div className="w-36 md:w-48 pr-4 transform transition-all duration-300 group"
        // onClick={handleClick}
      >
        <div className="relative group">
          <img
          alt="Movie Card"
          src={IMG_CDN_URL + movie.poster_path}
          className="w-full h-full object-cover rounded-md transition-transform duration-300 transform group-hover:scale-110 group-hover:shadow-2xl"
          />
        </div>
      </div>
    </Link>
    
  );
};

export default MovieCard;