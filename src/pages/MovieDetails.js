import { useParams, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { useRef } from "react";
import { getMovieById} from "Api/Api";
import { toast } from 'react-toastify';
import { MovieInfo } from "components/MovieInfo/MovieInfo";
import { ButtonGoBack } from "components/ButtonGoBack/ButtonGoBack";

const MovieDetails = () => {

  const {movieId} = useParams();
  const [movieDetails, setMovieDetails] = useState(null);
  const location = useLocation();
  const ref = useRef(location.state?.from ?? '/movies');


  useEffect(() => {
    const getMovie = async () => {
        try {
            const data = await getMovieById(movieId);
            setMovieDetails(data);
        } catch (error) {
            toast.error('Something went wrong :(. Try again.');
            console.log(error);
        }} 
        getMovie();
    }, [movieId]);

   return (
    <>
      <ButtonGoBack to={ref.current}>Go back</ButtonGoBack>
      {movieDetails && (<MovieInfo 
                            url={movieDetails.poster_path}
                            title={movieDetails.title} 
                            overview={movieDetails.overview}
                            score={movieDetails.vote_average}
                            genres={movieDetails.genres}
      />)}
    </>
   )
}

export default MovieDetails;

