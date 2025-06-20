import { defineComponent as z, resolveComponent as a, createElementBlock as n, openBlock as t, Fragment as u, createCommentVNode as s, createElementVNode as i, createVNode as f, withCtx as v, renderList as y, createBlock as h, unref as b, toDisplayString as r, createTextVNode as B, normalizeClass as E, resolveDynamicComponent as L } from "vue";
const T = (l) => l.replace(/([A-Z])/g, "-$1").toLowerCase(), w = { class: "list-tabs__item" }, D = ["onClick"], j = {
  key: 0,
  class: "avatar"
}, q = { class: "content" }, F = {
  key: 0,
  class: "title"
}, O = {
  key: 1,
  class: "time"
}, P = {
  key: 2,
  class: "time"
}, S = { class: "actions" }, Z = ["onClick"], G = {
  key: 0,
  class: "a-icon"
}, H = { class: "a-text" }, J = /* @__PURE__ */ z({
  __name: "index",
  props: {
    // 列表数据，必须传入
    list: {
      type: Array,
      required: !0
    },
    // 操作按钮配置，可选
    actions: {
      type: Array,
      default: () => []
    }
  },
  emits: ["clickItem", "clickAction"],
  setup(l, { emit: m }) {
    let c = m, p = (_, d) => {
      c("clickItem", _, d);
    }, k = (_, d) => {
      c("clickAction", _, d);
    };
    return (_, d) => {
      const C = a("el-avatar"), x = a("el-tag"), A = a("el-scrollbar"), I = a("el-tab-pane"), N = a("el-tabs");
      return t(), n(
        u,
        null,
        [
          s(" 列表选项卡容器 "),
          i("div", w, [
            s(" 使用Element Plus的Tabs组件 "),
            f(N, null, {
              default: v(() => [
                (t(!0), n(
                  u,
                  null,
                  y(l.list, (g, V) => (t(), h(I, {
                    key: V,
                    label: g.title
                  }, {
                    default: v(() => [
                      f(
                        A,
                        { "max-height": "300px" },
                        {
                          default: v(() => [
                            (t(!0), n(
                              u,
                              null,
                              y(g.content, (e, o) => (t(), n("div", {
                                class: "container",
                                onClick: ($) => b(p)(e, o),
                                key: o
                              }, [
                                e.avatar ? (t(), n("div", j, [
                                  f(C, {
                                    size: "small",
                                    src: e.avatar
                                  }, null, 8, ["src"])
                                ])) : s("v-if", !0),
                                i("div", q, [
                                  e.title ? (t(), n("div", F, [
                                    i(
                                      "div",
                                      null,
                                      r(e.title),
                                      1
                                      /* TEXT */
                                    ),
                                    e.tag ? (t(), h(x, {
                                      key: 0,
                                      size: "small",
                                      type: e.tagType
                                    }, {
                                      default: v(() => [
                                        B(
                                          r(e.tag),
                                          1
                                          /* TEXT */
                                        )
                                      ]),
                                      _: 2
                                      /* DYNAMIC */
                                    }, 1032, ["type"])) : s("v-if", !0)
                                  ])) : s("v-if", !0),
                                  e.desc ? (t(), n(
                                    "div",
                                    O,
                                    r(e.desc),
                                    1
                                    /* TEXT */
                                  )) : s("v-if", !0),
                                  e.time ? (t(), n(
                                    "div",
                                    P,
                                    r(e.time),
                                    1
                                    /* TEXT */
                                  )) : s("v-if", !0)
                                ])
                              ], 8, D))),
                              128
                              /* KEYED_FRAGMENT */
                            ))
                          ]),
                          _: 2
                          /* DYNAMIC */
                        },
                        1024
                        /* DYNAMIC_SLOTS */
                      ),
                      i("div", S, [
                        (t(!0), n(
                          u,
                          null,
                          y(l.actions, (e, o) => (t(), n("div", {
                            class: E(["a-item", { border: o !== l.actions.length }]),
                            onClick: ($) => b(k)(e, o),
                            key: o
                          }, [
                            e.icon ? (t(), n("div", G, [
                              (t(), h(L(`el-icon-${b(T)(e.icon)}`)))
                            ])) : s("v-if", !0),
                            i(
                              "div",
                              H,
                              r(e.text),
                              1
                              /* TEXT */
                            )
                          ], 10, Z))),
                          128
                          /* KEYED_FRAGMENT */
                        ))
                      ])
                    ]),
                    _: 2
                    /* DYNAMIC */
                  }, 1032, ["label"]))),
                  128
                  /* KEYED_FRAGMENT */
                ))
              ]),
              _: 1
              /* STABLE */
            })
          ])
        ],
        2112
        /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */
      );
    };
  }
}), K = (l, m) => {
  const c = l.__vccOpts || l;
  for (const [p, k] of m)
    c[p] = k;
  return c;
}, M = /* @__PURE__ */ K(J, [["__scopeId", "data-v-f252de85"]]), R = {
  install(l) {
    l.component("j-list", M);
  }
};
export {
  R as default
};
