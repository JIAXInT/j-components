import DefaultTheme from "vitepress/theme";
import "./style/index.css";
import "./custom.css";
import "../../../src/styles/ui.scss";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import JUI from "justic-ui";
import "justic-ui/index.css";
import { AntDesignContainer } from "@vitepress-demo-preview/component";
import "@vitepress-demo-preview/component/dist/style.css";

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.use(ElementPlus);
    app.use(JUI);
    app.component("demo-preview", AntDesignContainer);
  },
};
