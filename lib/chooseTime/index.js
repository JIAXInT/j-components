import { defineComponent as g, ref as s, watch as u, resolveComponent as h, createElementBlock as T, openBlock as y, createVNode as p, mergeProps as f, unref as d, isRef as c } from "vue";
const x = { style: { display: "flex", gap: "20px" } }, V = /* @__PURE__ */ g({
  __name: "index",
  props: {
    // 开始时间选择器的占位文本
    startPlaceholder: {
      type: String,
      default: "开始时间"
    },
    // 结束时间选择器的占位文本
    endPlaceholder: {
      type: String,
      default: "结束时间"
    },
    // 开始时间选择器的最早可选时间
    startTimeStart: {
      type: String,
      default: "08:30"
    },
    // 开始时间选择器的最晚可选时间
    startTimeEnd: {
      type: String,
      default: "18:30"
    },
    // 开始时间选择器的时间间隔
    startStep: {
      type: String,
      default: "00:15"
    },
    // 结束时间选择器的时间间隔
    endStep: {
      type: String,
      default: "00:15"
    },
    // 结束时间选择器的最早可选时间
    endTimeStart: {
      type: String,
      default: "08:30"
    },
    // 结束时间选择器的最晚可选时间
    endTimeEnd: {
      type: String,
      default: "18:30"
    }
  },
  emits: ["startChange", "endChange"],
  setup(e, { emit: S }) {
    let m = S, l = s("08:30"), a = s("18:30"), r = s(!0);
    return u(
      () => l.value,
      (t) => {
        t === "" ? (a.value = "", r.value = !0) : (r.value = !1, m("startChange", t));
      }
    ), u(
      () => a.value,
      (t) => {
        t !== "" && m("endChange", {
          startTime: l.value,
          endTime: t
        });
      }
    ), (t, i) => {
      const o = h("el-time-select");
      return y(), T("div", x, [
        p(o, f({
          modelValue: d(l),
          "onUpdate:modelValue": i[0] || (i[0] = (n) => c(l) ? l.value = n : l = n),
          style: { width: "240px" },
          "max-time": d(a),
          class: "mr-4",
          placeholder: e.startPlaceholder,
          start: e.startTimeStart,
          step: e.startStep,
          end: e.startTimeEnd
        }, t.$attrs.startOptions), null, 16, ["modelValue", "max-time", "placeholder", "start", "step", "end"]),
        p(o, f({
          modelValue: d(a),
          "onUpdate:modelValue": i[1] || (i[1] = (n) => c(a) ? a.value = n : a = n),
          style: { width: "240px" },
          "min-time": d(l),
          placeholder: e.endPlaceholder,
          start: e.endTimeStart,
          step: e.endStep,
          end: e.endTimeEnd,
          disable: d(r)
        }, t.$attrs.endOptions), null, 16, ["modelValue", "min-time", "placeholder", "start", "step", "end", "disable"])
      ]);
    };
  }
}), C = {
  install(e) {
    e.component("j-choose-time", V);
  }
};
export {
  C as default
};
