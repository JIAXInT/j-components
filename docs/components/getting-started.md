# 快速开始

本组件库是基于 `element-plus` 进行二次封装的，使用前请确保您的项目中已正确安装并配置了 `element-plus`。

> 参考：[Element Plus 官方安装指南](https://element-plus.org/zh-CN/guide/installation.html)

## 安装

您可以选择以下任意一种方式安装 justic-ui：

### 使用 npm 安装

```bash
npm install justic-ui
# 或简写形式
npm i justic-ui
```

### 使用 yarn 安装

```bash
yarn add justic-ui
```

### 使用 pnpm 安装

```bash
pnpm add justic-ui
```

## 引入组件

### 全局引入

在项目的入口文件（通常是 `main.ts` 或 `main.js`）中添加以下代码：

```javascript
import { createApp } from "vue";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import JUI from "justic-ui";
import "justic-ui/index.css";
import App from "./App.vue";

const app = createApp(App);

app.use(ElementPlus);
app.use(JUI);
app.mount("#app");
```

### 按需引入

如果您只需要使用部分组件，可以采用按需引入的方式：

```javascript
import { createApp } from "vue";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import chooseIcon from "justic-ui/chooseIcon";
import "justic-ui/chooseIcon/index.css";
import chooseArea from "justic-ui/chooseArea";
import "justic-ui/chooseArea/index.css";
//...引入更多你需要的组件
import App from "./App.vue";

const app = createApp(App);

app.use(ElementPlus);
app.use(chooseIcon);
app.use(chooseArea);
// 注册其他组件...
app.mount("#app");
```

## 开始使用

完成上述配置后，您就可以在项目中使用组件库了。有关各个组件的详细用法，请参阅对应组件的文档说明。
