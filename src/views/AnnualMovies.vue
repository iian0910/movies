<template>
    <div>
        <div class="header_bar bar mb-5"></div>
        <div class="container">
            <LoadingActive
                :Loading="isLoading"
            />
            <div class="row">
                <div class="col-md-3 mb-5 mb-md-0 desktop-divice">
                    <AnnualFilter
                        @searchList="searchList"
                        @cleanFilter="cleanFilter"
                    />
                </div>
                <div class="col-md-3 mb-5 mb-md-0 mobile-divice">
                    <div class="accordion" id="annualMoviesFilter">
                        <div class="accordion-item">
                            <h2 class="accordion-header" id="headingOne">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                    年度好片條件篩選
                                </button>
                            </h2>
                            <div id="collapseOne" class="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#annualMoviesFilter">
                                <div class="accordion-body">
                                    <AnnualFilter
                                        @searchList="searchList"
                                        @cleanFilter="cleanFilter"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-9 col-12">
                    <h3 class="mb-3">年度影片</h3>
                    <div class="row">
                        <div class="col-md-3 col-12 mb-3" v-for="(item, index) in moviesList" :key="index">
                            <div class="card h-100">
                                <img :src="[item.poster_path ? 'https://image.tmdb.org/t/p/w500' + item.poster_path : emptyPic1]" class="card-img-top" alt="demo_img">
                                <div class="card-body">
                                    <div class="card-title">{{item.original_title}}</div>
                                </div>
                                <div class="card-footer">
                                    <button
                                        type="button"
                                        class="btn btn-primary more_btn"
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
                        :totalPages="this.moviesData.total_results"
                        :currentPage="currentPage"
                        @change="changePage"
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
import { getTMDBList, filterTMDBList, changeTMDBList, getMovieImages } from '@/assets/js/api';
import PaginationSelector from '@/components/PaginationSelector.vue';
import LoadingActive from '@/components/LoadingActive.vue';
import MoviesModal from '@/components/MoviesModal.vue';
import AnnualFilter from '@/components/AnnualFilter.vue';
import noMoviePic1 from '@/assets/image/no_movie_pic_1.jpg';
import noMoviePic2 from '@/assets/image/no_movie_pic_2.jpg';

export default {
    components: {
        PaginationSelector,
        LoadingActive,
        MoviesModal,
        AnnualFilter
    },
    data() {
        return {
            moviesData: [],
            moviesList: [],
            search: {
                year: '',
                sortBy: ''
            },
            currentPage: 0,
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
                this.moviesData = res.data
                this.moviesList = res.data.results
                this.isLoading = false
            })
        },
        searchList (filterItem) {
            this.search.year = filterItem.year
            this.search.sortBy = filterItem.sort
            this.search.page = filterItem.page
            
            const data = {
                year: filterItem.year,
                page: filterItem.page,
                sort: filterItem.sort
            }
            this.currentPage = data.page
            this.isLoading = true
            filterTMDBList(data).then((res) => {
                this.moviesList = res.data.results
                this.isLoading = false
            })
            
        },
        changePage (page) {
            const data = {
                year: this.search.year ? this.search.year : new Date().getFullYear(),
                page: page,
                sort: this.search.sortBy ? this.search.sortBy : ''
            }
            this.isLoading = true
            changeTMDBList(data).then((res) => {
                this.moviesList = res.data.results
                this.isLoading = false
            })
        },
        cleanFilter (data) {
            this.isLoading = true
            this.currentPage = data.page
            changeTMDBList(data).then((res) => {
                this.moviesList = res.data.results
                this.isLoading = false
            })
        },
        openDetail (detail) {
            let myModal = document.getElementById('moviesModal')
            let imgPath = []
            let sliceArr = []
            const data = {
                id: detail.id
            }
            getMovieImages(data).then((res) => {
                const result = res.data.backdrops
                result.forEach((path) => {
                    path.file_path ? imgPath.push('https://image.tmdb.org/t/p/original' + path.file_path) : imgPath.push(this.emptyPic2)
                });
                sliceArr = imgPath.slice(0,2)
            })

            myModal.addEventListener('shown.bs.modal', function () {
                document.getElementById('movie_title').textContent = detail.original_title
                document.getElementById('movies_desc').textContent = detail.overview
                document.getElementById('movies_vote_average').textContent = `平均票數：${detail.vote_average}`
                sliceArr.forEach((item, index) => {
                    document.getElementById(`movies_poster_${index}`).setAttribute('src', item)
                    document.getElementById(`movies_poster_${index}`).setAttribute('alt', detail.original_title)
                })
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
.search_btn {
    padding: 5px 20px;
    color: white;
}
.clean_btn {
    padding: 5px 20px;
    background-color: transparent;
    border: 1px solid #dc3545;
    color: #dc3545;
}
.more_btn {
    padding: 5px 20px;
    width: 100%;
    background-color: transparent;
    border: 1px solid #0d6efd;
    color: #0d6efd;
}
.card {
    border: none;
    box-shadow: 0px 0px 15px 5px rgb(0 0 0 / 15%);
}
.card-footer {
    background-color: transparent;
    border-top: 0;
}
</style>