<template>
  <div>
    <!-- <j-notification :value="15" :max="30"></j-notification>
    <br /><br />
    <j-notification :value="60" :max="30"></j-notification>
    <br /><br />
    <j-notification :value="15" :max="30" :is-dot="true"></j-notification>
    <br /><br />
    <j-notification
      icon="ChatRound"
      :value="15"
      :max="30"
      :is-dot="true"
    ></j-notification> -->
    <j-notification :value="15" :max="30">
      <template #content>
        <j-list :list="list" :actions="actions"></j-list>
      </template>
    </j-notification>
  </div>
</template>

<script setup lang="ts">
// 原代码使用了错误的导入语法，应使用花括号进行解构导入
import { list, actions } from "./data.ts";
</script>

<style scoped lang="scss"></style>
