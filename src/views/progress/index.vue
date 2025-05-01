<template>
  <div>
    <j-progress isAnimate :percentage="60"></j-progress>
    <br />
    <j-progress
      isAnimate
      status="success"
      :stroke-width="20"
      :percentage="60"
    ></j-progress>
    <br />
    <j-progress
      :time="5000"
      type="circle"
      isAnimate
      :percentage="60"
    ></j-progress>
  </div>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped></style>
