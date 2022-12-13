<template>
    <div class="container">
        <div class="row">
            <div class="col-3">
                <div class="filter_contrl mb-5">
                    <div class="title">搜尋年度</div>
                    <input type="text" class="form-control" v-model="search.year" placeholder="搜尋年度" aria-label="搜尋年度" aria-describedby="搜尋年度">
                </div>
                <div class="filter_btn">
                    <button type="button" class="btn btn-info" @click="searchList()">搜尋</button>
                </div>
            </div>
            <div class="col-9">
                <div class="row">
                    <div class="col-4 mb-3" v-for="(item, index) in moviesList" :key="index">
                        <div class="card">
                            <img :src="'https://image.tmdb.org/t/p/w500' + item.backdrop_path" class="card-img-top" alt="demo_img">
                            <div class="card-body">
                                <h5 class="card-title">{{item.original_title}}</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    </div>
</template>

<script>
import { getTMDBList, filterTMDBList } from '@/assets/js/api';

export default {
    data() {
        return {
            moviesList: [],
            search: {
                year: ''
            }
        }
    },
    mounted(){
        this.init()
    },
    computed: {},
    methods: {
        init () {
            const data = {
                year: new Date().getFullYear()
            }
            getTMDBList(data).then((res) => {
                this.moviesList = res.data.results
            })
        },
        searchList () {
            const data = {
                year: this.search.year
            }
            filterTMDBList(data).then((res) => {
                this.moviesList = res.data.results
            })
        }
    }
}
</script>

<style lang="scss" scoped>
@import '@/assets/style/main.scss';

</style>