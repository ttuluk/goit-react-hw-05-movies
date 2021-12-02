const API_KEY = "6d4973a2d0c01fe46093180d1e3091a8";
const BASE_URL = 'https://api.themoviedb.org/3/';

function fetchReviewsMovie(movie_id) {
  return fetch(`${BASE_URL}movie/${movie_id}/reviews?api_key=${API_KEY}&page=1`
  ).then((response) => {
    if (response.ok) {
      return response.json();
    };
    return Promise.reject(new Error(`Нет фильма с именем `));
  });
};

const apiReviews = {
  fetchReviewsMovie,
};

export default apiReviews;