<template>
  <div class="zlb">

    <div class="jumbotron">
      <p class="lead">{{ msg }}</p>
    </div>

    <ul v-if="items && items.length">
      <li v-for="item of items">
        <p><strong><router-link :to="{ name: 'zlb', params: { id: item.id } }">{{ item.id }} - {{ item.element_texts[1].text }}</router-link></strong></p>
        <div class="my-2" v-html="item.element_texts[8].text" v-if="item.element_texts[8] && item.element_texts[8].text && item.element_texts[8].text.length"></div>
      </li>
    </ul>

    <ul v-if="errors && errors.length">
      <li v-for="error of errors">
        {{error.message}}
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Zlblist',
  data () {
    return {
      msg: 'Willkommen in der Objektüberischt des ZLB Bereichs',
      items: [],
      errors: []
    }
  },
  created () {
    axios.get('http://grossstadtgeschichten-berlin.de/api/items')
    .then(response => {
      this.items = response.data
    })
    .catch(e => {
      this.errors.push(e)
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
