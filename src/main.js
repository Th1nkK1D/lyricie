import Vue from 'vue'
import VueChatScroll from 'vue-chat-scroll'

import App from './App.vue'

Vue.use(VueChatScroll)

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
