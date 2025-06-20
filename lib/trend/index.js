import { defineComponent as v, onMounted as I, ref as i, useSlots as w, computed as g, createElementBlock as p, openBlock as l, Fragment as x, createCommentVNode as r, createElementVNode as a, normalizeStyle as u, unref as c, renderSlot as S, toDisplayString as k, createBlock as y, resolveDynamicComponent as f } from "vue";
const C = (e) => e.replace(/([A-Z])/g, "-$1").toLowerCase(), h = { class: "trend" }, B = { key: 1 }, T = { class: "icon" }, $ = /* @__PURE__ */ v({
  __name: "index",
  props: {
    // 标记当前的趋势是上升还是下降(up/down)
    type: {
      type: String,
      default: "up"
    },
    // 上升趋势的图标
    upIcon: {
      type: String,
      default: "ArrowUp"
    },
    // 下降趋势的图标
    downIcon: {
      type: String,
      default: "ArrowDown"
    },
    // 趋势形式的文字
    text: {
      type: String,
      default: "上升"
    },
    // 颜色反转（只在默认颜色下生效）
    reverseColor: {
      type: Boolean,
      default: !1
    },
    // 上升趋势图标颜色
    upIconColor: {
      type: String,
      default: "#f5222d"
    },
    // 下降趋势图标颜色
    downIconColor: {
      type: String,
      default: "#52c41a"
    },
    // 上升趋势文字颜色
    upTextColor: {
      type: String,
      default: "#000"
    },
    // 下降趋势文字颜色
    downTextColor: {
      type: String,
      default: "#000"
    }
  },
  setup(e) {
    let o = e;
    I(() => {
      if (o.reverseColor) {
        let t = o.upIconColor, s = i(o.upIconColor);
        s.value = o.downIconColor;
        let m = i(o.downIconColor);
        m.value = t;
      }
    });
    let n = w(), d = g(() => o.type === "up" ? o.upTextColor : o.downTextColor);
    return (t, s) => (l(), p(
      x,
      null,
      [
        r(" 趋势组件容器 "),
        a("div", h, [
          r(" 文字部分，支持插槽或默认文本 "),
          a(
            "div",
            {
              class: "text",
              style: u({ color: c(d) })
            },
            [
              c(n).default ? S(t.$slots, "default", { key: 0 }, void 0, !0) : (l(), p(
                "div",
                B,
                k(e.text),
                1
                /* TEXT */
              ))
            ],
            4
            /* STYLE */
          ),
          r(" 图标部分，根据趋势类型显示不同图标 "),
          a("div", T, [
            r(" 动态组件渲染，根据type显示上升或下降图标 "),
            e.type === "up" ? (l(), y(f(`el-icon${c(C)(e.upIcon)}`), {
              key: 0,
              style: u({ color: e.reverseColor ? "#52c41a" : e.upIconColor })
            }, null, 8, ["style"])) : (l(), y(f(`el-icon${c(C)(e.downIcon)}`), {
              key: 1,
              style: u({ color: e.reverseColor ? "#f5222d" : e.downIconColor })
            }, null, 8, ["style"]))
          ])
        ])
      ],
      2112
      /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */
    ));
  }
}), A = (e, o) => {
  const n = e.__vccOpts || e;
  for (const [d, t] of o)
    n[d] = t;
  return n;
}, D = /* @__PURE__ */ A($, [["__scopeId", "data-v-5afcc634"]]), L = {
  install(e) {
    e.component("j-trend", D);
  }
};
export {
  L as default
};
