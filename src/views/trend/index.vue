<template>
  <div class="flex">
    <j-trend text="营业额"></j-trend>
    <j-trend text="销售额" type="down"> 销售营业</j-trend>

    <j-trend text="营业额" upTextColor="blue" upIcon="Avatar"></j-trend>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.flex {
  display: flex;
}
</style>
