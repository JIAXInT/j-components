<template>
  <el-form
    ref="form"
    :model="model"
    :rules="rules"
    v-bind="$attrs"
    :validate-on-rule-change="false"
  >
    <template v-for="(item, index) in options" :key="index">
      <el-form-item
        v-if="!item.children || !item.children!.length"
        :label="item.label"
        :prop="item.prop"
      >
        <component
          v-if="item.type !== 'upload' && item.type !== 'editor'"
          v-bind="item.attrs"
          :is="`el-${item.type}`"
          v-model="model[item.prop!]"
        ></component>
        <!-- 上传组件 -->
        <el-upload
          v-if="item.type === 'upload'"
          v-bind="item.uploadAttrs"
          :on-preview="onPreview"
          :on-remove="onRemove"
          :on-success="onSuccess"
          :on-error="onError"
          :on-change="onChange"
          :on-progress="onProgress"
          :before-remove="beforeRemove"
          :before-upload="beforeUpload"
          :http-request="httpRequest"
          :on-exceed="onExceed"
        >
          <slot name="uploadArea"> </slot>
          <slot name="uploadTip"> </slot>
        </el-upload>
        <!-- 富文本编辑器 -->
        <div v-if="item.type === 'editor'" id="editor"></div>
      </el-form-item>
      <el-form-item
        v-if="item.children && item.children.length"
        :label="item.label"
        :prop="item.prop"
      >
        <component
          v-bind="item.attrs"
          :is="`el-${item.type}`"
          v-model="model[item.prop!]"
        >
          <component
            v-for="(child, i) in item.children"
            :key="i"
            :label="child.label"
            :value="child.value"
            :is="`el-${child.type}`"
          >
          </component>
        </component>
      </el-form-item>
    </template>

    <el-form-item>
      <slot name="action" :form="form" :model="model"></slot>
    </el-form-item>
  </el-form>
</template>

<script setup lang="ts">
import { nextTick, onMounted, ref, watch, type PropType } from "vue";
import type { FormOptions } from "./typs/type";
import { cloneDeep } from "lodash";
import type { FormInstance, UploadProps } from "element-plus";
import E from "wangeditor";

let emits = defineEmits([
  "on-preview",
  "on-remove",
  "on-success",
  "on-error",
  "on-change",
  "on-progress",
  "before-remove",
  "before-upload",
  "on-exceed",
]);

/**
 * 表单组件的属性定义
 * @property {FormOptions[]} options - 表单配置项数组，每个元素定义了一个表单项的配置
 */
let props = defineProps({
  // 表单的配置项
  // 每个配置项包含以下属性:
  // - type: 表单组件类型(如input, select等)
  // - value: 默认值
  // - label: 标签文本
  // - prop: 字段名
  // - rules: 验证规则
  // - attrs: 额外属性
  options: {
    type: Array as PropType<FormOptions[]>,
    required: true,
  },
  // 用户自定义上传方法
  httpRequest: {
    type: Function as PropType<UploadProps["httpRequest"]>,
    required: false,
  },
});

let model = ref<any>({});
let rules = ref<any>({});
let form = ref<FormInstance | null>();
let edit = ref();

/**
 * 初始化表单数据和验证规则
 * 根据props.options配置初始化model和rules
 */
let initForm = () => {
  if (props.options && props.options.length) {
    let m: any = {};
    let r: any = {};
    props.options.map((item: FormOptions) => {
      // 设置每个字段的初始值
      m[item.prop!] = item.value;
      // 设置每个字段的验证规则
      r[item.prop!] = item.rules;
      if (item.type === "editor") {
        // 初始化富文本编辑器
        nextTick(() => {
          if (document.getElementById("editor")) {
            const editor = new E("#editor");
            editor.config.placeholder = item.placeholder!;
            editor.create();
            editor.txt.html(item.value); // 初始化编辑器内容为传入的value值
            editor.config.onchange = (newHtml: string) => {
              model.value[item.prop!] = newHtml;
            };
            edit.value = editor;
          }
        });
      }
    });
    // 使用深拷贝避免引用问题
    model.value = cloneDeep(m);
    rules.value = cloneDeep(r);
  }
};

// 重置表单
let resetFields = () => {
  // 重置element-plus的表单
  form.value?.resetFields();
  // 重置富文本编辑器的内容
  if (props.options && props.options.length) {
    let editorItem = props.options.find((item) => item.type === "editor");
    edit.value.txt.html(editorItem?.value || "");
  }
};

// 表单验证
let validate = () => {
  return form.value?.validate();
};

// 获取表单数据
let getFormData = () => {
  return model.value;
};

// 分发方法
defineExpose({
  resetFields,
  validate,
  getFormData,
});

// 组件挂载时初始化表单
onMounted(() => {
  initForm();
});

// 监听options变化，重新初始化表单
watch(
  () => props.options,
  () => {
    initForm();
  },
  {
    deep: true, // 深度监听，确保能检测到数组和对象内部的变化
  }
);

// 上传组件的所有方法
let onPreview = (file: File) => {
  emits("on-preview", file);
};
let onRemove = (file: File) => {
  emits("on-remove", file);
};
let onSuccess = (response: any, file: File, fileList: FileList) => {
  // 上传文件
  let uploadItem = props.options.find((item) => item.type === "upload")!;
  model.value[uploadItem.prop!] = fileList;
  emits("on-success", response, file, fileList);
};
let onError = (err: any, file: File, fileList: FileList) => {
  emits("on-error", err, file, fileList);
};
let onChange = (file: File, fileList: FileList) => {
  emits("on-change", file, fileList);
};
let onProgress = (event: any, file: File, fileList: FileList) => {
  emits("on-progress", event, file, fileList);
};
let beforeRemove = (instance: any, file: File) => {
  emits("before-remove", instance, file);
};
let beforeUpload = (file: File) => {
  emits("before-upload", file);
};

let onExceed = (files: File, fileList: FileList) => {
  emits("on-exceed", files, fileList);
};
</script>

<style scoped lang="scss"></style>
