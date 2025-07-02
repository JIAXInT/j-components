import { defineConfig } from "vitepress";
import { resolve } from "path";

import {
  componentPreview,
  containerPreview,
} from "@vitepress-demo-preview/plugin";

// 获取仓库名称用于GitHub Pages路径
const repo = "j-components"; // 根据您的仓库名称修改这里

export default defineConfig({
  title: "Jutsic-UI",
  // 设置base，以便在GitHub Pages上正确加载资源
  base: process.env.NODE_ENV === "production" ? `/${repo}/` : "/",
  description: "Justic-UI组件库文档",
  head: [["link", { rel: "icon", href: "/favicon.ico" }]], // 修正favicon路径
  markdown: {
    config(md) {
      md.use(componentPreview);
      md.use(containerPreview);
    },
  },
  // 添加vite配置
  vite: {
    resolve: {
      alias: [
        {
          find: "justic-ui",
          replacement: resolve(__dirname, "../../lib"),
        },
      ],
    },
    // 构建优化
    build: {
      chunkSizeWarningLimit: 1600,
    },
    optimizeDeps: {
      exclude: ["justic-ui"],
      include: ["element-plus"],
    },
    ssr: {
      // 禁用SSR对这些库的处理
      noExternal: ["element-plus"],
      external: ["justic-ui"],
    },
  },
  themeConfig: {
    nav: [
      { text: "首页", link: "/" },
      { text: "指南", link: "/components/getting-started" },
      { text: "组件", link: "/components/table" },
    ],
    sidebar: {
      "/components/": [
        {
          text: "指南",
          items: [{ text: "快速开始", link: "/components/getting-started" }],
        },
        {
          text: "组件",
          items: [
            { text: "Table 表格", link: "/components/table" },
            { text: "ModelForm 模型表单", link: "/components/modelForm" },
            { text: "Form 表单", link: "/components/form" },
            { text: "ChooseCity 城市选择", link: "/components/chooseCity" },
            { text: "Progress 进度条", link: "/components/progress" },
            { text: "ChooseTime 时间选择", link: "/components/chooseTime" },
            { text: "ChooseDate 日期选择", link: "/components/chooseDate" },
            { text: "Container 容器", link: "/components/container" },
            { text: "Menu 菜单", link: "/components/menu" },
            { text: "List 列表", link: "/components/list" },
            { text: "Notification 通知", link: "/components/notification" },
            { text: "Trend 趋势标记", link: "/components/trend" },
            { text: "ChooseArea 地区选择", link: "/components/chooseArea" },
            { text: "ChooseIcon 图标选择", link: "/components/chooseIcon" },
          ],
        },
      ],
    },
  },
});
