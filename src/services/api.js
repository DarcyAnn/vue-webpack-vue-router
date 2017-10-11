import Vue from 'vue'
import VueResource from 'vue-resource'

Vue.use(VueResource)

const baseUrl = 'http://api.douban.com/'


class APIS {
  // 获取电影列表
  getMovies(params) {
    this.url = `${baseUrl}v2/movie/in_theaters`
    return Vue.http.jsonp(this.url, { params })
  }
}

export default new APIS()
