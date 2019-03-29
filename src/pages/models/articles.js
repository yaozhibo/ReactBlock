import { queryArticle, queryWeChatJsSdkConfig } from '@/services/api'

export default {
  namespace: 'articles',

  state: {
    article: {},
    wechatjsconfig: {},
  },
  effects: {
    * fetch({ payload, callback }, { put, call }) {
      const response = yield call(queryArticle, payload)
      if (response.data.status !== 50000) if (callback) callback()
      yield put({
        type: 'save',
        payload: response.data.data,
      })
    },
    * fetchWeChatJsSdkConfig({ payload, callback }, { put, call }) {
      const response = yield call(queryWeChatJsSdkConfig, payload)
      if (response.data.status !== 50000) if (callback) callback()
      yield put({
        type: 'saveWechatJsSdkConfig',
        payload: response.data.data,
      })
    }
  },
  reducers: {
    save(state, action) {
      return {
        ...state,
        article: action.payload,
      }
    },
    saveWechatJsSdkConfig(state, action) {
      return {
        ...state,
        wechatjsconfig: action.payload,
      }
    }
  },
}
