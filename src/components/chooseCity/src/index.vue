<!-- 
城市选择组件
功能：提供城市/省份选择功能，支持以下特性：
1. 按城市或省份两种模式切换选择
2. 支持拼音和中文搜索城市
3. 按字母快速定位城市
4. 点击选择后触发changeCity/changeProvince事件
-->
<template>
  <component
    :is="
      h(ElPopover, {
        placement: 'bottom-start',
        width: 430,
        trigger: 'click',
        visible: visible,
        'onUpdate:visible': (val) => (visible = val),
        ...($attrs.popoverOptions || {}),
      })
    "
  >
    <!-- 参考区域 -->
    <template #reference>
      <div style="display: flex; align-items: center; cursor: pointer">
        <div class="result">{{ result }}</div>
        <div>
          <component :is="visible ? 'el-icon-arrowup' : 'el-icon-arrowdown'" />
        </div>
      </div>
    </template>

    <!-- 内容区域 -->
    <div class="content">
      <!-- 头部搜索和切换区域 -->
      <el-row>
        <el-col :span="8">
          <el-radio-group v-model="radioValue" size="small">
            <el-radio-button label="按城市" />
            <el-radio-button label="按省份" />
          </el-radio-group>
        </el-col>
        <el-col :span="15" :offset="1">
          <el-select
            v-model="selectValue"
            filterable
            style="width: 240px"
            size="small"
            placeholder="请搜索城市"
            :filter-method="filterMethod"
            @change="changeSelect"
          >
            <el-option
              v-for="item in options"
              :key="item.id"
              :label="item.name"
              :value="item.id"
            />
          </el-select>
        </el-col>
      </el-row>

      <!-- 按城市模式 -->
      <template v-if="radioValue === '按城市'">
        <div class="city">
          <!-- 字母区域 -->
          <div
            v-for="item in Object.keys(cities)"
            :key="item"
            class="city-item"
            @click="clickChat(item)"
          >
            {{ item }}
          </div>
        </div>
        <el-scrollbar max-height="300px">
          <template v-for="(value, key) in cities" :key="key">
            <el-row style="margin-bottom: 10px" :id="key">
              <el-col :span="2">{{ key }}:</el-col>
              <el-col class="city-name" :span="22">
                <div v-for="city in value" :key="city.id">
                  <div class="city-name-item" @click="clickItem(city)">
                    {{ city.name }}
                  </div>
                </div>
              </el-col>
            </el-row>
          </template>
        </el-scrollbar>
      </template>

      <!-- 按省份模式 -->
      <template v-else>
        <div class="province">
          <div
            v-for="(item, index) in Object.keys(provinces)"
            :key="index"
            class="province-item"
            @click="clickChat(item)"
          >
            {{ item }}
          </div>
        </div>
        <el-scrollbar max-height="300px">
          <template
            v-for="(item, index) in Object.values(provinces)"
            :key="index"
          >
            <template v-for="(prov, index1) in (item as any[])" :key="index1">
              <el-row style="margin-bottom: 10px" :id="(prov as any).id">
                <el-col :span="3">{{ (prov as any).name }}:</el-col>
                <el-col class="city-name" :span="21">
                  <div
                    v-for="(name, index2) in (prov as any).data"
                    :key="index2"
                  >
                    <div class="city-name-item" @click="clickProvince(name)">
                      {{ name }}
                    </div>
                  </div>
                </el-col>
              </el-row>
            </template>
          </template>
        </el-scrollbar>
      </template>
    </div>
  </component>
</template>

<script setup lang="ts">
import {
  onMounted,
  ref,
  watch,
  h,
  resolveComponent,
  getCurrentInstance,
} from "vue";
import {
  ElPopover,
  ElRow,
  ElCol,
  ElRadioGroup,
  ElRadioButton,
  ElSelect,
  ElOption,
  ElScrollbar,
} from "element-plus";
import city from "../lib/city";
import province from "../lib/province.json";
import type { ICity, IProvince } from "./type";

