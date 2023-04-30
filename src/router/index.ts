import { type RouteRecordRaw, createWebHashHistory, createRouter } from 'vue-router'

const Layout = () => import('@/layout/layout-index.vue')

export const routes: RouteRecordRaw[] = [
  {
    path: '/login',
    component: () => import('@/views/login/login-index.vue'),
    meta: {
      hidden: true
    }
  },
  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    /**
     * * Temporary title for routes with children
     * TODO: check for nested routes
     * *See SidebarItem.vue
     */
    meta: {
      title: 'Dashboard'
    },
    children: [
      {
        path: 'dashboard',
        component: () => import('@/views/dashboard/dashboard-index.vue'),
        name: 'dashboard',
        meta: {
          title: 'Dashboard',
          activeMenu: '/dashboard'
        }
      }
    ]
  },
  {
    path: '/add',
    component: Layout,
    // * Temp: See comment above
    meta: {
      title: 'Add'
    },
    children: [
      {
        path: '',
        component: () => import('@/views/add/add-index.vue'),
        name: 'add',
        meta: {
          title: 'Add',
          activeMenu: '/add'
        }
      }
    ]
  },
  {
    path: '/logout',
    redirect: '/login',
    meta: {
      title: 'Logout',
      hidden: true
    }
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes // short for `routes: routes`
})

export default router
