<template>
  <div>
    <j-form
      ref="form"
      label-width="100px"
      :options="options"
      multiple
      @on-preview="handlePreview"
      @on-remove="handleRemove"
      @on-exceed="handleExceed"
      @before-remove="beforeRemove"
      @on-success="handleSuccess"
    >
      <template #uploadArea>
        <el-button type="primary">提交</el-button>
      </template>
      <template #uploadTip>
        <div style="color: #ccc; font-size: 12px">
          文件大小不能超过 2MB，支持格式：jpg、png、jpeg、gif
        </div>
      </template>
      <template #action="scope">
        <el-button type="primary" @click="submitForm(scope)"> 提交 </el-button>
        <el-button @click="resetForm()">重置</el-button>
      </template>
    </j-form>
  </div>
</template>

<script setup lang="ts">
import {
  ElMessage,
  ElMessageBox,
  type FormInstance,
  type UploadProps,
} from "element-plus";
import type { FormOptions } from "../../components/form/src/typs/type";
import { ref } from "vue";

interface Scope {
  form: FormInstance;
  model: any;
}

let form = ref();

let options: FormOptions[] = [
  {
    type: "input",
    value: "",
    label: "姓名",
    placeholder: "请输入姓名",
    prop: "username",
    rules: [
      {
        required: true,
        message: "姓名不能为空",
        trigger: "blur",
      },
      {
        min: 2,
        max: 10,
        message: "姓名长度在 2 到 10 个字符",
        trigger: "blur",
      },
    ],
  },
  // password
  {
    type: "input",
    value: "",
    label: "密码",
    placeholder: "请输入密码",
    prop: "password",
    rules: [
      {
        required: true,
        message: "密码不能为空",
        trigger: "blur",
      },
      {
        min: 6,
        max: 12,
        message: "密码长度在 6 到 12 个字符",
        trigger: "blur",
      },
    ],
    attrs: {
      showPassword: true, // 是否显示密码
      clearable: true, // 是否显示清除按钮
    },
  },
  {
    type: "select",
    value: "",
    placeholder: "请选择职位",
    prop: "role",
    label: "职位",
    attrs: {
      clearable: true, // 是否显示清除按钮
      style: {
        width: "50%",
      },
    },
    rules: [
      {
        required: true,
        message: "职位不能为空",
        trigger: "blur",
      },
    ],
    children: [
      {
        type: "option",
        label: "普通用户",
        value: "1",
      },
      {
        type: "option",
        label: "管理员",
        value: "2",
      },
      {
        type: "option",
        label: "超级管理员",
        value: "3",
      },
    ],
  },
  {
    type: "checkbox-group",
    value: [],
    prop: "like",
    label: "爱好",
    rules: [
      {
        required: true,
        message: "爱好不能为空",
        trigger: "blur",
      },
    ],
    children: [
      {
        type: "checkbox",
        label: "篮球",
        value: "1",
      },
      {
        type: "checkbox",
        label: "足球",
        value: "2",
      },
      {
        type: "checkbox",
        label: "排球",
        value: "3",
      },
    ],
  },
  {
    type: "radio-group",
    value: "",
    prop: "gender",
    label: "性别",
    rules: [
      {
        required: true,
        message: "性别不能为空",
        trigger: "blur",
      },
    ],
    children: [
      {
        type: "radio",
        label: "男",
        value: "1",
      },
      {
        type: "radio",
        label: "女",
        value: "2",
      },
    ],
  },
  {
    type: "upload",
    label: "上传头像",
    prop: "avatar",
    uploadAttrs: {
      // action: "https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15",
      action: "https://jsonplaceholder.typicode.com/posts/",
      multiple: true,
      limit: 3,
    },
    // rules: [
    //   {
    //     required: true,
    //     message: "头像不能为空",
    //     trigger: "blur",
    //   },
    // ],
  },
  {
    type: "editor",
    value: "ffaafw ",
    prop: "desc",
    label: "描述",
    placeholder: "请输入描述",
    rules: [
      {
        required: true,
        message: "描述不能为空",
        trigger: "blur",
      },
    ],
  },
];

let submitForm = (scope: Scope) => {
  console.log(scope);

  scope.form.validate((valid) => {
    if (valid) {
      ElMessage.success("表单验证通过");
      console.log("submit", scope.model);
    } else {
      ElMessage.error("表单验证失败");
    }
  });
};

// 重置表单
let resetForm = () => {
  form.value.resetFields();
};

const handleRemove: UploadProps["onRemove"] = (file, uploadFiles) => {
  console.log("handleRemove");
  console.log(file, uploadFiles);
};

const handlePreview: UploadProps["onPreview"] = (uploadFile) => {
  console.log("handlePreview");
  console.log(uploadFile);
};

const handleExceed: UploadProps["onExceed"] = (files, uploadFiles) => {
  console.log("handleExceed");
  ElMessage.warning(
    `The limit is 3, you selected ${files.length} files this time, add up to ${
      files.length + uploadFiles.length
    } totally`
  );
};

const beforeRemove: UploadProps["beforeRemove"] = (uploadFile, uploadFiles) => {
  console.log("beforeRemove");
  return ElMessageBox.confirm(
    `Cancel the transfer of ${uploadFile.name} ?`
  ).then(
    () => true,
    () => false
  );
};

const handleSuccess: UploadProps["onSuccess"] = (response, uploadFile) => {
  console.log("handleSuccess");
  console.log(response, uploadFile);
};
</script>

<style scoped lang="scss"></style>
