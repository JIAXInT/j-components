import { defineComponent, type PropType, useAttrs } from "vue";
import type { MenuItem } from "./type";
import * as Icons from "@element-plus/icons-vue";
import "./syules/index.scss";

export default defineComponent({
  // 组件属性定义
  props: {
    // 菜单数据，必须传入
    data: {
      type: Array as PropType<MenuItem[]>,
      required: true,
    },
    // 默认激活的菜单项
    defaultActive: {
      type: String,
      default: "1",
    },
    // 是否启用路由模式
    router: {
      type: Boolean,
      default: false,
    },
    // 菜单标题键名
    name: {
      type: String,
      default: "name",
    },
    index: {
      type: String,
      default: "index",
    },
    icon: {
      type: String,
      default: "icon",
    },
    children: {
      type: String,
      default: "children",
    },
  },
  setup(props, ctx) {
    /**
     * 递归渲染菜单项
     * @param data 菜单数据数组
     * @returns 渲染后的菜单JSX
     */
    let renderMenu = (data: any[]) => {
      return data.map((item: any) => {
        // 每个菜单的图标
        item.i = (Icons as any)[item[props.icon!]];
        let slots = {
          title: () => {
            return (
              <>
                <item.i></item.i>
                <span>{item[props.name]}</span>
              </>
            );
          },
        };
        if (item[props.children] && item[props.children].length > 0) {
          return (
            <el-sub-menu index={item[props.index]} v-slots={slots}>
              {renderMenu(item[props.children])}
            </el-sub-menu>
          );
        }
        return (
          <el-menu-item index={item[props.index]}>
            <item.i></item.i>
            <span>{item[props.name]}</span>
          </el-menu-item>
        );
      });
    };

    let attrs = useAttrs();

    return () => {
      // 返回菜单组件容器
      return (
        <el-menu
          default-active={props.defaultActive}
          router={props.router}
          {...attrs}
        >
          {renderMenu(props.data)}
        </el-menu>
      );
    };
  },
});
