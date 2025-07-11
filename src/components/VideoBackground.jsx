import { useSelector } from 'react-redux';
import useMovietrailer from '../hooks/useMovieTrailer';

const VideoBackground = ({ movieId }) => {
  useMovietrailer(movieId);
  const trailerData = useSelector(store =>store?.movies?.movieTrailer);
  if(!trailerData) return; 
  return (
    <div className='w-screen '>
      <iframe className='w-screen  aspect-video ' src={"https://www.youtube.com/embed/"+trailerData?.key+"?&autoplay=1&mute=1"} title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
    </div>
  )
}

export default VideoBackground