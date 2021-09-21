import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify';


const tcb = require('tcb-js-sdk')

Vue.config.productionTip = false

Vue.prototype['$tcb'] = tcb.init({
	env: 'prod-2c59c7'
})


new Vue({
  router,
  vuetify,
  render: h => h(App),
  beforeCreate: async function(){
		const auth = this.$tcb.auth({ persistence: 'local' });
		await auth.signInAnonymously();
  }
}).$mount('#app')
