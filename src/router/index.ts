import { type RouteRecordRaw, createWebHashHistory, createRouter, createWebHistory } from "vue-router";

const Layout = () => import("@/layout/index.vue")

export const routes: RouteRecordRaw[] = [
    {
        path: "/login",
        component: () => import("@/views/login/index.vue"),
    },
    {
        path: "/",
        component: Layout,
        redirect: "/dashboard",
        children: [
            {
                path: "dashboard",
                component: () => import("@/views/dashboard/index.vue")
            }
        ]
    },
    {
        path: "/add",
        component: Layout,
        redirect: "/add/index",
        children: [
            {
                path: "index",
                component: () => import("@/views/add/index.vue")
            }
        ]
    },
    {
        path: "/logout",
        redirect: "/login"
    },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes, // short for `routes: routes`
})

export default router