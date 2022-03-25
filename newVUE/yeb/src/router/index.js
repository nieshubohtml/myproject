import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "LoginView",
    component: () => import("../views/Login.vue"),
  },
  {
    path: "/home",
    name: "HomeView",
    component: () => import("../views/HomeView.vue"),
    children: [
      {
        path: "/test1",
        name: "test1",
        component: () => import("../views/test1.vue"),
      },
      {
        path: "/test2",
        name: "test2",
        component: () => import("../views/test2.vue"),
      },
    ],
  },
];

const router = new VueRouter({
  routes,
});

export default router;
