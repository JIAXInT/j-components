<template>
  <!-- 列表选项卡容器 -->
  <div class="list-tabs__item">
    <!-- 使用Element Plus的Tabs组件 -->
    <el-tabs>
      <el-tab-pane
        v-for="(item, index) in list"
        :key="index"
        :label="item.title"
      >
        <el-scrollbar max-height="300px">
          <div
            class="container"
            @click="clickItem(item1, index1)"
            v-for="(item1, index1) in item.content"
            :key="index1"
          >
            <div class="avatar" v-if="item1.avatar">
              <el-avatar size="small" :src="item1.avatar"></el-avatar>
            </div>
            <div class="content">
              <div class="title" v-if="item1.title">
                <div>{{ item1.title }}</div>
                <el-tag v-if="item1.tag" size="small" :type="item1.tagType">{{
                  item1.tag
                }}</el-tag>
              </div>
              <div class="time" v-if="item1.desc">{{ item1.desc }}</div>
              <div class="time" v-if="item1.time">{{ item1.time }}</div>
            </div>
          </div>
        </el-scrollbar>
        <div class="actions">
          <div
            class="a-item"
            @click="clickAction(action, i)"
            v-for="(action, i) in actions"
            :key="i"
            :class="{ border: i !== actions.length }"
          >
            <div class="a-icon" v-if="action.icon">
              <component :is="`el-icon-${toLine(action.icon)}`" />
            </div>
            <div class="a-text">{{ action.text }}</div>
          </div>
        </div>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script setup lang="ts">
import type { PropType } from "vue";
import type { ActionOptions, ListOptions } from "./type";
import { toLine } from "../../utils";
// import { actions } from "../../views/notification/data";
import type { ListItem } from "element-plus";

// 组件props定义
let props = defineProps({
  // 列表数据，必须传入
  list: {
    type: Array as PropType<ListOptions[]>,
    required: true,
  },
  // 操作按钮配置，可选
  actions: {
    type: Array as PropType<ActionOptions[]>,
    default: () => [],
  },
});

let emit = defineEmits(["clickItem", "clickAction"]);

// 点击列表项事件处理
let clickItem = (item: ListItem, index: number) => {
  emit("clickItem", item, index);
};

// 点击操作按钮事件处理
let clickAction = (action: ActionOptions, index: number) => {
  emit("clickAction", action, index);
};
</script>

<style scoped lang="scss">
.container {
  display: flex;
  align-items: center;
  padding: 12px;
  border-bottom: 1px solid #e8e8e8;
  cursor: pointer;
  &:hover {
    background-color: #ecf3fe;
  }
  .avatar {
    flex: 1;
  }
  .content {
    flex: 3;
    .title {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    .time {
      font-size: 12px;
      color: #999;
      margin-top: 5px;
    }
  }
}

.actions {
  height: 50px;
  display: flex;
  align-items: center;
  border-top: 1px solid #e8e8e8;
  .a-item {
    height: 50px;
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    .a-icon {
      margin-right: 5px;
      position: relative;
      top: 2px;
    }
  }
}

.border {
  border-right: 1px solid #e8e8e8;
}
</style>
