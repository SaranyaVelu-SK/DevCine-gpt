import Header from './Header'
import useNowStreamingMovies from '../hooks/useNowStreamingMovies';
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import usePopularMovies from '../hooks/usePopularMovies';
import useTopRatedMovies from '../hooks/useTopRatedMovies';
import useUpcomingMovies from '../hooks/useUpcomingMovies';
import GptContainer from './GptContainer';
import { useSelector } from 'react-redux';

const Browse = () => {
  useNowStreamingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();
  const switchedToGptSearch = useSelector(store => store?.gpt?.toggleToSearch);
  const moveToMainpage = useSelector(store =>store?.gpt?.moveToMainpage)
  return (
    <div className={switchedToGptSearch ?"":'bg-gray-950 '}>
      <Header />
      {
        (switchedToGptSearch && !moveToMainpage) ? <GptContainer /> : <>
          <MainContainer />
          <SecondaryContainer />
        </>
      }
    </div>
  )
}

export default Browse