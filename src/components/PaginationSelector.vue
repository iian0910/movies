<template>
    <div class="pagination-wrapper m-auto">
        <button :disabled="preDisable" @click="goPre">&#60;</button>
        <ul>
            <li v-for="index in pages" :key="index" ref="pages">
                <button @click="jumpToPage(index)" v-if="isShowBtn(index)" :class="current===index?'active':''">{{index}}</button>
                <div v-else-if="isShowEllipsis(index)" class="ellipsis">&#8230;</div>
            </li>
        </ul>
        <button :disabled="nextDisable" @click="goNext">&#62;</button>
  </div>
</template>

<script>
export default {
    props: {
        totalPages: {
            default: 0,
            type: Number
        },
        isResetPagination: {
            default: false,
            type: Boolean
        }
    },
    data () {
        return {
            current: 1,
            pageSize: 20,
            pages: [],
            pageLength: 0
        }
    },
    computed: {
        preDisable () { // 是否禁用上一页
            return this.current === 1
        },
        nextDisable () { // 是否禁用下一页
            return this.current === this.pageLength
        }
    },
    watch: {
        'current' (val) { // 监听当前页current改变，向父组件传递参数当前页
            this.$emit('change', val)
        },
        totalPages (val) { // 监听数据总数total的改变在计算页码列表getPagesLength()
            if (val) {
                this.getPagesLength()
            }
        },
        isResetPagination (isReset) {
            if (isReset) {
                this.current = 1
            }
        }
    },
    created () { // 初始化计算页码列表getPagesLength()
        this.getPagesLength()
    },
    methods: {
        getPagesLength () { // 计算页码列表
            const more = this.totalPages % this.pageSize ? 1 : 0
            this.pageLength = this.totalPages / this.pageSize + more
            this.pages = new Array(Math.floor(this.pageLength))
            for (let i = 0; i < this.pages.length; i++) {
                this.pages[i] = i + 1
            }
        },
        jumpToPage (index) { // 点击页码
            this.current = index
            this.$emit('jumpToPage', index)
        },
        goPre () { // 上一页
            this.current -= this.current === 1 ? 0 : 1
            this.$emit('goPre', this.current)
        },
        goNext () { // 下一页
            this.current += this.current === this.pageLength ? 0 : 1
            this.$emit('goNext', this.current)
        },
        isShowBtn (index) { // 页码是否被省略
            if (this.pageLength < 8) {
                return true
            } else {
                if (index === 1 || index === this.pageLength) {
                return true
                } else {
                if (this.current < 4 && index < 6) {
                    return true
                } else if (this.current > this.pageLength - 4 && index > this.pageLength - 6) {
                    return true
                } else if (index < this.current + 3 && index > this.current - 3) {
                    return true
                } else {
                    return false
                }
                }
            }
        },
        isShowEllipsis (index) { // 是否显示省略号
            return index === 5 || index === this.pageLength - 1
        }
    }
}
</script>

<style lang="scss" scoped>
.pagination-wrapper {
    width: 100%;
	margin: 10px;
	display: flex;
    ul {
        padding: 0;
        margin: 0;
        display: flex;
        list-style: none;
		.active {
			border: solid 2px #0e71a7;
            background-color: #1296db;
            color: white;
        }
		.ellipsis {
			font-weight: bold;
			color: #999;
			line-height: 24px;
        }
    }
	button {
		height: 30px;
		width: 30px;
		margin: 0 5px;
		border-radius: 3px;
		border: solid 1px #ccc;
		color: #777;
		font-weight: bold;
		background: #fff;
		overflow: hidden;
		user-select: none;
		&:hover {
			border: solid 1px #1296db;
			cursor: pointer;
        }
		&:disabled {
			border: solid 1px #ccc;
			color: #ccc;
			cursor: not-allowed;
        }
    }
}
</style>