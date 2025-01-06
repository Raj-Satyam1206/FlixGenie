import MovieCard from "./MovieCard";

const MovieList = ({title , movies}) => {
    // console.log(movies);
  return ( 
    <div className="px-6">
        <h1 className="text-lg md:text-2xl font-serif py-4 text-white">{title}</h1>
        <div className="flex overflow-x-scroll scrollbar-hide space-x-4 p-4 bg-gray-950">
            <div className="flex">
                {movies?.map((movie) => (
                    <MovieCard key={movie.id} movie={movie} />
                ))}
            </div>
        </div>
    </div>  
  );  
};

export default MovieList;
