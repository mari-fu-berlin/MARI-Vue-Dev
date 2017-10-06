<template>
  <div>
    <b-navbar type="dark" variant="primary" toggleable>
      <b-nav-toggle target="nav_dropdown_collapse"></b-nav-toggle>
      <b-navbar-brand>{{ projectName }}</b-navbar-brand>
      <b-collapse is-nav id="nav_dropdown_collapse">
        <b-nav is-nav-bar>
          <b-nav-item to="/">Home</b-nav-item>
          <b-nav-item-dropdown text="Seiten" right>
            <b-dropdown-item v-for="page of pages" :key="page.id" :to="{ name: 'page', params: { id: page.id } }">{{ page.title.rendered }}</b-dropdown-item>
          </b-nav-item-dropdown>
          <b-nav-item to="/zlblist">ZLB</b-nav-item>
        </b-nav>
      </b-collapse>
    </b-navbar>
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
  name: 'Navigation',
  data () {
    return {
      projectName: 'Mari',
      pages: [],
      errors: []
    }
  },
  created () {
    axios.get('http://inhalte.mari-intern.de/wp-json/wp/v2/pages/')
    .then(response => {
      this.pages = response.data
    })
    .catch(e => {
      this.errors.push(e)
    })
  }
}
</script>

<style scoped>
</style>
