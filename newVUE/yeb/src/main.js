/*
 * @Author: your name
 * @Date: 2022-03-08 16:31:33
 * @LastEditTime: 2022-03-16 15:22:00
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \前端项目test\newVUE\yeb\src\main.js
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";

import { postRequest } from "@/utils/api";
import { getRequest } from "@/utils/api";


//封装一个api模块，可以全局调用
Vue.prototype.postRequest = postRequest;
Vue.prototype.getRequest = getRequest;

Vue.config.productionTip = false
Vue.use(ElementUI);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
