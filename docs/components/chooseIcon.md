# 图标选择器

图标选择器组件用于从预设的图标库中选择图标。

## 按需引入

```javascript
import { createApp } from "vue";
import chooseIcon from "justic-ui/chooseIcon";
import "justic-ui/chooseIcon/index.css";

const app = createApp();
app.use(chooseIcon);
```

## 基础用法

<div class="component-preview-container">
  <div class="component-preview-item">
    <div class="component-preview-block">
      <div class="component-preview-title">基础用法</div>
        <j-choose-icon title="选择图标" v-model:visible="visible">
            选择图标
        </j-choose-icon>
    </div>

  </div>
</div>

<script setup>
import { ref } from "vue";

const visible = ref(false);
</script>

```vue
<template>
  <j-choose-icon title="选择图标" v-model:visible="visible">
    <template #trigger>
      <el-button type="primary">选择图标</el-button>
    </template>
  </j-choose-icon>
</template>

<script setup>
import { ref } from "vue";

const visible = ref(false);
</script>
```

## 属性

| 属性名  | 说明           | 类型    | 默认值     |
| ------- | -------------- | ------- | ---------- |
| title   | 标题           | string  | '选择图标' |
| visible | 是否显示对话框 | boolean | false      |

## 事件

| 事件名 | 说明           | 回调参数                      |
| ------ | -------------- | ----------------------------- |
| change | 选择图标后触发 | (icon: string) 选中的图标名称 |

## 插槽

| 插槽名  | 说明       |
| ------- | ---------- |
| trigger | 触发器内容 |
