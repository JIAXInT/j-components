<template>
  <div>
    <j-notification :value="15" :max="30" trigger="click">默认 </j-notification>
    <br /><br />
    <j-notification :value="60" :max="30" @show="console.log('show')"
      >设置最大值</j-notification
    >
    <br /><br />
    <j-notification :value="15" :max="30" :is-dot="true"> 圆点</j-notification>
    <br /><br />
    <j-notification icon="ChatRound" :value="15" :max="30" :is-dot="true">
      自定义设置图标
    </j-notification>
    <br /><br />
    <j-notification :value="15" :max="30">
      <template #content>
        <j-list :list="list" :actions="actions"></j-list
      ></template>
    </j-notification>
  </div>
</template>

<script setup lang="ts">
// 原代码使用了错误的导入语法，应使用花括号进行解构导入
import { list, actions } from "./data.ts";
</script>

<style scoped lang="scss"></style>
