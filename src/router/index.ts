import { createRouter, createWebHistory } from "vue-router";
import type { RouteRecordRaw } from "vue-router";
import Home from "../views/Home.vue";
import Container from "../components/container/src/index.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    component: Container,
    children: [
      {
        path: "",
        component: Home,
      },
      {
        path: "/chooseIcon",
        component: () => import("../views/chooseIcon/index.vue"),
      },
      {
        path: "/chooseArea",
        component: () => import("../views/chooseArea/index.vue"),
      },
      {
        path: "/trend",
        component: () => import("../views/trend/index.vue"),
      },
      {
        path: "/notification",
        component: () => import("../views/notification/index.vue"),
      },
      {
        path: "/menu",
        component: () => import("../views/menu/index.vue"),
      },
      {
        path: "/progress",
        component: () => import("../views/progress/index.vue"),
      },
      {
        path: "/chooseTime",
        component: () => import("../views/chooseTime/index.vue"),
      },
      {
        path: "/chooseCity",
        component: () => import("../views/chooseCity/index.vue"),
      },
      {
        path: "/form",
        component: () => import("../views/form/index.vue"),
      },
      {
        path: "/modelForm",
        component: () => import("../views/modelForm/index.vue"),
      },
      {
        path: "/table",
        component: () => import("../views/table/index.vue"),
      },
      {
        path: "/tabledemo",
        component: () => import("../views/table/demo.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
