const API_KEY = "6d4973a2d0c01fe46093180d1e3091a8";
const BASE_URL = 'https://api.themoviedb.org/3/';


function fetchSearchMovie (searchName) {
  return fetch(`${BASE_URL}search/movie?api_key=${API_KEY}&query=${searchName}&language=en-US&page=1&include_adult=false`
  ).then((response) => {
    if (response.ok) {
      return response.json();
    };
    return Promise.reject(new Error(`Нет фильма с именем `));
  });
};

const apiSearch = {
  fetchSearchMovie,
};

export default apiSearch;