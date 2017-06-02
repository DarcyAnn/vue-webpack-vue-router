<template>
  <div id="homepage">
    <h1>{{ msg }}</h1>
    <router-link to="/detailpage">Go To DetailPage</router-link>
    <ul>
      <li v-for="(movie, index) in movies" v-text="movie.title + index"></li> 
    </ul>
  </div>
</template>

<script>

export default {
  name: 'homepage',
  data () {
    return {
      msg: 'HomePage!',
      movies: ['1', '2'],
    }
  },
  created () {
    this.$http.jsonp('http://api.douban.com/v2/movie/in_theaters',{ count: 6, })
      .then(function(response){
        this.movies = response.data.subjects;
      })
      .catch(function(err){
        console.log('Err:', err);
      }
    );
  },
}
</script>