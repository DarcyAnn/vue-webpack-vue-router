<template>
  <div id="homepage">
    <h1>{{ msg }}</h1>
    <router-link to="/detailpage">Go To DetailPage</router-link>
    <paging :sumCount='sumCount' @pageTurn='pageTurn'></paging>
    <ul>
      <li v-for="(movie, index) in movies" :key="index" v-text="movie.title + index"></li>
    </ul>
  </div>
</template>

<script>
import Paging from '../../components/Paging.vue'
import api from '../../services/api'

export default {
  name: 'homepage',
  data() {
    return {
      msg: 'HomePage!',
      movies: ['1', '2'],
      searchReq: {
        start: 0,
        count: 6,
      },
      sumCount: 12, // 记录的总条数，用于传给Paging组件
    }
  },
  created() {
    this.init()
  },
  methods: {
    init() {
      api.getMovies(this.searchReq)
        .then((res) => {
          this.sumCount = res.body.total
          this.movies = res.data.subjects
        })
        .catch(() => {
          // you have an error
        })
    },
    pageTurn(i) {
      const vm = this
      vm.searchReq.start = i
      vm.init(vm.searchReq)
    },
  },
  components: {
    paging: Paging,
  },
}
</script>
