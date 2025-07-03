# 时间选择器

时间选择器是一个便捷的组件，提供开始时间和结束时间两个选择器，支持时间段的选择和联动限制。

## 按需引入

如果您只需要使用时间选择器组件，可通过以下方式按需引入：

```javascript
// 在 main.js 或 main.ts 中引入
import chooseTime from "justic-ui/chooseTime";
import "justic-ui/chooseTime/index.css";

// 注册组件
app.use(chooseTime);
```

## 基础用法

组件默认提供两个时间选择器，用于选择开始时间和结束时间，支持时间段的选择。

<div style="padding:1.5em;margin:1.5em 0;border-radius:8px;box-shadow:0 2px 12px rgba(0,0,0,0.1);background-color:#fff">
  <div style="display:flex;flex-direction:column;align-items:center;padding:1em">
    <div style="margin-bottom:0.5em;font-size:14px;color:#666">基础时间选择器</div>
      <j-choose-time 
        @startChange="startChange" 
        @endChange="endChange">
      </j-choose-time>
  </div>
</div>

<script setup>
const startChange = (value) => {
  console.log('开始时间：', value);
};

const endChange = (value) => {
  console.log('时间范围：', value);
};
</script>

## 代码示例

```vue
<template>
  <j-choose-time @startChange="startChange" @endChange="endChange">
  </j-choose-time>
</template>

<script setup>
const startChange = (value) => {
  console.log("开始时间：", value);
};

const endChange = (value) => {
  console.log("时间范围：", value);
  // value 的格式为：{ startTime: '08:30', endTime: '09:45' }
};
</script>
```

## 自定义占位文本

您可以自定义开始时间和结束时间选择器的占位文本。

<div style="padding:1.5em;margin:1.5em 0;border-radius:8px;box-shadow:0 2px 12px rgba(0,0,0,0.1);background-color:#fff">
  <div style="display:flex;flex-direction:column;align-items:center;padding:1em">
    <div style="margin-bottom:0.5em;font-size:14px;color:#666">自定义占位文本</div>
    
      <j-choose-time
        startPlaceholder="上班时间"
        endPlaceholder="下班时间"
      >
      </j-choose-time>
    
  </div>
</div>

```vue
<template>
  <j-choose-time startPlaceholder="上班时间" endPlaceholder="下班时间">
  </j-choose-time>
</template>
```

## 自定义时间范围

您可以自定义开始时间和结束时间的可选范围和时间间隔。

<div style="padding:1.5em;margin:1.5em 0;border-radius:8px;box-shadow:0 2px 12px rgba(0,0,0,0.1);background-color:#fff">
  <div style="display:flex;flex-direction:column;align-items:center;padding:1em">
    <div style="margin-bottom:0.5em;font-size:14px;color:#666">自定义时间范围</div>
    
      <j-choose-time
        startTimeStart="07:00"
        startTimeEnd="12:00"
        endTimeStart="12:30"
        endTimeEnd="19:00"
        startStep="00:30"
        endStep="00:30"
      >
      </j-choose-time>
    
  </div>
</div>

```vue
<template>
  <j-choose-time
    startTimeStart="07:00"
    startTimeEnd="12:00"
    endTimeStart="12:30"
    endTimeEnd="19:00"
    startStep="00:30"
    endStep="00:30"
  >
  </j-choose-time>
</template>
```

## 属性

| 属性名           | 说明                         | 类型   | 默认值     |
| ---------------- | ---------------------------- | ------ | ---------- |
| startPlaceholder | 开始时间选择器的占位文本     | string | '开始时间' |
| endPlaceholder   | 结束时间选择器的占位文本     | string | '结束时间' |
| startTimeStart   | 开始时间选择器的最早可选时间 | string | '08:30'    |
| startTimeEnd     | 开始时间选择器的最晚可选时间 | string | '18:30'    |
| startStep        | 开始时间选择器的时间间隔     | string | '00:15'    |
| endTimeStart     | 结束时间选择器的最早可选时间 | string | '08:30'    |
| endTimeEnd       | 结束时间选择器的最晚可选时间 | string | '18:30'    |
| endStep          | 结束时间选择器的时间间隔     | string | '00:15'    |

## 事件

| 事件名      | 说明               | 回调参数                                                         |
| ----------- | ------------------ | ---------------------------------------------------------------- |
| startChange | 开始时间变化时触发 | (value: string) 选择的开始时间                                   |
| endChange   | 结束时间变化时触发 | (value: {startTime: string, endTime: string}) 开始时间和结束时间 |

## 特性说明

- 开始时间选择器和结束时间选择器联动，选择开始时间后，结束时间选择器才可用
- 开始时间限制了结束时间的最小值，结束时间限制了开始时间的最大值
- 可以通过 `v-bind="$attrs.startOptions!"` 和 `v-bind="$attrs.endOptions!"` 设置更多 Element Plus 的 el-time-select 属性

## 返回值数据格式

时间选择器组件通过事件返回以下数据格式：

### startChange 事件

| 字段  | 说明     | 类型   | 示例    |
| ----- | -------- | ------ | ------- |
| value | 选中时间 | string | '08:30' |

### endChange 事件

返回一个包含开始时间和结束时间的对象：

| 字段      | 说明     | 类型   | 示例    |
| --------- | -------- | ------ | ------- |
| startTime | 开始时间 | string | '08:30' |
| endTime   | 结束时间 | string | '09:45' |

### 示例数据

```javascript
// startChange 事件返回值
'08:30'

// endChange 事件返回值
{
  startTime: '08:30',
  endTime: '09:45'
}
```
