import { useSelector } from 'react-redux';
import { IMG_CDN_URL } from '../utils/constants';

const MovieData = () => {
  const moviesData = useSelector((store) => store.movies.moviesData);

  if (!moviesData) {
    return (
      <p className="text-white text-center text-xl mt-8 animate-pulse">
        Loading movie details...
      </p>
    );
  }

  return (
    <div className="max-w-5xl mx-auto bg-gradient-to-br from-gray-800 via-gray-900 to-black p-8 rounded-lg shadow-2xl transform transition duration-500 hover:scale-105 text-white">
      <h2 className="text-5xl font-extrabold mb-6 text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
        {moviesData.title}
      </h2>
      <div className="flex flex-col md:flex-row gap-10">
        <img
          src={IMG_CDN_URL + moviesData.poster_path}
          alt={`${moviesData.title} Poster`}
          className="w-full md:w-1/3 rounded-lg shadow-lg object-cover hover:opacity-90 transition-opacity duration-300"
        />
        <div className="flex flex-col justify-between">
          <p className="text-gray-300 mb-6 text-lg leading-relaxed">
            {moviesData.overview}
          </p>
          <ul className="text-gray-400 space-y-4 text-md">
            <li className="flex items-center gap-2">
              <strong className="text-gray-200">Release Date:</strong>
              <span className="bg-gray-700 px-3 py-1 rounded-md text-sm">
                {moviesData.release_date}
              </span>
            </li>
            <li className="flex items-center gap-2">
              <strong className="text-gray-200">Genres:</strong>
              <span className="bg-gray-700 px-3 py-1 rounded-md text-sm">
                {moviesData.genres?.map((genre) => genre.name).join(", ")}
              </span>
            </li>
            <li className="flex items-center gap-2">
              <strong className="text-gray-200">Rating:</strong>
              <span className="bg-gray-700 px-3 py-1 rounded-md text-sm">
                {moviesData.vote_average} / 10
              </span>
            </li>
            <li className="flex items-center gap-2">
              <strong className="text-gray-200">Vote Count:</strong>
              <span className="bg-gray-700 px-3 py-1 rounded-md text-sm">
                {moviesData.vote_count}
              </span>
            </li>
            <li className="flex items-center gap-2">
              <strong className="text-gray-200">Language:</strong>
              <span className="bg-gray-700 px-3 py-1 rounded-md text-sm">
                {moviesData.original_language.toUpperCase()}
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MovieData;
