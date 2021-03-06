import Vue from 'vue'
import App from './App.vue'
import VSDrag from 'v-simple-drag';
// import VSDrag from '@/vss';

Vue.use(VSDrag);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
