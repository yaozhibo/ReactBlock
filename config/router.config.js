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
        title: '大数据报告',
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
        title: '联系我们',
        component: './contact'
      },
      {
        component: '404'
      }
    ]
  }
]