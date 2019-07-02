export default [
  {
    path: '/user',
    component: '../layouts/index_1',
    routes: [
      {
        path: '/user/login',
        name: 'login',
        component: './user/Login',
        Routes: ['src/middleware/NotAuthorized'],
      },
      {
        path: '/user/register',
        name: 'register',
        component: './user/Register',
        Routes: ['src/middleware/NotAuthorized'],
      },
      {
        path: '/user/setting',
        name: 'personSetting',
        title: '个人设置',
        component: './user/personSetting',
        Routes: ['src/middleware/Authorized'],
      },
      {
        path: '/user/:username',
        name: 'personplace',
        title: '个人空间',
        component: './user/personPlace',
      },
    ],
  },
  {
    path: '/',
    component: '../layouts/index',
    routes: [
      {
        path: '/',
        redirect: '/block',
      },
      {
        path: '/introduce',
        name: 'introduce',
        component: './introduce',
      },
      {
        path: '/category',
        name: 'category',
        title: '杂志',
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
        component: './contact',
      },
      {
        path: '/block',
        name: 'block',
        title: '社区',
        component: './block',
      },
      {
        path: '/editor',
        name: 'editor',
        title: '编辑文章',
        component: './editor',
        Routes: ['src/middleware/Authorized'],
      },
      {
        path: '/post/:slug',
        name: 'post',
        title: '文章',
        component: './post',
      },
      {
        path: '/post/:slug/edit',
        name: 'post',
        title: '编辑文章',
        component: './postEditor',
        Routes: ['src/middleware/Authorized'],
      },
      {
        component: '404',
      },
    ],
  },
];
