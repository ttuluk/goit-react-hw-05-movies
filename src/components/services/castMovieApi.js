const API_KEY = "6d4973a2d0c01fe46093180d1e3091a8";
const BASE_URL = 'https://api.themoviedb.org/3/';

function fetchCastMovie(movie_id) {
  return fetch(`${BASE_URL}movie/${movie_id}/credits?api_key=${API_KEY}`
  ).then((response) => {
    if (response.ok) {
      return response.json();
    };
    return Promise.reject(new Error(`Нет фильма с именем `));
  });
};

const apiCasts = {
  fetchCastMovie,
};

export default apiCasts;