import { createRouter, createWebHashHistory } from "vue-router";
import layout from "../layout/index.vue";
const routes = [
  {
    path: "/",
    name: "layout",
    component: layout,
    redirect: "/home",
    children: [
      {
        path: "/home",
        name: "home",
        meta: {
          title: "主页",
        },
        component: () => import("@/views/home/index.vue"),
      },
      {
        path: "/brief",
        name: "brief",
        meta: {
          title: "简介",
        },
        component: () => import("@/views/brief/index.vue"),
      },
      {
        path: "/works",
        name: "works",
        meta: {
          title: "我的作品",
        },
        component: () => import("@/views/works/index.vue"),
      },
      {
        path: "/career",
        name: "career",
        meta: {
          title: "我的事业",
        },
        component: () => import("@/views/career/index.vue"),
      },
      {
        path: "/diary",
        name: "diary",
        meta: {
          title: "我的日记",
        },
        component: () => import("@/views/diary/index.vue"),
      },
      {
        path: "/contact",
        name: "contact",
        meta: {
          title: "联系方式",
        },
        component: () => import("@/views/contact/index.vue"),
      },
      {
        path: "/contribute",
        name: "contribute",
        meta: {
          title: "投稿",
        },
        component: () => import("@/views/contribute/index.vue"),
      },
    ],
  },
  {
    path: "/article/detail/:id",
    name: "articleDetail",
    meta: {
      title: "详情",
    },
    component: () => import("@/views/article-detail/index.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  next();
  document.title = <string>to.meta.title || "个人博客";
});

export default router;
