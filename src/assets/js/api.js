import axios from 'axios';

// 建立 axios 實體，baseURL 設定為 TMDB 網域位址
export const TMDBRequest = axios.create({
    baseURL: process.env.VUE_APP_PATH
});

// 取得年度清單
export async function getTMDBList() {
    const initYear = new Date().getFullYear()
    const URL = `${process.env.VUE_APP_DISCOVER_API}&sort_by=popularity.desc&include_adult=false&include_video=true&primary_release_year=${initYear}&with_watch_monetization_types=flatrate`
    return TMDBRequest.get(URL)
}

// 搜尋條件過濾
export async function filterTMDBList(data) {
    const filter = {
        year: `${data.year ? `&primary_release_year=${data.year}` : ''}`,
        page: `&page=${data.page}`,
        sort: `${data.sort ? `&sort_by=${data.sort}` : ''}`,
    }
    console.log('filter', filter)
    const URL = `${process.env.VUE_APP_DISCOVER_API}&include_adult=false&include_video=true&with_watch_monetization_types=flatrate${filter.year}${filter.sort}${filter.page}`
    return TMDBRequest.get(URL)
}

// 切換頁面
export async function changeTMDBList(data) {
    const filter = {
        year: `${data.year ? `&primary_release_year=${data.year}` : ''}`,
        sort: `${data.sort ? `&sort_by=${data.sort}` : ''}`,
        page: `&page=${data.page}`
    }
    const URL = `${process.env.VUE_APP_DISCOVER_API}&include_adult=false&include_video=true&with_watch_monetization_types=flatrate${filter.sort}${filter.year}${filter.page}`
    return TMDBRequest.get(URL)
}

// 切換頁面
export async function getMovieImages(data) {
    const URL = `/movie/${data.id}/images?api_key=${process.env.VUE_APP_API_KEY}`
    return TMDBRequest.get(URL)
}

// 熱門電影
export async function getPopularMovies() {
    const URL = `/movie/popular?api_key=${process.env.VUE_APP_API_KEY}&page=1`
    return TMDBRequest.get(URL)
}

// 公司列表
export async function getCompanyList(genreIDs) {
    const URL = `/company/${genreIDs}?api_key=${process.env.VUE_APP_API_KEY}`
    return TMDBRequest.get(URL)
}