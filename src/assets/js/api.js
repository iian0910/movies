import axios from 'axios';

// 建立 axios 實體，baseURL 設定為 TMDB 網域位址
const TMDBRequest = axios.create({
    baseURL: 'https://api.themoviedb.org/3'
});

// 設定 get 方法
export const getTMDBList = TMDBRequest.get('/discover/movie?api_key=23efab36e26c5f7cfd28a1b288c6b6bc&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=true&year=2020&with_watch_monetization_types=flatrate')
