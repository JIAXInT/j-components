# 进度条

进度条组件用于展示操作的当前进度。

## 按需引入

```javascript
import { createApp } from "vue";
import progress from "justic-ui/progress";
import "justic-ui/progress/index.css";

const app = createApp();
app.use(progress);
```

## 基础用法

<div class="component-preview-container">
  <div class="component-preview-item">
    <div class="component-preview-block">
      <div class="component-preview-title">基础用法</div>
        <j-progress :percentage="50"></j-progress>
    </div>
  </div>
</div>

```vue
<template>
  <j-progress :percentage="50"></j-progress>
</template>
```

## 自定义颜色

<div class="component-preview-container">
  <div class="component-preview-item">
    <div class="component-preview-block">
      <div class="component-preview-title">自定义颜色</div>
        <j-progress :percentage="50" color="red"></j-progress>
    </div>
  </div>
</div>

```vue
<template>
  <j-progress :percentage="50" color="red"></j-progress>
</template>
```

## 自定义高度

<div class="component-preview-container">
  <div class="component-preview-item">
    <div class="component-preview-block">
      <div class="component-preview-title">自定义高度</div>
        <j-progress :percentage="50" :stroke-width="20"></j-progress>
    </div>
  </div>
</div>

```vue
<template>
  <j-progress :percentage="50" :stroke-width="20"></j-progress>
</template>
```

## 显示文字

<div class="component-preview-container">
  <div class="component-preview-item">
    <div class="component-preview-block">
      <div class="component-preview-title">显示文字</div>
        <j-progress :percentage="50" :text-inside="true"></j-progress>
    </div>
  </div>
</div>

```vue
<template>
  <j-progress :percentage="50" :text-inside="true"></j-progress>
</template>
```

## 动画效果

<div class="component-preview-container">
  <div class="component-preview-item">
    <div class="component-preview-block">
      <div class="component-preview-title">动画效果</div>
        <j-progress :percentage="50" :animation="true"></j-progress>
    </div>
  </div>
</div>

```vue
<template>
  <j-progress :percentage="50" :animation="true"></j-progress>
</template>
```

## 属性

| 属性名      | 说明         | 类型    | 默认值 |
| ----------- | ------------ | ------- | ------ |
| percentage  | 百分比       | number  | 0      |
| color       | 进度条颜色   | string  | ''     |
| strokeWidth | 进度条高度   | number  | 6      |
| textInside  | 文字是否内显 | boolean | false  |
| animation   | 是否启用动画 | boolean | false  |
