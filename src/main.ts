import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "./router/index";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import "./mock/index";

// // 单独引入
// import chooseIcon from "../lib/chooseIcon/index.js";
// import "../lib/chooseIcon/index.css";

// 项目引入
import jUI from "./components";

// 发布测试
// import jUI from "../lib/index.js";
// import "../lib/j-component.css";

// 发布引用
// import jUI from "justic-ui";
// import "justic-ui/justic-ui.css";

const app = createApp(App);

app.use(router).use(ElementPlus).use(jUI);
app.mount("#app");
