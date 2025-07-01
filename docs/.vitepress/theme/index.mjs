import DefaultTheme from "vitepress/theme";
import "./style/index.css";
import "./custom.css";
import "../../../src/styles/ui.scss";
import { defineAsyncComponent } from "vue";
// 服务器端不加载这些组件，客户端才加载
import "element-plus/dist/index.css";

// 通过动态导入避免SSR错误
const JUI = defineAsyncComponent(() => import("justic-ui"));
const ElementPlus = defineAsyncComponent(() => import("element-plus"));
const AntDesignContainer = defineAsyncComponent(() =>
  import("@vitepress-demo-preview/component").then((mod) => ({
    default: mod.AntDesignContainer,
  }))
);

// 导入样式
import "@vitepress-demo-preview/component/dist/style.css";

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    // 在客户端才挂载这些组件
    if (typeof window !== "undefined") {
      app.component("demo-preview", AntDesignContainer);
      app.use(ElementPlus);
      app.use(JUI);
    }
  },
};
