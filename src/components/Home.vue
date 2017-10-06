<template>
  <div class="home">
    <div class="jumbotron">
      <p class="lead">{{ msg }}</p>
    </div>
    <b-alert show>Hier gibt es nichts weiter zu tun. Wählen Sie etwas aus der Navigation</b-alert>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      msg: 'Willkommen auf Home'
    }
  }
}
</script>

<style scoped>
</style>
