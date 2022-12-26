<template>
    <div>
        <div class="container-fluid mb-5 px-0">
            <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-indicators">
                    <button
                        type="button"
                        v-for="(item, index) in BDList"
                        :key="index"
                        data-bs-target="#carouselExampleIndicators"
                        :data-bs-slide-to="index"
                        :class="index === 0 ? 'active' : ''"
                        aria-current="true">
                    </button>
                </div>
                <div class="carousel-inner">
                    <div
                        v-for="(item, index) in BDList"
                        :key="index"
                        class="carousel-item"
                        :class="index === 0 ? 'active' : ''"
                    >
                        <div :style="{
                                backgroundImage: isMobileSize ? 'url(https://image.tmdb.org/t/p/w500' + item.poster_path + ')' : 'url(https://image.tmdb.org/t/p/original' + item.backdrop_path + ')',
                                backgroundSize: 'cover',
                                backgroundPositon: 'center',
                                paddingBottom: isMobileSize ? '600px' : '800px'
                             }"
                            class="d-block w-100"></div>
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        </div>
        <div class="container">
            <LoadingActive
                :Loading="isLoading"
            />
            <div class="row">
                <div class="col-md-3 mb-5 mb-md-0" v-if="!isMobileSize">
                    <AnnualFilter
                        @searchList="searchList"
                        @cleanFilter="cleanFilter"
                    />
                </div>
                <div class="col-md-3 mb-5 mb-md-0" v-else>
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
                                <div class="movie_img">
                                    <div class="movie_vote_average">{{item.vote_average | vote}}</div>
                                    <img :src="[item.poster_path ? 'https://image.tmdb.org/t/p/w500' + item.poster_path : emptyPic1]" class="card-img-top" alt="demo_img">
                                </div>
                                <div class="card-body">
                                    <div class="card-title">{{item.original_title}}</div>
                                </div>
                                <div class="card-footer">
                                    <button
                                        type="button"
                                        class="btn btn-primary more_btn"
                                        :class="{'disabled': !item.overview}"
                                        data-bs-toggle="modal"
                                        data-bs-target="#moviesModal"
                                        @click="openDetail(item)"
                                    >
                                        {{ item.overview ? '詳細資訊' : '無資料內容'}}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <PaginationSelector
                        class="my-5"
                        :totalPages="totalResult"
                        :isResetPagination="isResetPagination"
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
import { getTMDBList, filterTMDBList, changeTMDBList, getMovieImages, getPopularMovies } from '@/assets/js/api';
import PaginationSelector from '@/components/PaginationSelector.vue';
import LoadingActive from '@/components/LoadingActive.vue';
import MoviesModal from '@/components/MoviesModal.vue';
import AnnualFilter from '@/components/AnnualFilter.vue';
import noMoviePic1 from '@/assets/image/no_movie_pic_1.jpg';
import noMoviePic2 from '@/assets/image/no_movie_pic_2.jpg';
import { mapGetters } from 'vuex';

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
            BDList: [],
            search: {
                year: '',
                sortBy: ''
            },
            totalResult: 0,
            emptyPic1: noMoviePic1,
            emptyPic2: noMoviePic2,
            isLoading: false,
            isResetPagination: false
        }
    },
    mounted(){
        this.init()
    },
    computed: {
        ...mapGetters(['isMobileSize'])
    },
    methods: {
        init () {
            this.isLoading = true
            getTMDBList().then((res) => {
                this.moviesData = res.data
                this.moviesList = res.data.results
                this.totalResult = res.data.total_results
                this.isLoading = false
            })
            getPopularMovies().then(res => {
                this.BDList = res.data.results.slice(0,5)
            })
        },
        searchList (filterItem) {
            const data = {
                year: filterItem.year,
                sort: filterItem.sort,
                page: 1
            }

            this.search.year = data.year
            this.search.sortBy = data.sort
            this.search.page = data.page
            this.isLoading = true
            this.isResetPagination = true
            
            filterTMDBList(data).then((res) => {
                this.moviesList = res.data.results
                this.totalResult = res.data.total_results
                this.isLoading = false
                this.isResetPagination = false
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
                this.totalResult = res.data.total_results
                this.isLoading = false
            })
        },
        cleanFilter (data) {
            this.isLoading = true
            this.isResetPagination = true
            this.search.year = data.year;
            this.search.sortBy = data.sort;
            getTMDBList().then((res) => {
                this.moviesData = res.data
                this.moviesList = res.data.results
                this.totalResult = res.data.total_results
                this.isLoading = false
                this.isResetPagination = false
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
                if(result.length) {
                    result.forEach((path) => {
                        imgPath.push('https://image.tmdb.org/t/p/original' + path.file_path)
                    });
                    sliceArr = imgPath.slice(0,2)
                } else {
                    for(let i = 0; i < 2; i ++){
                        imgPath.push(this.emptyPic2)
                    }
                    sliceArr = imgPath
                }
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
.movie_img {
    position: relative;
}
.movie_vote_average {
    width: 50px;
    height: 50px;
    border-radius: 5px;
    background-color: rgb(18, 122, 148);
    color: white;
    font-size: 18px;
    font-weight: 700;
    text-align: center;
    line-height: 50px;
    position: absolute;
    top: 5px;
    right: 5px;
    @media screen and (max-width: 768px) {
        width: 80px;
        height: 80px;
        font-size: 26px;
        line-height: 80px;
    }
}
</style>