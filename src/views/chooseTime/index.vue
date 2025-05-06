<template>
  <div>
    <j-choose-time
      @startChange="startChange"
      @endChange="endChange"
    ></j-choose-time>
    <br /><br />
    <j-choose-date @startChange="dateStartChange"></j-choose-date>
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

let dateStartChange = (value: string) => {
  console.log(value);
};
</script>

<style scoped lang="scss"></style>
