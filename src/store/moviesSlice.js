import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name:"movies",
    initialState:{
        nowStreamingMovies:null,
        movieTrailer:null
    },
    reducers:{
        addNowStreamingMovies:(state,action)=>{
            state.nowStreamingMovies = action.payload;
        },
        addMovieTrailer:(state,action)=>{
            state.movieTrailer =action.payload;
        }
    }
});
export const {addNowStreamingMovies,addMovieTrailer} = moviesSlice.actions;
export default moviesSlice.reducer;