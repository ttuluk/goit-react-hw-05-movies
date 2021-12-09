const API_KEY = '6d4973a2d0c01fe46093180d1e3091a8';
const BASE_URL = 'https://api.themoviedb.org/3/';

function fetchCastMovie(movie_id) {
  return fetch(`${BASE_URL}movie/${movie_id}/credits?api_key=${API_KEY}`).then(
    response => {
      if (response.ok) {
        return response.json();
      }
      return Promise.reject(new Error(`Нет фильма с именем `));
    },
  );
}

function fetchMovieId(movie_id) {
  return fetch(`${BASE_URL}movie/${movie_id}?api_key=${API_KEY}`).then(
    response => {
      if (response.ok) {
        return response.json();
      }
      return Promise.reject(new Error(`Нет фильма с именем `));
    },
  );
}

function fetchMovie() {
  return fetch(`${BASE_URL}trending/all/week?api_key=${API_KEY}`).then(
    response => {
      if (response.ok) {
        return response.json();
      }
      return Promise.reject(new Error(`Нет изображения с именем `));
    },
  );
}

function fetchSearchMovie(searchName) {
  return fetch(
    `${BASE_URL}search/movie?api_key=${API_KEY}&query=${searchName}&language=en-US&page=1&include_adult=false`,
  ).then(response => {
    if (response.ok) {
      return response.json();
    }
    return Promise.reject(new Error(`Нет фильма с именем `));
  });
}

function fetchReviewsMovie(movie_id) {
  return fetch(
    `${BASE_URL}movie/${movie_id}/reviews?api_key=${API_KEY}&page=1`,
  ).then(response => {
    if (response.ok) {
      return response.json();
    }
    return Promise.reject(new Error(`Нет фильма с именем `));
  });
}

export const apiCasts = {
  fetchCastMovie,
};

export const apiSearchId = {
  fetchMovieId,
};

export const apiMovie = {
  fetchMovie,
};

export const apiSearch = {
  fetchSearchMovie,
};

export const apiReviews = {
  fetchReviewsMovie,
};
