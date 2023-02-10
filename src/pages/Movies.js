import { SearchForm } from "components/SearchForm/SearchForm";
import { FilmList } from "components/FilmList/FilmList";
import { useState, useEffect } from "react";
import { getMovieSearch } from "Api/Api";
import { useSearchParams} from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';


const Movies = () => {

    const [movies, setMovies] = useState([]);
    const [searchParams, setSearchParams] = useSearchParams();
    const movieName = searchParams.get('query');


useEffect(() => {

    if (!movieName) {
        return;
    };

    if (movieName.trim() === '') {
        toast.error('Введіть запит для пошуку');
        return;
      }

    const SearchMovie = async () => {
        try {
            const data = await getMovieSearch(movieName);
            setMovies(data.results);
        }
        catch (error) {
            toast.error('Something went wrong :(. Try again.');
            console.log(error);
        }
    }
    SearchMovie()
} , [movieName]);

console.log(movieName);

const handleSearch = query => {
    setSearchParams({query});
  };

    return ( 
    <>    
        <SearchForm onSubmit={handleSearch}/>
        <FilmList movies={movies}/>
        <ToastContainer autoClose={3000} theme="colored" />
    </>

    )
}

export default Movies;