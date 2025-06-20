import { defineConfig } from "vitepress";

import {
  componentPreview,
  containerPreview,
} from "@vitepress-demo-preview/plugin";

export default defineConfig({
  title: "J-Components",
  description: "Vue组件库文档",
  markdown: {
    config(md) {
      md.use(componentPreview);
      md.use(containerPreview);
    },
  },
  themeConfig: {
    nav: [
      { text: "指南", link: "/guide/getting-started" },
      { text: "组件", link: "/components/table" },
    ],
    sidebar: {
      "/guide/": [
        {
          text: "指南",
          items: [
            { text: "介绍", link: "/guide/" },
            { text: "快速开始", link: "/guide/getting-started" },
          ],
        },
      ],
      "/components/": [
        {
          text: "组件",
          items: [{ text: "Table 表格", link: "/components/table" }],
        },
      ],
    },
  },
});
