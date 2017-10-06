<template>
  <div class="page row">
    <div class="col">
      <h1 v-if="page.title && page.title.rendered" v-html="page.title.rendered"></h1>
      <div clas="my-2" v-if="page.content && page.content.rendered" v-html="page.content.rendered"></div>
      <ul v-if="errors && errors.length">
        <li v-for="error of errors">
          {{ error.message }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Page',
  data () {
    return {
      page: [],
      errors: []
    }
  },
  methods: {
    getPage () {
      var id = this.$route.params.id
      if (id && id > 0) {
        axios.get('http://inhalte.mari-intern.de/wp-json/wp/v2/pages/' + id)
        .then(response => {
          this.page = response.data
        })
        .catch(e => {
          this.errors.push(e)
        })
      }
    }
  },
  created () {
    this.getPage()
  },
  watch: {
    '$route': 'getPage'
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
