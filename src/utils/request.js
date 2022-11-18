import axios from "axios";
import store from "../store";
// axios.defaults.baseURL = "http://localhost:3000";
axios.defaults.baseURL = "http://101.43.168.167:3000";
axios.defaults.withCredentials = true;
/**
 * 设置超时时间和跨域是否允许携带凭证
 */

/**
 * 设置请求数据参数传递的格式，默认是json格式，但是在登录校验中后台一般设置请求格式：x-www-form-urlencoded(name=xxx,age=xxx)
 * 看服务器要求什么格式
 */
/**
 * 设置请求拦截器：----在项目中发请求（请求没有发出去）可以做一些事情
 * 客户端->[请求拦截器]->服务器端
 * token校验（JWT）：接收到服务器的token,存储到vuex/本地存储中，每次向服务器发送请求，我们应该把token带上
 * config :发起请求的请求配置项
 */
axios.interceptors.request.use(
  (config) => {
    store.state.isLoading = true;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
/**
 * 设置响应拦截器
 * 服务器端返回信息->[响应拦截器]->客户端js获取到信息
 * response中包含属性：
 * data：相应数据,status:响应状态码,statusText：响应状态信息,headers：响应头,config：响应提供的配置信息,request
 */
axios.interceptors.response.use(
  (response) => {
    store.state.isLoading = false;
    return response; //将主体内容返回  axios.get().then(result=>{拿到的就是响应主体})
  },
  (error) => {
    let { response } = error;
    // 如果有返回结果
    if (response) {
      switch (response.status) {
        //这里面根据公司需求进行写
        case 404:
          //进行错误跳转之类
          break;
      }
    } else {
      //服务器没有返回结果 分两种情况 断网  服务器崩了
      if (!window.navigator.onLine) {
        //断网处理：跳转到断网页面
        return;
      }
      return Promise.reject(error);
    }
  }
);
export default axios;
