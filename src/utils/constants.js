export const USER_PHOTO_URL = "https://img.icons8.com/ios-glyphs/30/FFFFFF/user-male-circle.png";
export const API_GET_OPTIONS_FOR_TMDB = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${import.meta.env.VITE_AUTHORIZATION}`
  }
};

export const TMDB_IMG_CDN_URL = "https://image.tmdb.org/t/p/w780";
export const SUPPORTED_LANGUAGES = [{identifier:"en",name:"English"},{identifier:'tamil',name:"Tamil"},{identifier:'french',name:"French"}]