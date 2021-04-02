
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Todo.vue') },
      { path: '/ipratropium', component: () => import('pages/Ipratropium.vue') },
      { path: '/activated', component: () => import('pages/Activated.vue') },
      { path: '/dextrose', component: () => import('pages/Dextrose.vue') },
      { path: '/glucogel', component: () => import('pages/Glucogel.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
