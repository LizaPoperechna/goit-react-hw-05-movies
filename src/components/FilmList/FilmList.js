import { useLocation } from 'react-router-dom';
import { List, ItemMovie, MovieLink } from "./FilmList.styled";


export const FilmList = ({ movies }) => {

    const location = useLocation();

    return (<>
                <List>
                    {movies && movies.map(movie => (
                        <ItemMovie key={movie.id}>
                            <MovieLink to={`/movies/${movie.id}`} state={{ from: location }}>{movie.title}</MovieLink>
                        </ItemMovie>))}
                 </List>
    </>

    )
}


