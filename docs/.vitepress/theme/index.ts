import Theme from 'vitepress/theme'
import './style/reset.scss'
import './style/var.scss'
import about from './pages/about.vue'
// import FreeStyle from './components/FreeStyle.vue'
// import { h } from 'vue'
// import HeroBefore from './components/HeroBefore.vue'
export default {
  ...Theme,
  // Layout() {
  //   return h(Theme.Layout, null, {
  //     'home-hero-before': () => h(HeroBefore)
  //   })
  // },
  enhanceApp({ app }) {
    app.component('about', about)
  }
}