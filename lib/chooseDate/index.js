import { defineComponent as y, ref as s, watch as p, resolveComponent as V, createElementBlock as C, openBlock as B, createElementVNode as m, createVNode as c, mergeProps as f, unref as n, isRef as h } from "vue";
const P = { style: { display: "flex" } }, T = { style: { "margin-right": "20px" } }, k = /* @__PURE__ */ y({
  __name: "index",
  props: {
    startPlaceholder: {
      type: String,
      default: "请选择开始日期"
    },
    endPlaceholder: {
      type: String,
      default: "请选择结束日期"
    },
    // 是否禁用选择今天之前的日期
    disabledBeforeToday: {
      type: Boolean,
      default: !0
    }
  },
  emits: ["startChange", "endChange"],
  setup(a, { emit: g }) {
    let b = a, i = g, t = s(null), l = s(null), r = s(!0), D = (e) => {
      if (b.disabledBeforeToday)
        return e.getTime() < Date.now() - 864e5;
    }, v = (e) => {
      if (t.value)
        return e.getTime() < t.value.getTime() + 864e5;
    };
    return p(
      () => t.value,
      (e) => {
        e ? (i("startChange", e), r.value = !1) : (r.value = !0, l.value = null);
      }
    ), p(
      () => l.value,
      (e) => {
        e && i("endChange", {
          startDate: t.value,
          endDate: e
        });
      }
    ), (e, o) => {
      const u = V("el-date-picker");
      return B(), C("div", P, [
        m("div", T, [
          c(u, f({
            modelValue: n(t),
            "onUpdate:modelValue": o[0] || (o[0] = (d) => h(t) ? t.value = d : t = d),
            type: "date",
            placeholder: a.startPlaceholder,
            "disabled-date": n(D)
          }, e.$attrs.startOptions), null, 16, ["modelValue", "placeholder", "disabled-date"])
        ]),
        m("div", null, [
          c(u, f({
            modelValue: n(l),
            "onUpdate:modelValue": o[1] || (o[1] = (d) => h(l) ? l.value = d : l = d),
            type: "date",
            placeholder: a.endPlaceholder,
            disabled: n(r),
            "disabled-date": n(v)
          }, e.$attrs.endOptions), null, 16, ["modelValue", "placeholder", "disabled", "disabled-date"])
        ])
      ]);
    };
  }
}), _ = {
  install(a) {
    a.component("j-choose-date", k);
  }
};
export {
  _ as default
};
