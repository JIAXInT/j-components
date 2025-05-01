import type { App } from "vue";
import menu from "./src/index.vue";
import infiniteMenu from "./src/menu";

/**
 * 按需引入组件
 * @param app 应用实例
 */
export default {
  install(app: App) {
    app.component("j-menu", menu);
    app.component("j-infinite-menu", infiniteMenu);
  },
};
