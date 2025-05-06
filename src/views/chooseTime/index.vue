<template>
  <div>
    <j-choose-time
      @startChange="startChange"
      @endChange="endChange"
    ></j-choose-time>
  </div>
</template>

<script setup lang="ts">
interface endValue {
  startTime: string;
  endTime: string;
}

let startChange = (value: string) => {
  console.log(value);
};

let endChange = (value: endValue) => {
  console.log(value);
};
</script>

<style scoped lang="scss"></style>
