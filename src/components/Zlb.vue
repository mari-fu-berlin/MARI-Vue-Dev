<template>
  <div class="zlb">
    <div class="jumbotron">
      <p class="lead">{{ msg }}</p>
    </div>
    <div class="my-2" v-if="item">
        <p v-if="item.id && item.element_texts && item.element_texts[1] && item.element_texts[1].text">
          <strong>{{ item.id }} - {{ item.element_texts[1].text }}</strong>
        </p>
        <ul v-if="item.element_texts" v-for="text of item.element_texts">
          <li v-if="text.text" v-html="text.text"></li>
        </ul>
        <div class="my-2" v-if="files && files[0] && files[0].file_urls && files[0].file_urls.thumbnail">
          <img :src="files[0].file_urls.thumbnail" :alt="item.element_texts[1].text">
        </div>
    </div>
    <ul v-if="errors && errors.length">
      <li v-for="error of errors">
        {{ error.message }}
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Zlb',
  data () {
    return {
      msg: 'Willkommen in der Objektansicht des ZLB Bereichs.',
      item: [],
      files: [],
      errors: []
    }
  },
  created () {
    var id = this.$route.params.id
    if (id && id > 0) {
      axios.get('http://grossstadtgeschichten-berlin.de/api/items/' + id)
      .then(response => {
        this.item = response.data
        return axios.get(response.data.files.url)
        .then(fileresponse => {
          this.files = fileresponse.data
        })
        .catch(e => {
          this.errors.push(e)
        })
      })
      .catch(e => {
        this.errors.push(e)
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
