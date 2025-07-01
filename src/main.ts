import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "./router/index";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import * as Icons from "@element-plus/icons-vue";
import { toLine } from "./utils";
import "./mock/index";
// import jUI from "../src/components/index";

// // 单独引入
// import chooseIcon from "../lib/chooseIcon/index.js";
// import "../lib/chooseIcon/index.css";

import jUI from "./components";
// import jUI from "../lib/index.js";
// import "../lib/j-component.css";

// import jUI from "justic-ui";

const app = createApp(App);

// 全局注册图标
// for (let i in Icons) {
//   // 注册全局组件
//   app.component(`el-icon${toLine(i)}`, (Icons as any)[i]);
// }

app.use(router).use(ElementPlus).use(jUI);
app.mount("#app");
