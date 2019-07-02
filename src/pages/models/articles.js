import { queryArticle } from '@/services/api';

export default {
  namespace: 'articles',

  state: {
    article: {},
    wechatjsconfig: {},
  },
  effects: {
    *fetch({ payload, callback }, { put, call }) {
      const response = yield call(queryArticle, payload);
      if (response.data.status !== 50000) if (callback) callback(response.data);
      yield put({
        type: 'save',
        payload: response.data.data,
      });
    },
  },
  reducers: {
    save(state, action) {
      return {
        ...state,
        article: action.payload,
      };
    },
  },
};
