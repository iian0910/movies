<template>
    <div>
        <div class="header_bar bar mb-5"></div>
        <div class="container">
            <LoadingActive
                :Loading="isLoading"
            />
            <div class="row">
                <div class="col-md-3 col-12 mb-5 mb-md-0">
                    <div>
                        <div class="filter_contrl mb-3">
                            <div class="title">搜尋年度</div>
                            <input
                                type="text"
                                class="form-control"
                                v-model="search.year"
                                inputmode="numeric"
                                placeholder="搜尋年度"
                                aria-label="搜尋年度"
                                aria-describedby="搜尋年度"
                            >
                        </div>
                        <div class="filter_contrl mb-5">
                            <div class="title">排序方式</div>
                            <select class="form-select" aria-label="排序方式" v-model="search.sortBy">
                                <option value="popularity.desc">【預設】熱門度(高到低)</option>
                                <option value="popularity.asc">熱門度(低到高)</option>
                                <option value="release_date.desc">上映日(近到遠)</option>
                                <option value="release_date.asc">上映日(近到遠)</option>
                                <option value="vote_average.desc">平均票數(高到低)</option>
                                <option value="vote_average.asc">平均票數(低到高)</option>
                                <option value="vote_count.desc">總票數(高到低)</option>
                                <option value="vote_count.asc">總票數(低到高)</option>
                            </select>
                        </div>
                        <div class="filter_btn">
                            <button
                                type="button"
                                class="btn btn-info"
                                style="margin-right: 5px"
                                @click="searchList()"
                            >搜尋</button>
                            <button
                                type="button"
                                class="btn btn-danger"
                                @click="cleanFilter()"
                            >清空</button>
                        </div>
                    </div>
                </div>
                <div class="col-md-9 col-12">
                    <div class="row">
                        <div class="col-md-3 col-12 mb-3" v-for="(item, index) in moviesList" :key="index">
                            <div class="card h-100">
                                <img :src="[item.poster_path ? 'https://image.tmdb.org/t/p/w500' + item.poster_path : emptyPic1]" class="card-img-top" alt="demo_img">
                                <div class="card-body">
                                    <div class="card-title">{{item.original_title}}</div>
                                    <!-- <div class="release_date mb-1">發布日期：{{item.release_date | date}}</div> -->
                                    <!-- <div class="vote_average">平均票數：{{item.vote_average}}</div> -->
                                    <!-- <div class="vote_average">電影語系：{{item.original_language | language}}</div> -->
                                </div>
                                <div class="card-footer">
                                    <button
                                        type="button"
                                        class="btn btn-primary"
                                        data-bs-toggle="modal"
                                        data-bs-target="#moviesModal"
                                        @click="openDetail(item)"
                                    >
                                        詳細資訊
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <PaginationSelector
                        class="my-5"
                        :totalPages="this.moviesData.total_pages"
                        @jumpToPage="changePage"
                        @goPre="changePage"
                        @goNext="changePage"
                    />
                </div>
            </div>
            <!-- modal -->
            <MoviesModal/>
            <!---->
        </div>
        <div class="footer_bar bar mt-5"></div>
    </div>
</template>

<script>
import { getTMDBList, filterTMDBList, changeTMDBList } from '@/assets/js/api';
import PaginationSelector from './PaginationSelector.vue';
import LoadingActive from './LoadingActive.vue';
import MoviesModal from './MoviesModal.vue';
import noMoviePic1 from '@/assets/image/no_movie_pic_1.jpg';
import noMoviePic2 from '@/assets/image/no_movie_pic_2.jpg';

export default {
    components: {
        PaginationSelector,
        LoadingActive,
        MoviesModal
    },
    data() {
        return {
            moviesData: [],
            moviesList: [],
            search: {
                year: '',
                sortBy: ''
            },
            emptyPic1: noMoviePic1,
            emptyPic2: noMoviePic2,
            isLoading: false
        }
    },
    mounted(){
        this.init()
    },
    computed: {},
    methods: {
        init () {
            this.isLoading = true
            getTMDBList().then((res) => {
                this.isLoading = false
                this.moviesData = res.data
                this.moviesList = res.data.results
            })
        },
        searchList () {
            const data = {
                year: this.search.year,
                sort: this.search.sortBy
            }
            this.isLoading = true
            filterTMDBList(data).then((res) => {
                this.isLoading = false
                this.moviesList = res.data.results
            })
        },
        changePage (page) {
            const data = {
                year: this.search.year,
                page: page,
                sort: this.search.sortBy
            }
            this.isLoading = true
            changeTMDBList(data).then((res) => {
                this.isLoading = false
                this.moviesList = res.data.results
            })
        },
        cleanFilter () {
            this.search.year = ''
            this.search.sortBy = ''
            const data = {
                year: this.search.year,
                page: 1,
                sort: this.search.sortBy
            }
            this.isLoading = true
            changeTMDBList(data).then((res) => {
                this.isLoading = false
                this.moviesList = res.data.results
            })
        },
        openDetail (detail) {
            let myModal = document.getElementById('moviesModal')
            let imgPath = detail.backdrop_path ? 'https://image.tmdb.org/t/p/w500' + detail.backdrop_path : this.emptyPic2

            myModal.addEventListener('shown.bs.modal', function () {
                console.log('Get Detail ===>', detail)
                document.getElementById('movie_title').textContent = detail.title
                document.getElementById('movies_desc').textContent = detail.overview
                document.getElementById('movies_poster').setAttribute('src', imgPath)
                document.getElementById('movies_poster').setAttribute('alt', detail.title)
                document.getElementById('movies_vote_average').textContent = `平均票數：${detail.vote_average}`
            })
        }
    }
}
</script>

<style lang="scss" scoped>
@import '@/assets/style/main.scss';
.bar {
    background: rgb(16, 92, 163);
}
.header_bar {
    height: 60px;
}
.footer_bar {
    height: 120px;
}
.card-title {
    font-size: 18px;
    line-height: 1.5;
    font-weight: 700;
    color: #333;
}
.release_date,
.vote_average {
    font-size: 12px;
    line-height: 1.5;
    font-weight: 400;
    color: #666;
}
</style>