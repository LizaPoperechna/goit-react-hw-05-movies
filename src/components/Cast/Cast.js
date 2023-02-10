import { getMovieCastById } from "Api/Api";
import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { toast } from 'react-toastify';
import { CastItem, CastImage, CastList, CastInfo } from "./Cast.styled";
import defaultCastPoster from '../../images/pngegg.png';


//const placeHolder =
 // 'https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png';

const baseImgUrl = 'https://image.tmdb.org/t/p/w500';

    const Cast = () => {
        const [actors, setActors] = useState([]);
        const {movieId} = useParams();
    
        useEffect(() => {
            const getCast = async () => {
            try {
                const data = await getMovieCastById(movieId);
                setActors(data.cast);
                } 
            catch (error) {
                toast.error('Something went wrong :(. Try again.');
                console.log(error);
                }
            };
            getCast();
          }, [movieId]);
    




    return ( <CastList>
                 {actors && actors.map(({id, name, profile_path, character}) => {
                  return (<CastItem key={id}>
                              <CastImage
                                  src={profile_path ? baseImgUrl + profile_path : defaultCastPoster}
                                  alt={name}/>
                              <CastInfo><b>Name:</b> {name}</CastInfo>
                              {character && <CastInfo><b>Character: </b>{character}</CastInfo>}
                           </CastItem>); })} 
                           {actors.length === 0 && <p> Soory, we don't have information about movie cast</p>}
            </CastList>
    )
}

export default Cast;

        

