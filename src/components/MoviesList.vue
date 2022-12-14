<template>
    <div class="container">
        <LoadingPlugin :active.sync="isLoading">
            <div class="loadingio-spinner-spin-31byv00p8fp">
                <div class="ldio-wz3lcnixa6">
                    <div><div></div></div>
                    <div><div></div></div>
                    <div><div></div></div>
                    <div><div></div></div>
                    <div><div></div></div>
                    <div><div></div></div>
                    <div><div></div></div>
                    <div><div></div></div>
                </div>
            </div>
        </LoadingPlugin>
        <div class="row">
            <div class="col-md-3 col-12 mb-5 mb-md-0">
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
            <div class="col-md-9 col-12">
                <div class="row">
                    <div class="col-md-4 col-12 mb-3" v-for="(item, index) in moviesList" :key="index">
                        <div class="card h-100">
                            <img :src="[item.backdrop_path ? 'https://image.tmdb.org/t/p/w500' + item.backdrop_path : emptyPic]" class="card-img-top" alt="demo_img">
                            <div class="card-body">
                                <div class="card-title">{{item.original_title}}</div>
                                <div class="release_date mb-1">上映日期：{{item.release_date | date}}</div>
                                <div class="vote_average">平均票數：{{item.vote_average}}</div>
                                <div class="vote_average">電影語系：{{item.original_language | language}}</div>
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
        
    </div>
</template>

<script>
import { getTMDBList, filterTMDBList, changeTMDBList } from '@/assets/js/api';
import PaginationSelector from './PaginationSelector.vue';
import noMoviePic from '@/assets/image/no_movie_pic.jpg';

export default {
    components: {
        PaginationSelector
    },
    data() {
        return {
            moviesData: [],
            moviesList: [],
            search: {
                year: '',
                sortBy: ''
            },
            emptyPic: noMoviePic,
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
        }
    }
}
</script>

<style lang="scss" scoped>
@import '@/assets/style/main.scss';
.card-title {
    font-size: 22px;
    line-height: 1.5;
    font-weight: 500;
    color: #333;
}
.release_date,
.vote_average {
    font-size: 12px;
    line-height: 1.5;
    font-weight: 400;
    color: #666;
}
@keyframes ldio-wz3lcnixa6 {
  0% {
    opacity: 1;
    backface-visibility: hidden;
    transform: translateZ(0) scale(1.5,1.5);
  } 100% {
    opacity: 0;
    backface-visibility: hidden;
    transform: translateZ(0) scale(1,1);
  }
}
.ldio-wz3lcnixa6 div > div {
  position: absolute;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: #1d3f72;
  animation: ldio-wz3lcnixa6 1s linear infinite;
}.ldio-wz3lcnixa6 div:nth-child(1) > div {
  left: 148px;
  top: 88px;
  animation-delay: -0.875s;
}
.ldio-wz3lcnixa6 > div:nth-child(1) {
  transform: rotate(0deg);
  transform-origin: 160px 100px;
}.ldio-wz3lcnixa6 div:nth-child(2) > div {
  left: 130px;
  top: 130px;
  animation-delay: -0.75s;
}
.ldio-wz3lcnixa6 > div:nth-child(2) {
  transform: rotate(45deg);
  transform-origin: 142px 142px;
}.ldio-wz3lcnixa6 div:nth-child(3) > div {
  left: 88px;
  top: 148px;
  animation-delay: -0.625s;
}
.ldio-wz3lcnixa6 > div:nth-child(3) {
  transform: rotate(90deg);
  transform-origin: 100px 160px;
}.ldio-wz3lcnixa6 div:nth-child(4) > div {
  left: 46px;
  top: 130px;
  animation-delay: -0.5s;
}
.ldio-wz3lcnixa6 > div:nth-child(4) {
  transform: rotate(135deg);
  transform-origin: 58px 142px;
}.ldio-wz3lcnixa6 div:nth-child(5) > div {
  left: 28px;
  top: 88px;
  animation-delay: -0.375s;
}
.ldio-wz3lcnixa6 > div:nth-child(5) {
  transform: rotate(180deg);
  transform-origin: 40px 100px;
}.ldio-wz3lcnixa6 div:nth-child(6) > div {
  left: 46px;
  top: 46px;
  animation-delay: -0.25s;
}
.ldio-wz3lcnixa6 > div:nth-child(6) {
  transform: rotate(225deg);
  transform-origin: 58px 58px;
}.ldio-wz3lcnixa6 div:nth-child(7) > div {
  left: 88px;
  top: 28px;
  animation-delay: -0.125s;
}
.ldio-wz3lcnixa6 > div:nth-child(7) {
  transform: rotate(270deg);
  transform-origin: 100px 40px;
}.ldio-wz3lcnixa6 div:nth-child(8) > div {
  left: 130px;
  top: 46px;
  animation-delay: 0s;
}
.ldio-wz3lcnixa6 > div:nth-child(8) {
  transform: rotate(315deg);
  transform-origin: 142px 58px;
}
.loadingio-spinner-spin-31byv00p8fp {
  width: 200px;
  height: 200px;
  display: inline-block;
  overflow: hidden;
  background: transparent;
}
.ldio-wz3lcnixa6 {
  width: 100%;
  height: 100%;
  position: relative;
  transform: translateZ(0) scale(1);
  backface-visibility: hidden;
  transform-origin: 0 0; /* see note above */
}
.ldio-wz3lcnixa6 div { box-sizing: content-box; }
/* generated by https://loading.io/ */
</style>