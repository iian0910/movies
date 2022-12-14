<template>
    <div class="container">
        <div class="row">
            <div class="col-md-3 col-12 mb-5 mb-md-0">
                <div class="filter_contrl mb-3">
                    <div class="title">搜尋年度</div>
                    <input type="text" class="form-control" v-model="search.year" placeholder="搜尋年度" aria-label="搜尋年度" aria-describedby="搜尋年度">
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
                    <button type="button" class="btn btn-info" @click="searchList()">搜尋</button>
                </div>
            </div>
            <div class="col-md-9 col-12">
                <div class="row">
                    <div class="col-md-4 col-12 mb-3" v-for="(item, index) in moviesList" :key="index">
                        <div class="card h-100">
                            <img :src="'https://image.tmdb.org/t/p/w500' + item.backdrop_path" class="card-img-top" alt="demo_img">
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
            }
        }
    },
    mounted(){
        this.init()
    },
    computed: {},
    methods: {
        init () {
            getTMDBList().then((res) => {
                this.moviesData = res.data
                this.moviesList = res.data.results
            })
        },
        searchList () {
            const data = {
                year: this.search.year,
                sort: this.search.sortBy
            }
            filterTMDBList(data).then((res) => {
                this.moviesList = res.data.results
            })
        },
        changePage (page) {
            const data = {
                year: this.search.year,
                page: page,
                sort: this.search.sortBy
            }
            changeTMDBList(data).then((res) => {
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
</style>