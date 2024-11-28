import { IMG_CDN_URL } from "../utils/constants";

const MovieCard = ({posterPath}) => {

    if(!posterPath) return null;
  return (
    <div className="w-36 md:w-48 pr-4 transform transition-all duration-300 group">
        <div className="relative group">
        <img
          alt="Movie Card"
          src={IMG_CDN_URL + posterPath}
          className="w-full h-full object-cover rounded-md transition-transform duration-300 transform group-hover:scale-110 group-hover:shadow-2xl"
        />
    </div>
    </div>
  );
};

export default MovieCard;