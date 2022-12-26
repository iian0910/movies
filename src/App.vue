<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'App',
  computed:{
    ...mapGetters(['isMobileSize'])
  },
  mounted () {
    this.$store.commit('SET_VW', document.documentElement.clientWidth);
    window.addEventListener('resize', () => {
      this.$store.commit('SET_VW', document.documentElement.clientWidth);
    })
  }
}
</script>

<style>

</style>
