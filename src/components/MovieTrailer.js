import React from 'react'
import { useSelector } from 'react-redux';
import useMovieTrailer from '../hooks/useMovieTrailer';

const MovieTrailer = ({movie_id}) => {

    const  trailerVideo = useSelector((store) => store.movies?.trailerVideo);
    useMovieTrailer(movie_id);

    if (!trailerVideo) return <p>No trailer available.</p>;

  return (
    <div className="  py-12 px-6 bg-gradient-to-b from-gray-800 to-black"
    >
     <div className="bg-gradient-to-b from-gray-800 to-gray-900 rounded-lg shadow-2xl overflow-hidden w-full max-w-7xl ml-20"
     >
      <iframe
      className="w-full aspect-video rounded-xl shadow-xl"
      src={
        "https://www.youtube.com/embed/" +
        trailerVideo?.key +
        "?&autoplay=1&mute=1"
      }
      title="YouTube video player"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    ></iframe>
  </div>
</div>

  );
};

export default MovieTrailer;
    


