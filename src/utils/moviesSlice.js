import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name : "movies",
    initialState : {
        nowPlayingMovies : null,
        trailerVideo : null,
        popularMovies: null,
        topRatedMovies : null,
        upcomingMovies : null,
        trendingShows : null,
        moviesData : null,
    },
    reducers : {
        addNowPlayingMovies : (state , action) => {
            state.nowPlayingMovies = action.payload;
        },
        addTrailerVideo : (state, action) => {
            state.trailerVideo = action.payload;
        },
        addPopularMovies : (state, action) => {
            state.popularMovies = action.payload;
        }, 
        addTopRatedMovies : (state, action) => {
            state.topRatedMovies = action.payload;
        },
        addUpcomingMovies : (state, action) => {
            state.upcomingMovies = action.payload;
        },
        addTrendingShows : (state , action) => {
            state.trendingShows = action.payload;
        },
        getMoviesData : (state, action) => {
            // console.log("Dispatching moviesData:", action.payload);
            state.moviesData = action.payload;
        },
    },
}); 
export const {addNowPlayingMovies , addTrailerVideo , addPopularMovies, addTopRatedMovies, addUpcomingMovies , addTrendingShows , getMoviesData} = moviesSlice.actions;

export default moviesSlice.reducer;

