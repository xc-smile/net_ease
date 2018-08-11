<template>
  <div id="app">

    <router-view/>
    <foot-nav />
  </div>
</template>

<script>
  import FootNav from './components/footNav/footNav'
export default {
  components: {
    FootNav
  },
  mounted () {
    this.$store.dispatch('getBanner')
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
