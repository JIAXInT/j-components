import { defineComponent, type PropType, useAttrs } from "vue";
import type { MenuItem } from "./type";
import { toLine } from "../../../utils";

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
  },
  setup(props, ctx) {
    /**
     * 递归渲染菜单项
     * @param data 菜单数据数组
     * @returns 渲染后的菜单JSX
     */
    let renderMenu = (data: MenuItem[]) => {
      return data.map((item: MenuItem) => {
        // 每个菜单的图标
        item.i = `el-icon${toLine(item.icon!)}`;
        let slots = {
          title: () => {
            return (
              <>
                <item.i></item.i>
                <span>{item.name}</span>
              </>
            );
          },
        };
        if (item.children && item.children.length > 0) {
          return (
            <el-sub-menu index={item.index} v-slots={slots}>
              {renderMenu(item.children)}
            </el-sub-menu>
          );
        }
        return (
          <el-menu-item index={item.index}>
            <item.i></item.i>
            <span>{item.name}</span>
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
