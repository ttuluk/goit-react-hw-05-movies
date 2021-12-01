// https://api.themoviedb.org/3/movie/{movie_id}?api_key=<<api_key>>&language=en-US
const API_KEY = "6d4973a2d0c01fe46093180d1e3091a8";
const BASE_URL = 'https://api.themoviedb.org/3/';

function fetchMovieId (movie_id) {
  return fetch(`${BASE_URL}movie/${movie_id}?api_key=${API_KEY}`
  ).then((response) => {
    if (response.ok) {
      return response.json();
    };
    return Promise.reject(new Error(`Нет фильма с именем `));
  });
};

const apiSearchId = {
  fetchMovieId,
};

export default apiSearchId;