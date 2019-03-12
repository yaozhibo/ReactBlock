export default [
  {
    path: '/',
    component: '../layouts/index',
    routes: [
      {
        path: '/',
        redirect: '/home',
      },
      {
        path: '/home',
        name: 'home',
        component: './home',
      },
      {
        path: '/category',
        name: 'category',
        component: './category',
      },
      {
        path: '/article',
        name: 'article',
        component: './article',
      },
      {
        path: '/contact',
        name: 'contact',
        component: './contact'
      }
    ]
  }
]