// 获取组件实例
const vm = getCurrentInstance();

// 分发事件给父组件
// changeCity: 当选择城市时触发，参数为城市对象
// changeProvince: 当选择省份时触发，参数为省份名称
let emits = defineEmits(["changeCity", "changeProvince"]);

// 显示当前选择结果的文本
// 默认显示"请选择"，选择后显示城市/省份名称
let result = ref<string>("请选择");
// 控制弹窗显示状态
// true: 显示选择弹窗 false: 隐藏选择弹窗
let visible = ref<boolean>(false);
// 当前选择的筛选方式
// 可选值: "按城市" 或 "按省份"，默认"按省份"
let radioValue = ref<string>("按省份");
// 下拉框选中的值
// 存储选中项的城市ID
let selectValue = ref<string>("");
// 下拉选项列表
// 存储搜索过滤后的城市选项
const options = ref<ICity[]>([]);
// 城市数据，从city模块导入
// 数据结构: {字母: [城市对象数组]}
let cities = ref<Record<string, ICity[]>>({
  ...(city.cities as Record<string, ICity[]>),
});
let provinces = ref<any>(province);
// 搜索输入框的值
let searchValue = ref<string>("");

let allCity = ref<ICity[]>([]);

// 点击城市项的回调函数
// 参数item: 选中的城市对象
let clickItem = (item: ICity) => {
  // 给结果赋值
  result.value = item.name;
  // 关闭弹窗
  visible.value = false;
  emits("changeCity", item);
};

let clickProvince = (item: string) => {
  result.value = item;
  visible.value = false;
  emits("changeProvince", item);
};

// 点击字母区域的回调函数
// 参数item: 字母字符，用于滚动到对应字母的城市区域
let clickChat = (item: string) => {
  let el = document.getElementById(item);
  if (el) {
    // 滚动到指定的元素
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  }
};

// 自定义筛选方法，用于过滤下拉选项
// 参数value: 搜索输入框的值
// 功能: 根据输入值过滤城市列表，支持中文和拼音搜索
let filterMethod = (value: string) => {
  searchValue.value = value;
  let values = Object.values(city.cities).flat(2);
  if (value === "") {
    options.value = values;
  } else {
    if (radioValue.value === "按城市") {
      // 中文和拼音一起过滤
      options.value = values.filter((item) => {
        return item.name.includes(value) || item.spell.includes(value);
      });
    } else {
      // 中文过滤
      options.value = values.filter((item) => {
        return item.name.includes(value);
      });
    }
  }
};

let changeSelect = (value: number) => {
  let city = allCity.value.find((item) => item.id === value);
  result.value = city!.name;
  if (radioValue.value === "按城市") {
    emits("changeCity", city);
  } else {
    emits("changeProvince", city!.name);
  }
};

onMounted(() => {
  // 获取下拉框的城市数据
  let values = Object.values(city.cities).flat(2);
  options.value = values;
  allCity.value = values;
});
</script>

<style scoped lang="scss">
.result {
  display: flex;
  align-items: center;
  width: fit-content;
  cursor: pointer;
}
.content {
  padding: 6px;
}
.rolate {
  transform: rotate(180deg);
}

svg {
  width: 1em;
  height: 1em;
  position: relative;
  top: 2px;
  margin-left: 4px;
  transform: all 0.25s linear;
}

.city,
.province {
  display: flex;
  flex-wrap: wrap;
  margin-top: 10px;
  align-items: center;
  margin-bottom: 10px;
  &-item {
    padding: 3px 6px;
    margin-right: 8px;
    margin-bottom: 8px;
    border: 1px solid #dcdfe6;
    cursor: pointer;
  }
}
.city-name {
  display: flex;
  flex-wrap: wrap;
  &-item {
    margin-right: 5px;
    margin-bottom: 5px;
    cursor: pointer;
  }
}
</style>
