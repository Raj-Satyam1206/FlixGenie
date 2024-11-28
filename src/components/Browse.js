
import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import SecondaryContainer from "./SecondaryContainer";
import MainContainer from "./MainContainer";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import GptSearch from "./GptSearch";
import { useSelector } from "react-redux";
import useTrendingShows from "../hooks/useTrendingShows";
const Browse = () => {

  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
  
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();
  useTrendingShows();

  return (
    <div>
        <Header />
        { showGptSearch ? 
          (
            <GptSearch />
          ) : (
          <>
            <MainContainer />
            <SecondaryContainer/>
          </>
          )
        }      
    </div>
  );
};

export default Browse;
