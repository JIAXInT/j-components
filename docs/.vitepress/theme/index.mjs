import DefaultTheme from "vitepress/theme";
import "./style/index.css";
import "./custom.css";
import "../../../src/styles/ui.scss";
import { h, defineComponent } from "vue";

// 导入预览组件样式
import "@vitepress-demo-preview/component/dist/style.css";
import { AntDesignContainer } from "@vitepress-demo-preview/component";

// 创建一个客户端专用组件包装器
const ClientOnly = defineComponent({
  name: "ClientOnly",
  setup(_, { slots }) {
    return () =>
      h("div", { class: "client-only-placeholder" }, slots.default?.());
  },
});

// 存储全局组件注册状态
let isComponentsRegistered = false;

export default {
  ...DefaultTheme,

  enhanceApp({ app }) {
    // 注册客户端专用包装组件
    app.component("ClientOnly", ClientOnly);

    // 注册预览组件
    app.component("demo-preview", AntDesignContainer);

    // 客户端专用代码
    if (typeof window !== "undefined" && !isComponentsRegistered) {
      isComponentsRegistered = true;

      // 导入样式 - 使用正确的路径
      import("element-plus/dist/index.css");
      import("../../../lib/justic-ui.css");

      // 加载element-plus
      import("element-plus")
        .then((ElementPlus) => {
          app.use(ElementPlus.default || ElementPlus);

          // 加载组件库
          import("../../../lib/index.js")
            .then((JUI) => {
              app.use(JUI.default || JUI);
              console.log("组件库已成功加载");
            })
            .catch((err) => {
              console.error("加载组件库时出错:", err);
            });
        })
        .catch((err) => {
          console.error("加载Element Plus时出错:", err);
        });
    }
  },

  setup() {
    // 确保在组件挂载后，元素显示
    return () => {
      if (typeof window !== "undefined") {
        // 找到所有client-only-placeholder类的元素并移除
        setTimeout(() => {
          document
            .querySelectorAll(".client-only-placeholder")
            .forEach((el) => {
              el.className = "";
            });
        }, 100);
      }
    };
  },
};
