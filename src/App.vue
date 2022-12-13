<template>
  <div>
    <MoviesList/>
  </div>
</template>

<script>
import { getTMDBList } from '@/assets/js/api';
import MoviesList from './components/MoviesList.vue'

export default {
  name: 'App',
  components: {
    MoviesList
  },
  mounted(){
    this.init ()
  },
  methods: {
    init () {
      getTMDBList.then(res => {
        console.log(res.data.results)
      })
    }
  }
}
</script>

<style>

</style>
