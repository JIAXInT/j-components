<!-- 表格组件模板 -->
<template>
  <!-- 主表格组件 -->
  <el-table
    v-bind="$attrs"
    :data="tableData"
    v-loading="isLoading"
    :element-loading-text="elementLoadingText"
    :element-loading-spinner="elementLoadingSpinner"
    :element-loading-background="elementLoadingBackground"
    :element-loading-svg="elementLoadingSvg"
    :element-loading-svg-view-box="elementLoadingSvgViewBox"
    @row-click="handleRowClick"
  >
    <!-- 动态生成表格列 -->
    <template v-for="(item, index) in tableOptions" :key="index">
      <!-- 自定义列 -->
      <!-- 主表格组件 -->
      <!-- 表格列定义 -->
      <!-- 操作列定义 -->
      <el-table-column
        :prop="item.prop"
        :label="item.label"
        :width="item.width"
        :align="item.align"
      >
        <!-- 列内容模板 -->
        <!-- 操作列内容模板 -->
        <template #default="scope">
          <!-- 有编辑行操作 -->
          <!-- 行编辑模式下的单元格 -->
          <template v-if="scope.row.rowEdit">
            <el-input size="small" v-model="scope.row[item.prop]"></el-input>
          </template>
          <!-- 没有编辑行操作 -->
          <!-- 非行编辑模式下的单元格 -->
          <!-- 普通显示模式 -->
          <template v-else>
            <!-- 单元格编辑模式 -->
            <template v-if="scope.$index + scope.column.id === currentEdit">
              <div style="display: flex">
                <el-input
                  size="small"
                  v-model="scope.row[item.prop]"
                ></el-input>
                <div @click.stop="clickEditCell">
                  <slot name="editCell" :scope="scope" v-if="$slots.editCell">
                  </slot>
                  <div class="icons" v-else>
                    <el-icon-check
                      class="check"
                      @click="check(scope)"
                    ></el-icon-check>
                    <el-icon-close
                      class="close"
                      @click="close(scope)"
                    ></el-icon-close>
                  </div>
                </div>
              </div>
            </template>
            <!-- 非行编辑模式下的单元格 -->
            <!-- 普通显示模式 -->
            <template v-else>
              <slot v-if="item.slot" :name="item.slot" :scope="scope"></slot>
              <span v-else>{{ scope.row[item.prop] }}</span>
              <component
                v-if="item.editable && editIcon"
                :is="`el-icon-${toLine(editIcon)}`"
                class="edit"
                @click.stop="clickEdit(scope)"
              ></component>
            </template>
          </template>
        </template>
      </el-table-column>
    </template>

    <!-- 主表格组件 -->
    <!-- 表格列定义 -->
    <!-- 操作列定义 -->
    <el-table-column
      v-if="actionOptions"
      :label="actionOptions?.label"
      :align="actionOptions?.align"
      :width="actionOptions?.width"
    >
      <!-- 列内容模板 -->
      <!-- 操作列内容模板 -->
      <template #default="scope">
        <slot name="editRow" v-if="scope.row.rowEdit"></slot>
        <slot name="action" :scope="scope" v-else></slot>
      </template>
    </el-table-column>
  </el-table>

  <!-- 分页组件 -->
  <div
    class="pagination"
    :style="{ justifyContent: paginationAlignJustify }"
    v-if="pagination"
  >
    <el-pagination
      :current-page="currentPage"
      :page-size="pageSize"
      :page-sizes="pageSizes"
      layout="total, sizes, prev, pager, next, jumper"
      :total="total"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
    />
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, ref, watch, type PropType } from "vue";
import type { TableOptions } from "./type";
import { toLine } from "../../../utils";
import { cloneDeep } from "lodash";

