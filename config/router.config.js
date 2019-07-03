export default [
  {
    path: '/user',
    component: '../layouts/index_1',
    routes: [
      {
        path: '/user/login',
        name: 'login',
        title: '登陆 --沸点',
        component: './user/Login',
        Routes: ['src/middleware/NotAuthorized'],
      },
      {
        path: '/user/register',
        name: 'register',
        title: '注册 --沸点',
        component: './user/Register',
        Routes: ['src/middleware/NotAuthorized'],
      },
      {
        path: '/user/setting',
        name: 'personSetting',
        title: '个人设置 --沸点',
        component: './user/personSetting',
        Routes: ['src/middleware/Authorized'],
      },
      {
        path: '/user/:username',
        name: 'personplace',
        title: '个人空间 --沸点',
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
        title: '关于我们 --沸点',
        component: './introduce',
      },
      {
        path: '/category',
        name: 'category',
        // title: '杂志 --沸点',
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
        title: '联系我们 --沸点',
        component: './contact',
      },
      {
        path: '/block',
        name: 'block',
        title: '社区 --沸点',
        component: './block',
      },
      {
        path: '/editor',
        name: 'editor',
        title: '编辑文章 --沸点',
        component: './editor',
        Routes: ['src/middleware/Authorized'],
      },
      {
        path: '/post/:slug',
        name: 'post',
        // title: '文章 --沸点',
        component: './post',
      },
      {
        path: '/post/:slug/edit',
        name: 'post',
        title: '编辑文章 --沸点',
        component: './postEditor',
        Routes: ['src/middleware/Authorized'],
      },
      {
        component: '404',
      },
    ],
  },
];
