<template>
  <div id="homepage">
    <h1>{{ msg }}</h1>
    <router-link to="/detailpage">Go To DetailPage</router-link>
    <paging :sumCount='sumCount' @pageTurn='pageTurn'></paging>
    <ul>
      <li v-for="(movie, index) in movies" v-text="movie.title + index"></li> 
    </ul>
  </div>
</template>

<script>
import Paging from '../../components/Paging.vue'
export default {
  name: 'homepage',
  data () {
    return {
      msg: 'HomePage!',
      movies: ['1', '2'],
      searchReq: {
        start: 0,
        count: 6
      },
      sumCount: 12,  //记录的总条数，用于传给Paging组件
    }
  },
  created () {
    this.init();
  },
  methods: {
    init() {
      this.$http.jsonp('http://api.douban.com/v2/movie/in_theaters',{ params: this.searchReq, })
      .then(function(response){
        this.sumCount = response.body.total;
        this.movies = response.data.subjects;
      })
      .catch(function(err){
        console.log('Err:', err);
      });
    },
    pageTurn (i, count) {
      var vm = this;
      vm.searchReq.start = i;
      vm.init(vm.searchReq);
    },
  },
  components: {
    'paging': Paging,
  },
}
</script>