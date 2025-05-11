<template>
  <div :class="{ 'j-choose-icon-dialog-body-height': isScroll }">
    <el-dialog v-model="dialogVisible" v-bind="$attrs">
      <template #default>
        <j-form
          ref="form"
          :options="options"
          label-width="100px"
          @on-preview="onPreview"
          @on-remove="onRemove"
          @on-exceed="onExceed"
          @before-remove="beforeRemove"
          @on-success="onSuccess"
          @on-change="onChange"
        >
          <template #uploadArea>
            <slot name="uploadArea"> </slot>
          </template>
          <template #uploadTip>
            <slot name="uploadTip"> </slot>
          </template>
        </j-form>
      </template>
      <template #footer>
        <slot name="footer" :form="form"> </slot>
      </template>
    </el-dialog>
  </div>
</template>

<script setup lang="ts">
import { ref, watch, type PropType } from "vue";
import type { FormOptions } from "../../form/src/typs/type";
import type { FormInstance } from "element-plus";

// 表单实例
let form = ref<FormInstance | null>();

let props = defineProps({
  visible: {
    type: Boolean,
    default: false,
  },
  options: {
    type: Array as PropType<FormOptions[]>,
    required: true,
  },
  //   只在屏幕区域内滚动
  isScroll: {
    type: Boolean,
    default: false,
  },
  //   处理上传的事件
  onChange: {
    type: Function,
  },
  onSuccess: {
    type: Function,
  },
  beforeRemove: {
    type: Function,
  },
  onExceed: {
    type: Function,
  },
  onRemove: {
    type: Function,
  },
  onPreview: {
    type: Function,
  },
});

let emits = defineEmits(["update:visible"]);

let dialogVisible = ref<boolean>(props.visible);

watch(
  () => props.visible,
  (newValue) => {
    dialogVisible.value = newValue;
  }
);

watch(
  () => dialogVisible.value,
  (newValue) => {
    emits("update:visible", newValue);
  }
);
</script>

<style scoped lang="scss"></style>
