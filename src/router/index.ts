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
    redirect: '/add/index',
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
      },
      {
        path: '/edit',
        component: () => import('@/views/edit/edit-index.vue'),
        name: 'edit',
        meta: {
          title: 'Edit',
          activeMenu: '/edit'
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
