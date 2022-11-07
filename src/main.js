import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import router from "./router";
import { Uploader } from "vant";
import { Form } from "vant";
import { Field } from "vant";
import { Button } from "vant";
import store from "./store";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
Vue.use(ElementUI);

Vue.use(Button);

Vue.use(Form);
Vue.use(Field);

Vue.use(Uploader);

Vue.config.productionTip = false;
Vue.use(VueRouter);

new Vue({
  el: "#app",
  render: (h) => h(App),
  router,
  store,
});
