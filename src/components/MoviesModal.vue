<template>
    <div>
        <div class="modal fade" id="moviesModal" tabindex="-1" aria-labelledby="movie_title" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="movie_title">Modal title</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div id="carouselExampleControls" class="carousel slide mb-5" data-bs-ride="carousel">
                        <div class="carousel-inner">
                            <div class="carousel-item" :class="{'active' : index === 0}" v-for="(item, index) in 2" :key="index">
                                <img :id="`movies_poster_${index}`" class="w-100" src="" alt="">
                            </div>
                        </div>
                        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Previous</span>
                        </button>
                        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Next</span>
                        </button>
                    </div>
                    <div id="movies_vote_average"></div>
                    <div id="movies_desc" class="my-3"></div>
                    <div class="genre">
                        <div class="row"></div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">關閉</button>
                </div>
                </div>
            </div>
        </div>
    </div>
</template>