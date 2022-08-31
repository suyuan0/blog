import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import "./assets/styles/common.css";
import "./assets/styles/reset.css";
import "./assets/font.css";
import zhCn from "element-plus/es/locale/lang/zh-cn";
const app = createApp(App);
// console.log(import.meta.env.VITE_APP_API);

app.use(ElementPlus, {
  locale: zhCn,
});
app.use(store).use(router).mount("#app");
