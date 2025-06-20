import { defineComponent as s, resolveComponent as o, createBlock as n, openBlock as a, withCtx as t, createVNode as m, resolveDynamicComponent as u, unref as l, renderSlot as d } from "vue";
const f = (e) => e.replace(/([A-Z])/g, "-$1").toLowerCase(), v = /* @__PURE__ */ s({
  __name: "index",
  props: {
    icon: {
      type: String,
      default: "Bell"
    },
    value: {
      type: [Number, String],
      default: ""
    },
    max: {
      type: Number,
      default: 99
    },
    isDot: {
      type: Boolean,
      default: !1
    }
  },
  setup(e) {
    let r = e;
    return (c, x) => {
      const i = o("el-badge"), p = o("el-popover");
      return a(), n(p, {
        placement: "top-start",
        width: 300,
        trigger: "hover"
      }, {
        default: t(() => [
          d(c.$slots, "content")
        ]),
        reference: t(() => [
          m(i, {
            value: e.value,
            max: e.max,
            "is-dot": e.isDot
          }, {
            default: t(() => [
              (a(), n(u(`el-icon${l(f)(l(r).icon)}`)))
            ]),
            _: 1
            /* STABLE */
          }, 8, ["value", "max", "is-dot"])
        ]),
        _: 3
        /* FORWARDED */
      });
    };
  }
}), _ = {
  install(e) {
    e.component("j-notification", v);
  }
};
export {
  _ as default
};
