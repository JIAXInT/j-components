<template>
  <!-- 省市区三级联动选择器容器 -->
  <div class="container">
    <!-- 省份选择器 -->
    <component
      :is="
        h(ElSelect, {
          placeholder: '请选择省份',
          modelValue: province,
          'onUpdate:modelValue': (val) => (province = val),
          ...($attrs.provinceOptions || {}),
        })
      "
    >
      <component
        v-for="item in allAreas"
        :key="item.code"
        :is="
          h(ElOption, {
            value: item.code,
            label: item.name,
          })
        "
      />
    </component>

    <!-- 城市选择器 -->
    <component
      :is="
        h(ElSelect, {
          placeholder: '请选择城市',
          modelValue: city,
          'onUpdate:modelValue': (val) => (city = val),
          disabled: !province,
          ...($attrs.cityOptions || {}),
        })
      "
    >
      <component
        v-for="item in selectCity"
        :key="item.code"
        :is="
          h(ElOption, {
            value: item.code,
            label: item.name,
          })
        "
      />
    </component>

    <!-- 区域选择器 -->
    <component
      :is="
        h(ElSelect, {
          placeholder: '请选择区域',
          modelValue: area,
          'onUpdate:modelValue': (val) => (area = val),
          disabled: !province || !city,
          ...($attrs.areaOptions || {}),
        })
      "
    >
      <component
        v-for="item in selectArea"
        :key="item.code"
        :is="
          h(ElOption, {
            value: item.code,
            label: item.name,
          })
        "
      />
    </component>
  </div>
</template>

<script setup lang="ts">
import { watch, ref, h, getCurrentInstance } from "vue";
import { ElSelect, ElOption } from "element-plus";
// 导入省市区JSON数据
import allAreas from "../lib/pca-code.json";

// 获取组件实例
const vm = getCurrentInstance();

export interface AreaItem {
  name: string;
  code: string;
  children?: AreaItem[];
}

export interface AreaData {
  name: string; // 名称
  code: string; // 编码
}

// 省市区选择值
let province = ref<string>();
let city = ref<string>();
let area = ref<string>();

// 当前可选的市和区列表
let selectCity = ref<AreaItem[]>([]);
let selectArea = ref<AreaItem[]>([]);

// 分发事件给父组件
let emits = defineEmits(["change"]);

// 监听省份选择变化
watch(province, (newVal) => {
  if (!newVal) {
    selectCity.value = [];
    city.value = undefined;
    selectArea.value = [];
    area.value = undefined;
  } else {
    selectCity.value =
      allAreas.find((item) => item.code === newVal)?.children || [];
    city.value = undefined;
    selectArea.value = [];
    area.value = undefined;
  }
});

// 监听城市选择变化
watch(city, (newVal) => {
  if (!newVal || !province.value) {
    selectArea.value = [];
    area.value = undefined;
  } else {
    selectArea.value =
      selectCity.value?.find((item) => item.code === newVal)?.children || [];
    area.value = undefined;
  }
});

// 监听区域选择变化并触发change事件
watch(area, (newVal) => {
  if (newVal) {
    let provinceData: AreaData = {
      code: province.value || "",
      name: allAreas.find((item) => item.code === province.value)?.name || "", // 省,
    };
    let cityData: AreaData = {
      code: city.value || "", // 市,
      name:
        selectCity.value.find((item) => item.code === city.value)?.name || "", // 市,
    };
    let areaData: AreaData = {
      code: newVal || "",
      name: selectArea.value.find((item) => item.code === newVal)?.name || "", // 区,
    };

    emits("change", { provinceData, cityData, areaData });
  }
});
</script>

<style scoped lang="scss">
.container {
  display: flex;
  gap: 10px;
}
</style>
