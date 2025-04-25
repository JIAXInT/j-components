import type { App } from "vue";
import chooseArea from "./chooseArea";
import chooseIcon from "./chooseIcon";

const components = [chooseArea, chooseIcon];

export default {
  install(app: App) {
    components.map((component) => {
      app.use(component); // 注册组件，全局组件，所有组件都可以使用，不需要单独导入，直接使用组件名即可，如：<j-choose-area />，组件名：j-choose-area，组件文件：src/index.vue
    });
  },
};
