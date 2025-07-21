import { useEffect } from "react";
import { API_GET_OPTIONS_FOR_TMDB } from "../utils/constants"
import { useDispatch, useSelector } from "react-redux";
import { addUpcomingMovies } from "../store/moviesSlice";

const useUpcomingMovies = () =>{
    const dispatch = useDispatch();
    const upcoming = useSelector(store =>store?.movies?.upcomingMovies)
    
    const fetchUpcomingMovies = async() =>{
        const data = await fetch('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1', API_GET_OPTIONS_FOR_TMDB);
        const jsonData = await data.json();
        dispatch(addUpcomingMovies(jsonData?.results))
    }

    useEffect(()=>{
        if(!upcoming){
            fetchUpcomingMovies();
        }
    },[])
}
export default useUpcomingMovies;