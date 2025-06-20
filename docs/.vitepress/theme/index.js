import DefaultTheme from "vitepress/theme";
import "./custom.css";
import "../../../src/styles/ui.scss";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import JComponents from "../../../src/components/index";
import { AntDesignContainer } from "@vitepress-demo-preview/component";
import "@vitepress-demo-preview/component/dist/style.css";

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.use(ElementPlus);
    app.use(JComponents);
    app.component("demo-preview", AntDesignContainer);
  },
};
