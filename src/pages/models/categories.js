import { queryAcArticle, querySet } from '@/services/api';

export default {
  namespace: 'categories',

  state: {
    category: null,
    list: [],
  },
  effects: {
    *fetch({ payload, callback }, { call, put }) {
      const response = yield call(queryAcArticle, payload);
      if (response.data.status !== 50000) {
        if (callback) callback(response.data);
      }
      yield put({
        type: 'save',
        payload: response.data.data,
      });
    },
    *fetchSet({ payload, callback }, { call, put }) {
      const response = yield call(querySet, payload);
      if (response.data.status != 50000) {
        if (callback) callback();
      }
      yield put({
        type: 'saveSet',
        payload: response.data.data,
      });
    },
  },
  reducers: {
    save(state, action) {
      return {
        ...state,
        category: action.payload.category,
        list: action.payload.articles,
      };
    },
    saveSet(state, action) {
      return {
        ...state,
        set: action.payload,
      };
    },
  },
};
