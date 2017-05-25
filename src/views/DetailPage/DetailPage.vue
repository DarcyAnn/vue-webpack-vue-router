<template>
  <div id="detailpage">
    <h1>{{ msg }}</h1>
    <router-link to="/">Go To HomePage</router-link>
  </div>
</template>

<script>

export default {
  name: 'detailpage',
  data () {
    return {
      msg: 'DetailPage!'
    }
  }
}
</script>