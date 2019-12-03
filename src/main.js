import Vue from 'vue'
import App from './App.vue'

// 导入 vant
import Vant from "vant";
// 导入 vant 的样式
import "vant/lib/index.css";

// 导入了 路由
import router from "./router";
// 导入了 仓库
import store from "./store";

// 使用 vant
Vue.use(Vant);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
