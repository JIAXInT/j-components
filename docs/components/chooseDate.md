# 日期选择器

日期选择器是一个便捷的组件，提供开始日期和结束日期两个选择器，支持日期范围的选择和联动限制。

## 按需引入

如果您只需要使用日期选择器组件，可通过以下方式按需引入：

```javascript
// 在 main.js 或 main.ts 中引入
import chooseDate from "justic-ui/chooseDate";
import "justic-ui/chooseDate/index.css";

// 注册组件
app.use(chooseDate);
```

## 基础用法

组件默认提供两个日期选择器，用于选择开始日期和结束日期，支持日期范围的选择。

<div style="padding:1.5em;margin:1.5em 0;border-radius:8px;box-shadow:0 2px 12px rgba(0,0,0,0.1);background-color:#fff">
  <div style="display:flex;flex-direction:column;align-items:center;padding:1em">
    <div style="margin-bottom:0.5em;font-size:14px;color:#666">基础日期选择器</div>
    <ClientOnly>
      <j-choose-date 
        @startChange="startChange" 
        @endChange="endChange">
      </j-choose-date>
    </ClientOnly>
  </div>
</div>

<script setup>
const startChange = (value) => {
  console.log('开始日期：', value);
};

const endChange = (value) => {
  console.log('日期范围：', value);
};
</script>

## 代码示例

```vue
<template>
  <j-choose-date @startChange="startChange" @endChange="endChange">
  </j-choose-date>
</template>

<script setup>
const startChange = (value) => {
  console.log("开始日期：", value);
};

const endChange = (value) => {
  console.log("日期范围：", value);
  // value 的格式为：{ startDate: Date, endDate: Date }
};
</script>
```

## 自定义占位文本

您可以自定义开始日期和结束日期选择器的占位文本。

<div style="padding:1.5em;margin:1.5em 0;border-radius:8px;box-shadow:0 2px 12px rgba(0,0,0,0.1);background-color:#fff">
  <div style="display:flex;flex-direction:column;align-items:center;padding:1em">
    <div style="margin-bottom:0.5em;font-size:14px;color:#666">自定义占位文本</div>
    <ClientOnly>
      <j-choose-date
        startPlaceholder="入职日期"
        endPlaceholder="离职日期">
      </j-choose-date>
    </ClientOnly>
  </div>
</div>

```vue
<template>
  <j-choose-date startPlaceholder="入职日期" endPlaceholder="离职日期">
  </j-choose-date>
</template>
```

## 允许选择今天之前的日期

默认情况下，日期选择器会禁用今天之前的日期，您可以通过设置 `disabledBeforeToday` 属性为 `false` 来允许选择历史日期。

<div style="padding:1.5em;margin:1.5em 0;border-radius:8px;box-shadow:0 2px 12px rgba(0,0,0,0.1);background-color:#fff">
  <div style="display:flex;flex-direction:column;align-items:center;padding:1em">
    <div style="margin-bottom:0.5em;font-size:14px;color:#666">允许选择历史日期</div>
    <ClientOnly>
      <j-choose-date :disabledBeforeToday="false">
      </j-choose-date>
    </ClientOnly>
  </div>
</div>

```vue
<template>
  <j-choose-date :disabledBeforeToday="false"> </j-choose-date>
</template>
```

## 属性

| 属性名              | 说明                       | 类型    | 默认值           |
| ------------------- | -------------------------- | ------- | ---------------- |
| startPlaceholder    | 开始日期选择器的占位文本   | string  | '请选择开始日期' |
| endPlaceholder      | 结束日期选择器的占位文本   | string  | '请选择结束日期' |
| disabledBeforeToday | 是否禁用选择今天之前的日期 | boolean | true             |

## 事件

| 事件名      | 说明               | 回调参数                                           |
| ----------- | ------------------ | -------------------------------------------------- |
| startChange | 开始日期变化时触发 | (value: Date) 选择的开始日期                       |
| endChange   | 结束日期变化时触发 | (value: {startDate: Date, endDate: Date}) 日期范围 |

## 返回值数据格式

日期选择器组件通过事件返回以下数据格式：

### startChange 事件

| 字段  | 说明     | 类型 | 示例                                 |
| ----- | -------- | ---- | ------------------------------------ |
| value | 选中日期 | Date | new Date('2023-07-15T00:00:00.000Z') |

### endChange 事件

返回一个包含开始日期和结束日期的对象：

| 字段      | 说明     | 类型 | 示例                                 |
| --------- | -------- | ---- | ------------------------------------ |
| startDate | 开始日期 | Date | new Date('2023-07-15T00:00:00.000Z') |
| endDate   | 结束日期 | Date | new Date('2023-07-20T00:00:00.000Z') |

### 示例数据

```javascript
// startChange 事件返回值
new Date('2023-07-15T00:00:00.000Z')

// endChange 事件返回值
{
  startDate: new Date('2023-07-15T00:00:00.000Z'),
  endDate: new Date('2023-07-20T00:00:00.000Z')
}
```

## 特性说明

- 开始日期选择器和结束日期选择器联动，选择开始日期后，结束日期选择器才可用
- 开始日期限制了结束日期的最小值，结束日期只能选择开始日期之后的日期
- 默认情况下，开始日期选择器禁用今天之前的日期，可通过 `disabledBeforeToday` 属性修改
- 可以通过 `v-bind="$attrs.startOptions!"` 和 `v-bind="$attrs.endOptions!"` 设置更多 Element Plus 的 el-date-picker 属性
