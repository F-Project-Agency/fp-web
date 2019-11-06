import Vue       from 'vue'
import App       from './App.vue'
import { store } from './store'
import VueRouter from 'vue-router'
import Routes    from './routes'

import './assets/plugins/bootstrap/bootstrap.min.css'
import './assets/plugins/slick/slick.css'
import './assets/plugins/themify-icons/themify-icons.css'
import './assets/plugins/animate/animate.css'
import './assets/plugins/aos/aos.css'
import './assets/plugins/venobox/venobox.css'
import './assets/styles/scss/style.scss'

import HeaderSection from './components/HeaderSection'
import PageTitleSection from './components/PageTitleSection'
import FooterSection from './components/FooterSection'
import Loader        from "./components/Loader";
import LazyImage        from "./components/LazyImage";
import LazyBackground        from "./directives/LazyBackground";

// custom directives
Vue.directive('lazy-background', LazyBackground);
Vue.directive('background', function (el, binding) {
  if (typeof binding.value === 'string') {
    el.style.backgroundImage =  `url(${binding.value})`;
  } else if (typeof binding.value === 'object') {
    for (let property in binding.value) {
      if (binding.value.hasOwnProperty(property)) {
        if (property === 'backgroundImage' || property ===  'background-image')
        {
          el.style.backgroundImage =  `url(${binding.value})`;
        }
      }
    }
  }
});

export const bus = new Vue()
Vue.config.productionTip = false

const router = new VueRouter({
  routes: Routes,
  scrollBehavior (to, from, savedPosition) {
    if (to.hash) {
      return {
        selector: to.hash
      }
    }
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  },
  base: process.env.BASE_URL,
  // mode  : 'history'
})
Vue.use(VueRouter)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
