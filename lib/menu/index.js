import { defineComponent as A, resolveComponent as y, createElementBlock as o, openBlock as t, Fragment as i, createCommentVNode as l, createVNode as B, mergeProps as b, withCtx as r, renderList as C, createBlock as a, createElementVNode as s, resolveDynamicComponent as v, unref as x, toDisplayString as g } from "vue";
const k = (e) => e.replace(/([A-Z])/g, "-$1").toLowerCase(), L = /* @__PURE__ */ A({
  __name: "index",
  props: {
    // 菜单数据，必须传入
    data: {
      type: Array,
      required: !0
    },
    // 默认激活的菜单项
    defaultActive: {
      type: String,
      default: "1"
    },
    // 是否启用路由模式
    router: {
      type: Boolean,
      default: !1
    },
    // 菜单标题键名
    name: {
      type: String,
      default: "name"
    },
    index: {
      type: String,
      default: "index"
    },
    icon: {
      type: String,
      default: "icon"
    },
    children: {
      type: String,
      default: "children"
    }
  },
  setup(e) {
    return (d, f) => {
      const u = y("el-menu-item"), m = y("el-sub-menu"), S = y("el-menu");
      return t(), o(
        i,
        null,
        [
          l(" 菜单组件容器 "),
          B(S, b({
            class: "el-menu-vertical-demo",
            "default-active": e.defaultActive,
            router: e.router
          }, d.$attrs), {
            default: r(() => [
              l(" 遍历菜单数据，渲染菜单项 "),
              (t(!0), o(
                i,
                null,
                C(e.data, (n, $) => (t(), o(
                  i,
                  { key: $ },
                  [
                    l(" 无子菜单的菜单项 "),
                    !n[e.children] || !n[e.children].length ? (t(), a(u, {
                      key: 0,
                      index: n.i
                    }, {
                      default: r(() => [
                        n[e.icon] ? (t(), a(v(`el-icon${x(k)(n[e.icon])}`), { key: 0 })) : l("v-if", !0),
                        s(
                          "span",
                          null,
                          g(n[e.name]),
                          1
                          /* TEXT */
                        )
                      ]),
                      _: 2
                      /* DYNAMIC */
                    }, 1032, ["index"])) : l("v-if", !0),
                    l(" 有子菜单的菜单项 "),
                    n[e.children] && n[e.children].length ? (t(), a(m, {
                      key: 1,
                      index: n.index
                    }, {
                      title: r(() => [
                        n[e.icon] ? (t(), a(v(`el-icon${x(k)(n[e.icon])}`), { key: 0 })) : l("v-if", !0),
                        s(
                          "span",
                          null,
                          g(n[e.name]),
                          1
                          /* TEXT */
                        )
                      ]),
                      default: r(() => [
                        (t(!0), o(
                          i,
                          null,
                          C(n[e.children], (c, h) => (t(), a(u, {
                            key: h,
                            index: c[h]
                          }, {
                            default: r(() => [
                              c[e.icon] ? (t(), a(v(`el-icon${x(k)(c[e.icon])}`), { key: 0 })) : l("v-if", !0),
                              s(
                                "span",
                                null,
                                g(c[e.name]),
                                1
                                /* TEXT */
                              )
                            ]),
                            _: 2
                            /* DYNAMIC */
                          }, 1032, ["index"]))),
                          128
                          /* KEYED_FRAGMENT */
                        ))
                      ]),
                      _: 2
                      /* DYNAMIC */
                    }, 1032, ["index"])) : l("v-if", !0)
                  ],
                  64
                  /* STABLE_FRAGMENT */
                ))),
                128
                /* KEYED_FRAGMENT */
              ))
            ]),
            _: 1
            /* STABLE */
          }, 16, ["default-active", "router"])
        ],
        2112
        /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */
      );
    };
  }
}), N = (e, d) => {
  const f = e.__vccOpts || e;
  for (const [u, m] of d)
    f[u] = m;
  return f;
}, V = /* @__PURE__ */ N(L, [["__scopeId", "data-v-4058cf4b"]]), D = {
  install(e) {
    e.component("j-menu", V);
  }
};
export {
  D as default
};
