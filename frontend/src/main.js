import Vue from 'vue';
import App from './App.vue';
import vuetify from './plugins/vuetify';
import __STATIC__ from 'webpack-bundle-tracker';

Vue.config.productionTip = false;

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app');
