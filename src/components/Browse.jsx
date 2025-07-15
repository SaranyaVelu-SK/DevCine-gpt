import Header from './Header'
import useNowStreamingMovies from '../hooks/useNowStreamingMovies';
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import usePopularMovies from '../hooks/usePopularMovies';
import useTopRatedMovies from '../hooks/useTopRatedMovies';
import useUpcomingMovies from '../hooks/useUpcomingMovies';

const Browse = () => {  
useNowStreamingMovies();
usePopularMovies();
useTopRatedMovies();
useUpcomingMovies();
return (
  <div className='bg-gray-950 '>
    <Header/>
    <MainContainer/>
    <SecondaryContainer/>
  </div>
)
}

export default Browse