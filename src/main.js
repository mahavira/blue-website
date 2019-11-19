import Vue from 'vue';
import fastclick from 'fastclick';
import 'reset-css/reset.css';
import './styles/index.scss';
import App from './App.vue';

Vue.config.productionTip = false;
fastclick.attach(document.body);

new Vue({
  render: h => h(App),
}).$mount('#app');
