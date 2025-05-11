<template>
  <div>
    <el-button type="primary" @click="open">Open</el-button>
    <j-model-form
      isScroll
      v-model:visible="visible"
      title="编辑用户"
      width="50%"
      :options="options"
      :on-change="handleChange"
      :on-success="handleSuccess"
    >
      <template #footer="{ form }">
        <el-button type="primary" @click="confirm(form)"> 确定 </el-button>
        <el-button @click="cancel(form)">取消</el-button>
      </template>
      <template #uploadArea>
        <el-button type="primary">提交</el-button>
      </template>
      <template #uploadTip>
        <div style="color: #ccc; font-size: 12px">
          文件大小不能超过 2MB，支持格式：jpg、png、jpeg、gif
        </div>
      </template>
    </j-model-form>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import type { FormOptions } from "../../components/form/src/typs/type";
import { ElMessage, type FormInstance } from "element-plus";

let visible = ref<boolean>(false);

let open = () => {
  visible.value = true;
};

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
        trigger: "change",
      },
      {
        min: 2,
        max: 10,
        message: "姓名长度在 2 到 10 个字符",
        trigger: "change",
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
        trigger: "change",
      },
      {
        min: 6,
        max: 12,
        message: "密码长度在 6 到 12 个字符",
        trigger: "change",
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
        trigger: "change",
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
        trigger: "change",
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
        trigger: "change",
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
    //     trigger: "change",
    //   },
    // ],
  },
  {
    type: "editor",
    value: "",
    prop: "desc",
    label: "描述",
    placeholder: "请输入描述",
    rules: [
      {
        required: true,
        message: "描述不能为空",
        trigger: "change",
      },
    ],
  },
];

let confirm = (form: any) => {
  let validate = form.validate();
  let model = form.getFormData();
  // 表单验证
  validate((valid: any) => {
    if (valid) {
      ElMessage.success("提交成功");
      console.log(model);
    } else {
      ElMessage.error("提交失败");
    }
  });
};

let cancel = (form: FormInstance) => {
  visible.value = false;
};

let handleChange = (form: FormInstance) => {
  console.log(form);
};

let handleSuccess = (form: FormInstance) => {
  console.log(form);
};
</script>

<style scoped lang="scss"></style>
