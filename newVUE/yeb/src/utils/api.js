/*
 * @Author: your name
 * @Date: 2022-03-09 11:03:18
 * @LastEditTime: 2022-03-16 10:41:18
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \前端项目test\newVUE\yeb\src\utils\api.js
 */
import router from "@/router";
import axios from "axios";
import { Message } from "element-ui";

axios.interceptors.request.use(
  //在请求前做点什么
  (config) => {
    if (window.sessionStorage.getItem("tokenStr")) {
      config.headers["Authorization"] =
        window.sessionStorage.getItem("tokenStr");
    }
    return config
  }, error=>{
    console.log(error)
  }
);

//请求拦截器中间件
axios.interceptors.response.use(
  //response在请求后做处理
  (success) => {
    //业务逻辑
    if (success.status && success.status == 200) {
      //错误的返回
      if (
        success.data.code == 500 ||
        success.data.code == 401 ||
        success.data.code == 403
      ) {
        Message.error({ message: success.data.message });
        return;
      }
      //成功的返回
      if (success.data.message) {
        Message.success({ message: success.data.message });
      }
    }

    //获取请求返回的对象
    return success.data;
  },
  //请求失败
  (error) => {
    if (error.response.code == 504 || error.response.code == 404) {
      Message.error({ message: "服务器坏了" });
    } else if (error.response.code == 403) {
      Message.error({ message: "权限不足" });
    } else if (error.response.code == 401) {
      Message.error({ message: "请先登录" });
      router.replace("/");
    } else {
      if (error.response.data.Message) {
        Message.error({ message: error.response.data.Message });
      } else {
        Message.error({ message: "未知错误" });
      }
    }
  }
);

//防止要求添加前置路径
let base = "";

//传送Json格式的post请求
export const postRequest = (url, params) => {
  return axios({
    method: "post",
    url: `${base}${url}`,
    data: params,
  });
};

//传送Json格式的post请求
export const getRequest = (url, params) => {
  return axios({
    method: "get",
    url: `${base}${url}`,
    data: params,
  });
};
