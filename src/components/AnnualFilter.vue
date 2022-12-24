<template>
    <div class="filter_group">
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
                <option value="release_date.asc">上映日(遠到近)</option>
                <option value="vote_average.desc">平均票數(高到低)</option>
                <option value="vote_average.asc">平均票數(低到高)</option>
                <option value="vote_count.desc">總票數(高到低)</option>
                <option value="vote_count.asc">總票數(低到高)</option>
            </select>
        </div>
        <div class="filter_btn">
            <button
                type="button"
                class="btn btn-info search_btn"
                style="margin-right: 5px"
                @click="searchList()"
            >搜尋</button>
            <button
                type="button"
                class="btn btn-danger clean_btn"
                @click="cleanFilter()"
            >清空</button>
        </div>
    </div>
</template>

<script>
export default {
    data () {
        return {
            search: {
                year: '',
                sortBy: ''
            },
        }
    },
    methods: {
        searchList() {
            const data = {
                year: this.search.year ? this.search.year : new Date().getFullYear(),
                sort: this.search.sortBy ? this.search.sortBy : ''
            }
            this.$emit('searchList', data)
        },
        cleanFilter() {
            const data = {
                year: '',
                sort: ''
            }
            this.search.year = data.year
            this.search.sortBy = data.sort
            this.$emit('cleanFilter', data)
        }
    }
}
</script>