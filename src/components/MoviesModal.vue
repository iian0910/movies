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
                    <img id="movies_poster" class="mb-5 w-100" src="" alt="">
                    <div id="movies_vote_average"></div>
                    <div id="movies_desc" class="mt-3"></div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">關閉</button>
                </div>
                </div>
            </div>
        </div>
    </div>
</template>