let props = defineProps({
  // 表格列配置
  options: {
    type: Array as PropType<TableOptions[]>,
    required: true,
  },
  // 表格数据
  data: {
    type: Array as PropType<any[]>,
    required: true,
  },
  // 加载文案
  elementLoadingText: {
    type: String,
  },
  // 加载图标
  elementLoadingSpinner: {
    type: String,
  },
  // 加载背景
  elementLoadingBackground: {
    type: String,
  },
  // 加载svg
  elementLoadingSvg: {
    type: String,
  },
  // 加载svg的配置
  elementLoadingSvgViewBox: {
    type: String,
  },
  // 可编辑单元格的图标
  editIcon: {
    type: String,
    default: "edit",
  },
  // 是否可以编辑行
  isEditRow: {
    type: Boolean,
    default: false,
  },
  // 编辑行按钮的标识
  editRowIndex: {
    type: String,
    default: "",
  },
  // 是否显示分页
  pagination: {
    type: Boolean,
    default: false,
  },
  // 当前页码
  currentPage: {
    type: Number,
    default: 1,
  },
  // 每页数据的选项
  pageSizes: {
    type: Array as PropType<number[]>,
    default: [10, 20, 30, 40],
  },
  // 当前一页的数据
  pageSize: {
    type: Number,
    default: 10,
  },
  // 数据总数
  total: {
    type: Number,
  },
  // 分页的排列方式
  paginationAlign: {
    type: String as PropType<"left" | "center" | "right">,
    default: "left",
  },
});

let emits = defineEmits([
  "comfire",
  "cancel",
  "update:editRowIndex",
  "update:pageSize",
  "sizeChange",
  "currentChange",
]);

// 当前点击的单元格
let currentEdit = ref<string>("");

// 拷贝一份表格的数据
let tableData = ref<any[]>(cloneDeep(props.data));

// 拷贝一份按钮的标识
let cloneEditRowIndex = ref<string>(props.editRowIndex);

// 监听父组件传递的数据变化;
watch(
  () => props.data,
  (newVal) => {
    tableData.value = cloneDeep(newVal);
    tableData.value.map((item) => {
      // 代表当前是否是可编辑的状态
      item.rowEdit = false;
    });
  },
  { deep: true }
);

// 监听父组件按钮的标识变化;
watch(
  () => props.editRowIndex,
  (newVal) => {
    if (newVal) cloneEditRowIndex.value = newVal;
  }
);

onMounted(() => {
  tableData.value.map((item) => {
    // 代表当前是否是可编辑的状态
    item.rowEdit = false;
  });
});

// 点击编辑图标的回调;
let clickEdit = (scope: any) => {
  // 唯一标识
  currentEdit.value = scope.$index + scope.column.id;
  console.log(scope);
};

let clickEditCell = () => {
  currentEdit.value = "";
};

let check = (scope: any) => {
  emits("comfire", scope);
};

let close = (scope: any) => {
  emits("cancel", scope);
};

// 点击每一行的事件
let handleRowClick = (row: any, column: any) => {
  // 判断当前点击的是否是操作项的内容
  if (column.label === actionOptions.value!.label) {
    // 编辑行的操作
    if (props.isEditRow && cloneEditRowIndex.value === props.editRowIndex) {
      row.rowEdit = !row.rowEdit;
      // 重置其他数据的isEditRow
      tableData.value.map((item) => {
        if (item !== row) item.rowEdit = false;
      });
      // 重置按钮的标识
      if (!row.rowEdit) emits("update:editRowIndex", "");
    }
  }
};

// 分页条数改变的回调;
let handleSizeChange = (val: number) => {
  emits("sizeChange", val);
};

// 分页页码改变的回调;
let handleCurrentChange = (val: number) => {
  emits("currentChange", val);
};

// 过滤操作选项之后的配置
let tableOptions = computed(() => {
  return props.options.filter((item) => !item.action);
});

// 找出操作项的配置
let actionOptions = computed(() => {
  return props.options.find((item) => item.action);
});

// 是否在加载中
let isLoading = computed(() => {
  return !props.data || !props.data.length;
});

let paginationAlignJustify = computed(() => {
  if (props.paginationAlign === "left") return "flex-start";
  if (props.paginationAlign === "center") return "center";
  if (props.paginationAlign === "right") return "flex-end";
});
</script>

<style scoped lang="scss">
svg {
  width: 1em;
  height: 1em;
}
.edit {
  width: 1em;
  height: 1em;
  position: relative;
  top: 2px;
  left: 4px;
  cursor: pointer;
  color: #409eff;
}

.icons {
  display: flex;
  position: relative;
  top: 4px;
  svg {
    width: 1.2em;
    height: 1.2em;
    cursor: pointer;
    margin-left: 6px;
  }
  .check {
    color: red;
  }
  .close {
    color: green;
  }
}

.pagination {
  display: flex;
  align-items: center;
  margin-top: 16px;
}
</style>
