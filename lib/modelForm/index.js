import { defineComponent as g, ref as m, watch as d, resolveComponent as u, createElementBlock as O, openBlock as h, normalizeClass as R, createVNode as c, mergeProps as C, unref as f, isRef as w, withCtx as t, renderSlot as l } from "vue";
const S = /* @__PURE__ */ g({
  __name: "index",
  props: {
    visible: {
      type: Boolean,
      default: !1
    },
    options: {
      type: Array,
      required: !0
    },
    //   只在屏幕区域内滚动
    isScroll: {
      type: Boolean,
      default: !1
    },
    //   处理上传的事件
    onChange: {
      type: Function
    },
    onSuccess: {
      type: Function
    },
    beforeRemove: {
      type: Function
    },
    onExceed: {
      type: Function
    },
    onRemove: {
      type: Function
    },
    onPreview: {
      type: Function
    }
  },
  emits: ["update:visible"],
  setup(e, { emit: p }) {
    let i = m(), a = e, v = p, n = m(a.visible);
    return d(
      () => a.visible,
      (o) => {
        n.value = o;
      }
    ), d(
      () => n.value,
      (o) => {
        v("update:visible", o);
      }
    ), (o, s) => {
      const y = u("j-form"), b = u("el-dialog");
      return h(), O(
        "div",
        {
          class: R({ "j-choose-icon-dialog-body-height": e.isScroll })
        },
        [
          c(b, C({
            modelValue: f(n),
            "onUpdate:modelValue": s[0] || (s[0] = (r) => w(n) ? n.value = r : n = r)
          }, o.$attrs), {
            default: t(() => [
              c(y, {
                ref_key: "form",
                ref: i,
                options: e.options,
                "label-width": "100px",
                onOnPreview: e.onPreview,
                onOnRemove: e.onRemove,
                onOnExceed: e.onExceed,
                onBeforeRemove: e.beforeRemove,
                onOnSuccess: e.onSuccess,
                onOnChange: e.onChange
              }, {
                uploadArea: t(() => [
                  l(o.$slots, "uploadArea")
                ]),
                uploadTip: t(() => [
                  l(o.$slots, "uploadTip")
                ]),
                _: 3
                /* FORWARDED */
              }, 8, ["options", "onOnPreview", "onOnRemove", "onOnExceed", "onBeforeRemove", "onOnSuccess", "onOnChange"])
            ]),
            footer: t(() => [
              l(o.$slots, "footer", { form: f(i) })
            ]),
            _: 3
            /* FORWARDED */
          }, 16, ["modelValue"])
        ],
        2
        /* CLASS */
      );
    };
  }
}), B = {
  install(e) {
    e.component("j-model-form", S);
  }
};
export {
  B as default
};
