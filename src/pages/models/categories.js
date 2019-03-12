import { queryAcArticle } from '@/services/api'

export default {
  namespace: 'categories',

  state: {
    category: null,
    list: [],
  },
  effects: {
    * fetch({ payload, callback }, { call, put }) {
      const response = yield call(queryAcArticle, payload)
      if (response.data.status != 50000) { if (callback) callback() }
      yield put({
        type: 'save',
        payload: response.data.data,
      })
    },
  },
  reducers: {
    save(state, action) {
      return {
        ...state,
        category: action.payload.category,
        list: action.payload.articles,
      }
    }
  }
}