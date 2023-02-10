import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getMovieReviewsById } from "Api/Api";
import { toast } from 'react-toastify';
import { ReviewsList, Author, ReviewsItem } from "./Reviews.styled";


const Reviews = () => {
    const [reviews, setReviews] = useState([]);
    const {movieId} = useParams();

    useEffect(() => {
        const getReviews = async () => {
        try{
            const data = await getMovieReviewsById(movieId);
            setReviews(data.results);
            } 
        catch (error) {
            toast.error('Something went wrong :(. Try again.');
            console.log(error);
            }
        }
            getReviews();
      }, [movieId]);


    return (<ReviewsList>
        {reviews && reviews.map(({id, author, content}) => {
            return (
                <ReviewsItem key={id}>
                    <p><Author>Author:</Author> {author}</p>
                    <p>{content}</p>
                </ReviewsItem>)
        })}
        {reviews.length === 0 && <p>Sorry. There are no reviews for this movie</p>}
        </ReviewsList>
    )
}

export default Reviews;