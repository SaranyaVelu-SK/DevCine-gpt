import Header from './Header'
import useNowStreamingMovies from '../hooks/useNowStreamingMovies';
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';

const Browse = () => {  
useNowStreamingMovies();
return (
  <div>
    <Header/>
    <MainContainer/>
  </div>
)
}

export default Browse