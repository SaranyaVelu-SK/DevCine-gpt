import { useDispatch } from "react-redux";
import { API_GET_OPTIONS_FOR_TMDB } from "../utils/constants";
import { addNowStreamingMovies } from "../store/moviesSlice";
import { useEffect } from "react";

const useNowStreamingMovies = () => {
    const dispatch = useDispatch();

    const fetchMovies = async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', API_GET_OPTIONS_FOR_TMDB);
        const jsonData = await data.json();
        dispatch(addNowStreamingMovies(jsonData.results))
    }

    useEffect(() => {
        fetchMovies();
    }, [])
}

export default useNowStreamingMovies;