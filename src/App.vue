<template>
  <div id="app" class="container">
    <navigation></navigation>
    <router-view></router-view>
  </div>
</template>

<script>
import Navigation from '@/components/Navigation'
export default {
  name: 'app',
  components: { navigation: Navigation }
}
</script>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
    width: auto;
    max-width: 900px;
    padding: 0 15px;
}
</style>
