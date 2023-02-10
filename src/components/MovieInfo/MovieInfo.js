import PropTypes from 'prop-types';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { ContainerMovieData, Box, BoxDataMovie, Poster, Text , ListLink, Link } from './MovieInfo.styled';
import defaultCastPoster from '../../images/no-image-icon-23500.jpg';

const baseImgUrl = 'https://image.tmdb.org/t/p/w500';

export const MovieInfo = ({url, title, overview, score, genres}) => {
    return (
     <ContainerMovieData>
        <Box>
            <Poster src={url ? baseImgUrl + url : defaultCastPoster} alt={title} />

            <BoxDataMovie>
                <h2>{title}</h2>
                
                {score !==0 && <Text>User Score: {Math.round(score * 10)}%</Text>}

                {overview && (<div>
                                <h3>Overview</h3>
                                <Text>{overview}</Text>
                            </div>)}

                {genres && (<div>                    
                                <h4>Genres</h4>
                                <Text>{genres.map(genre => genre.name).join(', ')}</Text>
                            </div>)}

            </BoxDataMovie>
        </Box>
        
        <div>
            <h5>Additional information</h5>
            <ListLink>
                <li>
                    <Link to="cast">Cast</Link>
                </li>
                <li>
                    <Link to="reviews">Reviews</Link>
                </li>
            </ListLink>
            <Suspense fallback={null}>
                <Outlet />
            </Suspense>
        </div>
       </ContainerMovieData> 
    )

}

MovieInfo.propTypes = {
    url: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    overview: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.shape().isRequired).isRequired,
}


//    <Suspense fallback={null}>
// </Suspense>