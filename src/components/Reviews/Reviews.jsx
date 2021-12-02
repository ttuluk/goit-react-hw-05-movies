import React, { useState, useEffect } from "react";
import { useParams} from 'react-router-dom';
import reviewsMovieApi from "../services/ReviewsApi";

export default function Reviews() {
    const { movieId } = useParams();
    const [movieReviews, setMovieReviews] = useState(null);
 
    useEffect(() => {
        reviewsMovieApi
            .fetchReviewsMovie(movieId)
            .then((movieElem) => setMovieReviews(movieElem.results))
            .catch((error) => console.log(error));
    }, [movieId]);


        return (
            <>
                {movieReviews && <ul>
                {movieReviews.map((movie) =>{
                    return (
                        <li key={movie.id} >
                            {movie.author}
                            <p>{movie.content}</p>
                        </li>
                    )
                })}
            </ul>}
            </>
        )

}