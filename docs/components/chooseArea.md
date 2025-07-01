# 地区选择

地区选择组件用于选择中国的省市区，支持多种配置选项。

## 按需引入

```javascript
import { createApp } from "vue";
import chooseArea from "justic-ui/chooseArea";
import "justic-ui/chooseArea/index.css";

const app = createApp();
app.use(chooseArea);
```

## 基础用法

<div class="component-preview-container">
  <div class="component-preview-item">
    <div class="component-preview-block">
      <div class="component-preview-title">基础用法</div>
      <ClientOnly>
        <j-choose-area @change="changeArea" />
      </ClientOnly>
    </div>
    <div class="component-preview-block">
      <div class="component-preview-title">返回值示例：</div>
      省份：{{ provinceData }} <br />
      城市：{{ cityData }} <br />
      区域：{{ areaData }}
    </div>
  </div>
</div>

<script setup >
import { ref } from 'vue'
let provinceData = ref('选择区域后获取')
let cityData = ref('选择区域后获取')
let areaData = ref('选择区域后获取')
let changeArea = (value) => {
  provinceData.value = value.provinceData
  cityData.value = value.cityData
  areaData.value = value.areaData
  console.log(value);
};
</script>

```vue
<template>
  <ClientOnly>
    <j-choose-area @change="changeArea" />
  </ClientOnly>
</template>

<script setup lang="ts">
let changeArea = (value: any) => {
  console.log(value);
};
</script>
```

## 配置选项

您可以通过以下属性自定义地区选择组件的行为：

| 属性名      | 说明           | 类型   | 默认值                                     |
| ----------- | -------------- | ------ | ------------------------------------------ |
| placeholder | 输入框占位文本 | array  | ['请选择省份', '请选择城市', '请选择区域'] |
| areaData    | 地区数据       | object | 中国省市区数据                             |
| separator   | 分隔符         | string | '/'                                        |

## 事件

| 事件名 | 说明             | 回调参数                          |
| ------ | ---------------- | --------------------------------- |
| change | 选择项变化时触发 | (value: array) 选中的省市区值数组 |

## 方法

| 方法名      | 说明                   | 参数 |
| ----------- | ---------------------- | ---- |
| getAreaData | 获取当前选择的地区数据 | -    |
