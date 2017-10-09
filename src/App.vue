<template>
  <div id="app" class="container-fluid">
    <b-row>
      <b-col cols="3">
        <identity></identity>
        <navigation></navigation>
      </b-col>
      <b-col cols="6">
        <router-view></router-view>
      </b-col>
    </b-row>
  </div><!-- #app -->
</template>

<script>
import Navigation from '@/components/Navigation'
import Identity from '@/components/Identity'
export default {
  name: 'app',
  components: {
    navigation: Navigation,
    identity: Identity
  }

}
</script>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
    width: auto;
    padding: 0 ;
}
</style>
