import type { App } from "vue";
import form from "./src/index.vue";

/**
 * 按需引入组件
 * @param app 应用实例
 */
export default {
  install(app: App) {
    app.component("j-form", form);
  },
};
