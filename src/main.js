import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify';
import Mars from 'mars-mta'
import * as fundebug from "fundebug-javascript";
import fundebugVue from "fundebug-vue";


const tcb = require('tcb-js-sdk')

Vue.config.productionTip = false

Vue.prototype['$tcb'] = tcb.init({
	env: 'prod-2c59c7'
})


Vue.use(Mars, {
    open: true, // 开关,若为false,则不会发出上报
    config: {
      sid: '500710182', // 必填，统计用的appid
      cid: '500710183', // 如果开启自定义事件，此项目为必填，否则不填
      autoReport: 1, // 是否开启自动上报(1:init完成则上报一次,0:使用pgv方法才上报)
      senseHash: 1, // hash锚点是否进入url统计
      senseQuery: 1, // url参数是否进入url统计
      performanceMonitor: 1, // 是否开启性能监控
    }
})

// use fundebug 

fundebug.apikey = "6c920ebf9efb1f866cd56510aa3e4084d5f82d8609d35a9f6c75c6a947ee726a"
fundebugVue(fundebug, Vue);

new Vue({
  router,
  vuetify,
  render: h => h(App),
  beforeCreate: async function(){
		const auth = this.$tcb.auth({ persistence: 'local' });
		await auth.signInAnonymously();
  }
}).$mount('#app')
