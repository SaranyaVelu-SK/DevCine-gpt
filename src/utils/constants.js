export const USER_PHOTO_URL = "https://img.icons8.com/parakeet/48/user-male-circle.png";
export const API_GET_OPTIONS_FOR_TMDB = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${import.meta.env.VITE_AUTHORIZATION}`
  }
};

export const TMDB_IMG_CDN_URL = "https://image.tmdb.org/t/p/w780"