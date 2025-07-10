import { useSelector } from 'react-redux';
import useMovietrailer from '../hooks/useMovieTrailer';

const VideoBackground = ({ movieId }) => {
  useMovietrailer(movieId);
  const trailerData = useSelector(store =>store?.movies?.movieTrailer);
  if(!trailerData) return; 
  return (
    <div>
      <iframe  src="https://www.youtube.com/embed/lyivgZ074PY?si=ihe3cp2F0h1szTY9" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
    </div>
  )
}

export default VideoBackground