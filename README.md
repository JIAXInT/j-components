# J-Components

一个基于 Vue 3 + TypeScript + Vite 的现代化组件库项目，提供了一系列高质量、可复用的 Vue 组件。

## 技术栈

- 🚀 Vue 3 - 渐进式 JavaScript 框架
- 📦 TypeScript - JavaScript 的超集
- ⚡ Vite - 下一代前端构建工具
- 🎨 Element Plus - 基于 Vue 3 的组件库
- 🛣️ Vue Router - Vue.js 官方路由管理器
- 🎯 Sass - CSS 预处理器
- 📝 VitePress - Vue 驱动的静态站点生成器

## 组件列表

项目包含以下组件：

- 📊 Table - 表格组件
- 📝 Form - 表单组件
- 🏙️ ChooseCity - 城市选择器
- 📈 Progress - 进度条组件
- ⏰ ChooseTime - 时间选择器
- 📅 ChooseDate - 日期选择器
- 📦 Container - 容器组件
- 📑 Menu - 菜单组件
- 📋 List - 列表组件
- 🔔 Notification - 通知组件
- 📈 Trend - 趋势组件
- 🗺️ ChooseArea - 区域选择器
- 🎨 ChooseIcon - 图标选择器

## 快速开始

### 环境要求

- Node.js >= 16.0.0
- pnpm >= 7.0.0

### 安装

```bash
# 克隆项目
git clone [项目地址]

# 进入项目目录
cd j-components

# 安装依赖
pnpm install
```

### 开发

```bash
# 启动开发服务器
pnpm dev
```

### 构建

```bash
# 构建生产版本
pnpm build
```

### 文档

```bash
# 启动文档开发服务器
pnpm docs:dev

# 构建文档
pnpm docs:build
```

## 项目结构

```
j-components/
├── src/                # 源代码目录
│   ├── assets/        # 静态资源
│   ├── components/    # 组件目录
│   │   ├── table/    # 表格组件
│   │   ├── form/     # 表单组件
│   │   ├── chooseCity/ # 城市选择器
│   │   └── ...       # 其他组件
│   ├── hooks/         # Vue Hooks
│   ├── mock/          # 模拟数据
│   ├── router/        # 路由配置
│   ├── styles/        # 样式文件
│   ├── utils/         # 工具函数
│   └── views/         # 页面视图
├── docs/              # 文档目录
├── public/            # 公共资源
└── package.json       # 项目配置
```

## 组件使用示例

### 图标选择器

```vue
<template>
  <j-choose-icon
    title="选择图标"
    :visible="visible"
    @update:visible="visible = $event"
  >
    选择图标
  </j-choose-icon>
</template>

<script setup lang="ts">
import { ref } from "vue";

const visible = ref<boolean>(false);
</script>
```

## 开发规范

1. 组件开发遵循 Vue 3 组合式 API 风格
2. 使用 TypeScript 进行类型检查
3. 组件样式使用 Sass 预处理器
4. 遵循 ESLint 和 Prettier 代码规范

## 贡献指南

1. Fork 本仓库
2. 创建您的特性分支 (git checkout -b feature/AmazingFeature)
3. 提交您的更改 (git commit -m 'Add some AmazingFeature')
4. 推送到分支 (git push origin feature/AmazingFeature)
5. 开启一个 Pull Request

## 版本历史

- v0.0.0 - 初始版本

## 许可证

[MIT](LICENSE)

## 联系方式

如有问题或建议，请提交 Issue 或 Pull Request。
