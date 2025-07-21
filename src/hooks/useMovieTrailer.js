import { useDispatch, useSelector } from "react-redux";
import { API_GET_OPTIONS_FOR_TMDB } from "../utils/constants";
import { addMovieTrailer } from "../store/moviesSlice";
import { useEffect } from "react";

const useMovietrailer = (id) => {
  const dispatch = useDispatch();
  const movieTrailer = useSelector(store => store?.movies?.movieTrailer);


  const fetchTrailer = async () => {
    const data = await fetch('https://api.themoviedb.org/3/movie/' + id + '/videos?language=en-US', API_GET_OPTIONS_FOR_TMDB);
    const jsonData = await data.json();

    const filteredVideo = jsonData?.results?.filter((video) => video?.type === "Trailer");
    const trailer = filteredVideo ? filteredVideo[0] : jsonData?.results[0];
    dispatch(addMovieTrailer(trailer));
  }

  useEffect(() => {
    if (!movieTrailer) {
      fetchTrailer();
    }
  }, [])
}

export default useMovietrailer;