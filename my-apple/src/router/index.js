import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'

export const constantRoutes = [
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },

  {
    path: '/404',
    component: () => import('@/views/404'),
    hidden: true
  },

  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [
      {
        path: 'dashboard',
        name: 'Dashboard',
        component: () => import('@/views/dashboard/index'),
        meta: { title: 'Dashboard', icon: 'dashboard' }
      }
    ]
  },

  {
    path: '/example',
    component: Layout,
    redirect: '/example/user',
    name: 'Example',
    meta: { title: '用户管理', icon: 'example' },
    children: [
      {
        path: 'user',
        name: 'UserList',
        component: () => import('@/views/table/user'),
        meta: { title: '用户列表', icon: 'table' }
      },
      {
        path: 'order',
        name: 'OrderList',
        component: () => import('@/views/table/order'),
        meta: { title: '订单列表', icon: 'tree' }
      },
      {
        path: 'dz',
        name: 'DZList',
        component: () => import('@/views/table/dz'),
        meta: { title: '地址列表', icon: 'tree' }
      },
      {
        path: 'Newuser',
        name: 'NewuseruserList',
        component: () => import('@/views/table/new'),
        meta: { title: '用户新增', icon: 'table' }
      },
      {
        path: 'xiugai',
        name: 'XiugaiList',
        component: () => import('@/views/table/xiugai')
      }
    ]
  },
  // {
  //   path: '/dpguanli',
  //   component: Layout,
  //   redirect: '/dpguanli/user',
  //   name: 'DPguanli',
  //   meta: { title: '搭配管理', icon: 'example' },
  //   children: [
  //     {
  //       path: 'newlist',
  //       name: 'List',
  //       component: () => import('@/views/table/user'),
  //       meta: { title: '搭配列表', icon: 'table' }
  //     },
  //     {
  //       path: 'list',
  //       name: 'DPList',
  //       component: () => import('@/views/table/order'),
  //       meta: { title: '搭配新增', icon: 'tree' }
  //     }
  //   ]
  // },
  {
    path: '/products',
    component: Layout,
    redirect: '/products/index', // 当访问/products默认跳转到列表页
    name: 'Products',
    meta: { title: '商品管理', icon: 'example' },
    children: [
      {
        path: 'index',
        name: 'ProductsList',
        component: () => import('@/views/products/index'),
        meta: { title: '商品类表', icon: 'table' }
      },
      {
        path: 'new',
        name: 'ProductNew',
        component: () => import('@/views/products/new'),
        meta: { title: '商品新增', icon: 'tree' }
      },
      // {
      //   path: 'user',
      //   name: 'UserList',
      //   component: () => import('@/views/products/user'),
      //   meta: { title: '用户列表', icon: 'tree' }
      // },
      // {
      //   path: 'order',
      //   name: 'OrderList',
      //   component: () => import('@/views/products/order'),
      //   meta: { title: '订单列表', icon: 'tree' }
      // },
      // {
      //   path: 'dz',
      //   name: 'DZList',
      //   component: () => import('@/views/products/dz'),
      //   meta: { title: '地址列表', icon: 'tree' }
      // },
      {
        path: 'edit',
        name: 'ProductEdit',
        component: () => import('@/views/products/edit')
      }
    ]
  },

  {
    path: '/form',
    component: Layout,
    children: [
      {
        path: 'index',
        name: 'Form',
        component: () => import('@/views/form/index'),
        meta: { title: 'Form', icon: 'form' }
      }
    ]
  },

  {
    path: '/nested',
    component: Layout,
    redirect: '/nested/menu1',
    name: 'Nested',
    meta: {
      title: 'Nested',
      icon: 'nested'
    },
    children: [
      {
        path: 'menu1',
        component: () => import('@/views/nested/menu1/index'), // Parent router-view
        name: 'Menu1',
        meta: { title: 'Menu1' },
        children: [
          {
            path: 'menu1-1',
            component: () => import('@/views/nested/menu1/menu1-1'),
            name: 'Menu1-1',
            meta: { title: 'Menu1-1' }
          },
          {
            path: 'menu1-2',
            component: () => import('@/views/nested/menu1/menu1-2'),
            name: 'Menu1-2',
            meta: { title: 'Menu1-2' },
            children: [
              {
                path: 'menu1-2-1',
                component: () =>
                  import('@/views/nested/menu1/menu1-2/menu1-2-1'),
                name: 'Menu1-2-1',
                meta: { title: 'Menu1-2-1' }
              },
              {
                path: 'menu1-2-2',
                component: () =>
                  import('@/views/nested/menu1/menu1-2/menu1-2-2'),
                name: 'Menu1-2-2',
                meta: { title: 'Menu1-2-2' }
              }
            ]
          },
          {
            path: 'menu1-3',
            component: () => import('@/views/nested/menu1/menu1-3'),
            name: 'Menu1-3',
            meta: { title: 'Menu1-3' }
          }
        ]
      },
      {
        path: 'menu2',
        component: () => import('@/views/nested/menu2/index'),
        meta: { title: 'menu2' }
      }
    ]
  },

  {
    path: 'external-link',
    component: Layout,
    children: [
      {
        path: 'https://panjiachen.github.io/vue-element-admin-site/#/',
        meta: { title: 'External Link', icon: 'link' }
      }
    ]
  },

  // 404 page must be placed at the end !!!
  { path: '*', redirect: '/404', hidden: true }
]

const createRouter = () =>
  new Router({
    // mode: 'history', // require service support
    scrollBehavior: () => ({ y: 0 }),
    routes: constantRoutes
  })

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
