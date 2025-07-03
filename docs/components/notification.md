# 通知列表

通知列表组件是一个集成了图标、徽章与弹出层的组件，用于展示系统通知或消息列表。

## 按需引入

如果您只需要使用通知列表组件，可通过以下方式按需引入：

```javascript
// 在 main.js 或 main.ts 中引入
import notification from "justic-ui/notification";
import "justic-ui/notification/index.css";

// 注册组件
app.use(notification);
```

## 基础用法

通知列表组件结合了图标和徽章，悬停时显示自定义内容。

<div class="component-preview-container">
  <div class="component-preview-item">
    <div class="component-preview-block">
      <div class="component-preview-title">基本使用</div>
        <j-notification :value="3">
          <template #content>
            <div>您有3条未读消息</div>
          </template>
        </j-notification>
    </div>
  </div>
</div>

## 代码示例

```vue
<template>
  <j-notification :value="3">
    <template #content>
      <div>您有3条未读消息</div>
    </template>
  </j-notification>
</template>
```

## 自定义图标

可以自定义通知图标。

<div class="component-preview-container">
  <div class="component-preview-item">
    <div class="component-preview-block">
      <div class="component-preview-title">自定义图标</div>
        <j-notification :value="5" icon="Message">
          <template #content>
            <div>您有5条新邮件</div>
          </template>
        </j-notification>
    </div>
  </div>
</div>

```vue
<template>
  <j-notification :value="5" icon="Message">
    <template #content>
      <div>您有5条新邮件</div>
    </template>
  </j-notification>
</template>
```

## 红点提示

通过设置 `isDot` 属性可以将徽章显示为小红点。

<div class="component-preview-container">
  <div class="component-preview-item">
    <div class="component-preview-block">
      <div class="component-preview-title">红点提示</div>
        <j-notification :isDot="true">
          <template #content>
            <div>您有新的系统通知</div>
          </template>
        </j-notification>
    </div>
  </div>
</div>

```vue
<template>
  <j-notification :isDot="true">
    <template #content>
      <div>您有新的系统通知</div>
    </template>
  </j-notification>
</template>
```

## 设置最大值

通过 `max` 属性可以设置徽章显示的最大值。

<div class="component-preview-container">
  <div class="component-preview-item">
    <div class="component-preview-block">
      <div class="component-preview-title">最大值设置</div>
        <j-notification :value="120" :max="99">
          <template #content>
            <div>您有120条未读消息</div>
          </template>
        </j-notification>
    </div>
  </div>
</div>

```vue
<template>
  <j-notification :value="120" :max="99">
    <template #content>
      <div>您有120条未读消息</div>
    </template>
  </j-notification>
</template>
```

## 自定义通知内容

可以通过插槽自定义通知弹出层的内容。

<div class="component-preview-container">
  <div class="component-preview-item">
    <div class="component-preview-block">
      <div class="component-preview-title">简单自定义内容</div>
        <j-notification :value="3">
          <template #content>
            <div>
              <div style="font-weight: bold; margin-bottom: 10px; color: #3F6DEB">
                通知列表
              </div>
              <div style="border-bottom: 1px solid #eee; padding: 8px 0">
                系统升级通知：系统将于今晚22:00进行升级
              </div>
              <div style="border-bottom: 1px solid #eee; padding: 8px 0">
                安全提醒：请及时修改您的密码
              </div>
              <div style="padding: 8px 0">新功能上线：全新界面设计已发布</div>
            </div>
          </template>
        </j-notification>
    </div>
  </div>
</div>

```vue
<template>
  <j-notification :value="3">
    <template #content>
      <div>
        <div style="font-weight: bold; margin-bottom: 10px; color: #3F6DEB">
          通知列表
        </div>
        <div style="border-bottom: 1px solid #eee; padding: 8px 0">
          系统升级通知：系统将于今晚22:00进行升级
        </div>
        <div style="border-bottom: 1px solid #eee; padding: 8px 0">
          安全提醒：请及时修改您的密码
        </div>
        <div style="padding: 8px 0">新功能上线：全新界面设计已发布</div>
      </div>
    </template>
  </j-notification>
</template>
```

## 与列表组件结合使用

通知列表组件可以与 `j-list` 组件结合使用，创建更复杂的通知中心功能。

