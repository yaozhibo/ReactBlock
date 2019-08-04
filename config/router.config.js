export default [
  {
    path: '/user',
    component: '../layouts/index_1',
    routes: [
      {
        path: '/user/login',
        name: 'login',
        title: '登陆 --粒子空间',
        component: './user/Login',
        Routes: ['src/middleware/NotAuthorized'],
      },
      {
        path: '/user/register',
        name: 'register',
        title: '注册 --粒子空间',
        component: './user/Register',
        Routes: ['src/middleware/NotAuthorized'],
      },
      {
        path: '/user/setting',
        name: 'personSetting',
        title: '个人设置 --粒子空间',
        component: './user/personSetting',
        Routes: ['src/middleware/Authorized'],
      },
      {
        path: '/user/message',
        name: 'message',
        title: '消息 --粒子空间',
        component: './user/message',
        Routes: ['src/middleware/Authorized'],
      },
      {
        path: '/user/:username',
        name: 'personplace',
        title: '个人空间 --粒子空间',
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
        title: '关于我们 --粒子空间',
        component: './introduce',
      },
      {
        path: '/magazine',
        name: 'magazine',
        title: '杂志 --粒子空间',
        component: './magazine',
      },
      {
        path: '/category',
        name: 'category',
        // title: '杂志 --粒子空间',
        component: './category',
      },
      {
        path: '/tutorialCategories',
        name: 'tutorialCategories',
        component: './tutorialCategories',
      },
      {
        path: '/article',
        name: 'article',
        component: './article',
      },
      {
        path: '/contact',
        name: 'contact',
        title: '联系我们 --粒子空间',
        component: './contact',
      },
      {
        path: '/block',
        name: 'block',
        title: '社区 --粒子空间',
        component: './block',
      },
      {
        path: '/editor',
        name: 'editor',
        title: '编辑文章 --粒子空间',
        component: './editor',
        Routes: ['src/middleware/Authorized'],
      },
      {
        path: '/post/:slug',
        name: 'post',
        // title: '文章 --粒子空间',
        component: './post',
      },
      {
        path: '/post/:slug/edit',
        name: 'post',
        title: '编辑文章 --粒子空间',
        component: './postEditor',
        Routes: ['src/middleware/Authorized'],
      },
      {
        path: '/search',
        name: 'search',
        component: './SearchTool',
      },
      {
        component: '404',
      },
    ],
  },
];
