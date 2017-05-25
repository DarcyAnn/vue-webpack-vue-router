<template>
  <div id="homepage">
    <h1>{{ msg }}</h1>
    <router-link to="/detailpage">Go To DetailPage</router-link>
  </div>
</template>

<script>

export default {
  name: 'homepage',
  data () {
    return {
      msg: 'HomePage!'
    }
  }
}
</script>