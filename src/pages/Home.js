import { getTrending } from "Api/Api";
import { useState, useEffect } from "react";
import { FilmList } from "components/FilmList/FilmList";
import { toast } from 'react-toastify';



const Home = () => {

  const [movies, setMovies] = useState([]);

    useEffect(() => {
      const getTrendingMovie = async () => {
        try {
          const data = await getTrending();
          setMovies(data.results);
        }
        catch (error) {
          toast.error('Something went wrong :(. Try again.');
          console.log(error);
        }
      }

      getTrendingMovie();
    }, []);
      

    return (<>
               <h1>Trending today</h1>
               <FilmList movies={movies}/>       
            </>
    );
  };
  

  export default Home;

  