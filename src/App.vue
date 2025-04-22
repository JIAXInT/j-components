import router from './router/index';
<template>
  <router-view></router-view>
</template>

<script setup lang="ts"></script>

<style lang="scss">
@import "./styles//ui";

* {
  margin: 0;
  padding: 0;
}

svg {
  width: 1em;
  height: 1em;
}

html,
body,
#app {
  height: 100%;
}

.el-container,
.el-menu {
  height: 100%;
}
</style>
