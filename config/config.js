import { resolve } from 'path'
import pageRoutes from './router.config'

const plugins = [
  // ref: https://umijs.org/plugin/umi-plugin-react.html
  ['umi-plugin-react', {
    antd: true,
    dva: true,
    dynamicImport: { webpackChunkName: true },
    title: 'YiDongDataForum',
    dll: true,
    routes: {
      exclude: [

        /models\//,
        /services\//,
        /model\.(t|j)sx?$/,
        /service\.(t|j)sx?$/,

        /components\//,
      ],
    },
  }],
]

const alias = {
  '@': resolve('src'),
}

export default {
  plugins,
  targets: {
    ie: 11,
  },
  routes: pageRoutes,
  alias,
  proxy: {
    '/api': {
      target: 'http://yidongdataadmin.test',
      changeOrigin: true,
    },
  },
}
