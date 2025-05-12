import type { App } from "vue";
import chooseArea from "./chooseArea";
import chooseIcon from "./chooseIcon";
import trend from "./trend";
import notification from "./notification";
import list from "./list";
import menu from "./menu";
import progress from "./progress";
import chooseTime from "./chooseTime";
import chooseDate from "./chooseDate";
import chooseCity from "./chooseCity";
import form from "./form";
import modelForm from "./modelForm";
import table from "./table";

const components = [
  chooseArea,
  chooseIcon,
  trend,
  notification,
  list,
  menu,
  progress,
  chooseTime,
  chooseDate,
  chooseCity,
  form,
  modelForm,
  table,
];

export default {
  install(app: App) {
    components.map((component) => {
      app.use(component); // 注册组件，全局组件，所有组件都可以使用，不需要单独导入，直接使用组件名即可，如：<j-choose-area />，组件名：j-choose-area，组件文件：src/index.vue
    });
  },
};
