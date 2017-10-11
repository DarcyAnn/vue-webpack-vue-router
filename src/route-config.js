import HomePage from './views/HomePage/HomePage.vue'
import DetailPage from './views/DetailPage/DetailPage.vue'

export default [
  {
    path: '/',
    name: 'HomePage',
    component: HomePage,
  },
  {
    path: '/detailpage',
    name: 'DetailPage',
    component: DetailPage,
  },
]
