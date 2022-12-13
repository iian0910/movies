import axios from 'axios';

// 建立 axios 實體，baseURL 設定為 TMDB 網域位址
export const TMDBRequest = axios.create({
    baseURL: 'https://api.themoviedb.org/3'
});

// 取得年度清單
export async function getTMDBList(data) {
    const URL = `/discover/movie?api_key=23efab36e26c5f7cfd28a1b288c6b6bc&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=true&year=${data.year}&with_watch_monetization_types=flatrate`
    return TMDBRequest.get(URL)
}

// 年度過濾
export async function filterTMDBList(data) {
    const URL = `/discover/movie?api_key=23efab36e26c5f7cfd28a1b288c6b6bc&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=true&year=${data.year}&with_watch_monetization_types=flatrate`
    return TMDBRequest.get(URL)
}