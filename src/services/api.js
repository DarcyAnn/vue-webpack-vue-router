import Vue from 'vue'
import VueResource from 'vue-resource'
Vue.use(VueResource)

const baseUrl = 'http://api.douban.com/';


class APIS {
    
    //获取电影列表
    getMovies(params) {
        return Vue.http.jsonp(baseUrl + 'v2/movie/in_theaters',{ params: params })
    }

}

export default new APIS();