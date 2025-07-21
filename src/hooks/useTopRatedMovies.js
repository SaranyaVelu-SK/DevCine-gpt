import { useEffect } from "react";
import { API_GET_OPTIONS_FOR_TMDB } from "../utils/constants"
import { useDispatch, useSelector } from "react-redux";
import { addTopRatedMovies } from "../store/moviesSlice";

const useTopRatedMovies = () =>{
    const dispatch = useDispatch();
    const topRated = useSelector(store => store?.movies?.topRatedMovies)
    
    const fetchTopRatedMovies = async() =>{
        const data = await fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', API_GET_OPTIONS_FOR_TMDB);
        const jsonData = await data.json();
        dispatch(addTopRatedMovies(jsonData?.results))
    }

    useEffect(()=>{
        if(!topRated){
            fetchTopRatedMovies();
        }        
    },[])
}
export default useTopRatedMovies;