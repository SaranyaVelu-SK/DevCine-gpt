import { useEffect } from "react";
import { API_GET_OPTIONS_FOR_TMDB } from "../utils/constants"
import { useDispatch } from "react-redux";
import { addUpcomingMovies } from "../store/moviesSlice";

const useUpcomingMovies = () =>{
    const dispatch = useDispatch();
    
    const fetchUpcomingMovies = async() =>{
        const data = await fetch('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1', API_GET_OPTIONS_FOR_TMDB);
        const jsonData = await data.json();
        dispatch(addUpcomingMovies(jsonData?.results))
    }

    useEffect(()=>{
        fetchUpcomingMovies();
    },[])
}
export default useUpcomingMovies;