import { useEffect } from "react";
import { API_GET_OPTIONS_FOR_TMDB } from "../utils/constants"
import { useDispatch, useSelector } from "react-redux";
import { addPopularMovies } from "../store/moviesSlice";

const usePopularMovies = () =>{
    const dispatch = useDispatch();
    const popular = useSelector(store =>store?.movies?.popularMovies)
    
    const fetchPopularMovies = async() =>{
        const data = await fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', API_GET_OPTIONS_FOR_TMDB);
        const jsonData = await data.json();
        dispatch(addPopularMovies(jsonData?.results))
    }

    useEffect(()=>{
        if(!popular){
            fetchPopularMovies();
        }        
    },[])
}
export default usePopularMovies;