# 趋势标记

趋势标记是一个用于展示数据变化趋势的组件，通过上升或下降的图标直观地表示数据的变化方向。

## 按需引入

如果您只需要使用趋势标记组件，可通过以下方式按需引入：

```javascript
// 在 main.js 或 main.ts 中引入
import trend from "justic-ui/trend";
import "justic-ui/trend/index.css";

// 注册组件
app.use(trend);
```

## 基础用法

组件支持上升和下降两种趋势类型，可自定义文本和图标颜色。

<div class="component-preview-container">
  <div class="component-preview-item">
    <div class="component-preview-block">
      <div class="component-preview-title">上升趋势</div>
      <ClientOnly>
        <j-trend type="up">上升趋势</j-trend>
      </ClientOnly>
    </div>
    <div class="component-preview-block">
      <div class="component-preview-title">下降趋势</div>
      <ClientOnly>
        <j-trend type="down">下降趋势</j-trend>
      </ClientOnly>
    </div>
  </div>
</div>

## 代码示例

```vue
<template>
  <j-trend type="up">上升趋势</j-trend>
  <j-trend type="down">下降趋势</j-trend>
</template>
```

## 自定义样式

可以自定义图标、文本和颜色。

<div class="component-preview-container">
  <div class="component-preview-item">
    <div class="component-preview-block" style="background-color:#f9f9f9">
      <div class="component-preview-title">自定义上升</div>
      <ClientOnly>
        <j-trend type="up" upIconColor="#f5222d" upTextColor="#f5222d">
          营收上升
        </j-trend>
      </ClientOnly>
    </div>
    <div class="component-preview-block" style="background-color:#f9f9f9">
      <div class="component-preview-title">自定义下降</div>
      <ClientOnly>
        <j-trend type="down" downIconColor="#52c41a" downTextColor="#52c41a">
          成本下降
        </j-trend>
      </ClientOnly>
    </div>
  </div>
</div>

```vue
<template>
  <j-trend type="up" upIconColor="#f5222d" upTextColor="#f5222d">
    营收上升
  </j-trend>
  <j-trend type="down" downIconColor="#52c41a" downTextColor="#52c41a">
    成本下降
  </j-trend>
</template>
```

## 颜色反转

通过设置 `reverseColor` 属性可以反转默认的颜色设置。

<div class="component-preview-container">
  <div class="component-preview-item">
    <div class="component-preview-block" style="background-color:#f9f9f9">
      <div class="component-preview-title">反转上升颜色</div>
      <ClientOnly>
        <j-trend type="up" reverseColor>上升趋势</j-trend>
      </ClientOnly>
    </div>
    <div class="component-preview-block" style="background-color:#f9f9f9">
      <div class="component-preview-title">反转下降颜色</div>
      <ClientOnly>
        <j-trend type="down" reverseColor>下降趋势</j-trend>
      </ClientOnly>
    </div>
  </div>
</div>

```vue
<template>
  <j-trend type="up" reverseColor>上升趋势</j-trend>
  <j-trend type="down" reverseColor>下降趋势</j-trend>
</template>
```

## 属性

| 属性名        | 说明             | 类型    | 默认值      |
| ------------- | ---------------- | ------- | ----------- |
| type          | 趋势类型         | string  | 'up'        |
| text          | 趋势文字         | string  | '上升'      |
| upIcon        | 上升趋势图标     | string  | 'ArrowUp'   |
| downIcon      | 下降趋势图标     | string  | 'ArrowDown' |
| reverseColor  | 是否反转颜色     | boolean | false       |
| upIconColor   | 上升趋势图标颜色 | string  | '#f5222d'   |
| downIconColor | 下降趋势图标颜色 | string  | '#52c41a'   |
| upTextColor   | 上升趋势文字颜色 | string  | '#000'      |
| downTextColor | 下降趋势文字颜色 | string  | '#000'      |

## 插槽

| 插槽名  | 说明                         |
| ------- | ---------------------------- |
| default | 趋势文字内容，替代 text 属性 |
