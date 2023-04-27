import { type RouteRecordRaw, createWebHashHistory, createRouter } from "vue-router";

const Layout = () => import("@/layout/index.vue")

export const routes: RouteRecordRaw[] = [
    {
        path: "/login",
        component: () => import("@/views/login/index.vue"),
        meta: {
            hidden: true
        }
    },
    {
        path: "/",
        component: Layout,
        redirect: "/dashboard",
        /** 
        * * Temporary title for routes with children
        * TODO: check for nested routes
        * *See SidebarItem.vue
        */
        meta: {
            title: "Dashboard"
        },
        children: [
            {
                path: "dashboard",
                component: () => import("@/views/dashboard/index.vue"),
                name: "dashboard",
                meta: {
                    title: "Dashboard"
                }
            }
        ]
    },
    {
        path: "/add",
        component: Layout,
        // * Temp: See comment above
        meta: {
            title: "Add"
        },
        children: [
            {
                path: "",
                component: () => import("@/views/add/index.vue"),
                name: "add",
                meta: {
                    title: "Add"
                }
            }
        ]
    },
    {
        path: "/logout",
        redirect: "/login",
        meta: {
            title: "Logout"
        }
    },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes, // short for `routes: routes`
})

export default router