<script setup>
// 通知列表数据
const list = [
  {
    title: "通知",
    content: [
      {
        title: "系统管理员回复了您的邮件",
        time: "2023-05-08 14:33:18",
        avatar:
          "https://gw.alipayobjects.com/zos/rmsportal/ThXAXghbEsBCCSDihZxY.png",
      },
      {
        title: "项目经理邀请您参加会议",
        time: "2023-05-08 10:20:36",
        avatar:
          "https://gw.alipayobjects.com/zos/rmsportal/OKJXDXrmkNshAMvwtvhu.png",
      },
    ],
  },
  {
    title: "关注",
    content: [
      {
        avatar:
          "https://gw.alipayobjects.com/zos/rmsportal/fcHMVNCjPOsbUGdEduuv.jpeg",
        title: "用户A 评论了您",
        desc: "这是一条评论内容",
        time: "3小时前",
      },
    ],
  },
  {
    title: "代办",
    content: [
      {
        title: "需求评审会议",
        desc: "任务需要在 2023-05-12 20:00 前完成",
        tag: "未开始",
        tagType: "",
      },
      {
        title: "紧急代码更新",
        desc: "开发提交于 2023-05-06，需在 2023-05-07 前完成代码审核",
        tag: "马上到期",
        tagType: "danger",
      },
    ],
  },
];

// 操作按钮
const actions = [
  {
    text: "清空代办",
    icon: "delete",
  },
  {
    text: "查看更多",
    icon: "edit",
  },
];
</script>

<div class="component-preview-container">
  <div class="component-preview-item">
    <div class="component-preview-block">
      <div class="component-preview-title">高级通知中心</div>
        <j-notification :value="15" :max="30">
          <template #content>
            <j-list :list="list" :actions="actions"></j-list>
          </template>
        </j-notification>
    </div>
  </div>
</div>

```vue
<template>
  <j-notification :value="15" :max="30">
    <template #content>
      <j-list :list="list" :actions="actions"></j-list>
    </template>
  </j-notification>
</template>

<script setup>
// 通知数据
const list = [
  {
    title: "通知",
    content: [
      {
        title: "系统管理员回复了您的邮件",
        time: "2023-05-08 14:33:18",
        avatar:
          "https://gw.alipayobjects.com/zos/rmsportal/ThXAXghbEsBCCSDihZxY.png",
      },
      {
        title: "项目经理邀请您参加会议",
        time: "2023-05-08 10:20:36",
        avatar:
          "https://gw.alipayobjects.com/zos/rmsportal/OKJXDXrmkNshAMvwtvhu.png",
      },
    ],
  },
  {
    title: "关注",
    content: [
      {
        avatar:
          "https://gw.alipayobjects.com/zos/rmsportal/fcHMVNCjPOsbUGdEduuv.jpeg",
        title: "用户A 评论了您",
        desc: "这是一条评论内容",
        time: "3小时前",
      },
    ],
  },
  {
    title: "代办",
    content: [
      {
        title: "需求评审会议",
        desc: "任务需要在 2023-05-12 20:00 前完成",
        tag: "未开始",
        tagType: "",
      },
      {
        title: "紧急代码更新",
        desc: "开发提交于 2023-05-06，需在 2023-05-07 前完成代码审核",
        tag: "马上到期",
        tagType: "danger",
      },
    ],
  },
];

// 操作按钮
const actions = [
  {
    text: "清空代办",
    icon: "delete",
  },
  {
    text: "查看更多",
    icon: "edit",
  },
];
</script>
```

## 自定义触发方式

通过 `trigger` 属性可以设置通知弹出层的触发方式。

<div class="component-preview-container">
  <div class="component-preview-item">
    <div class="component-preview-block">
      <div class="component-preview-title">点击触发</div>
        <j-notification :value="3" trigger="click">
          <template #content>
            <div>点击图标触发显示</div>
          </template>
        </j-notification>
    </div>
  </div>
</div>

```vue
<template>
  <j-notification :value="3" trigger="click">
    <template #content>
      <div>点击图标触发显示</div>
    </template>
  </j-notification>
</template>
```

## 属性

| 属性名    | 说明             | 类型            | 默认值      |
| --------- | ---------------- | --------------- | ----------- |
| icon      | 图标名称         | string          | 'Bell'      |
| value     | 显示的值         | number / string | ''          |
| max       | 最大值           | number          | 99          |
| isDot     | 是否显示为小红点 | boolean         | false       |
| trigger   | 触发方式         | string          | 'hover'     |
| width     | 弹出层宽度       | number          | 300         |
| placement | 弹出层位置       | string          | 'top-start' |

## 插槽

| 插槽名  | 说明         |
| ------- | ------------ |
| content | 弹出层的内容 |
| default | 默认内容     |

## 事件

| 事件名 | 说明           | 回调参数 |
| ------ | -------------- | -------- |
| show   | 显示弹出层触发 | -        |
| hide   | 隐藏弹出层触发 | -        |
