const API_KEY = "6d4973a2d0c01fe46093180d1e3091a8";
const BASE_URL = 'https://api.themoviedb.org/3/trending/all/week';
// https://api.themoviedb.org/3/trending/all/week?api_key=<<api_key>>
function fetchMovie () {
  return fetch(
    `${BASE_URL}?api_key=${API_KEY}`
  ).then((response) => {
    if (response.ok) {
      return response.json();
    };
    return Promise.reject(new Error(`Нет изображения с именем `));
  });
};

const api = {
  fetchMovie,
};

export default api;


// 6d4973a2d0c01fe46093180d1e3091a8
// https://api.themoviedb.org/3/movie/550?api_key=6d4973a2d0c01fe46093180d1e3091a8
