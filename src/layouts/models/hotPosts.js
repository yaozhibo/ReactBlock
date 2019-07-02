import { indexHotPost } from '@/services/api';

export default {
  namespace: 'hotPosts',

  state: {
    //
  },

  effects: {
    *fetchHots({ payload, callback }, { call, put }) {
      const response = yield call(indexHotPost, payload);
      if (response.status !== 50000) if (callback) callback(response.data);
      // yield put({
      //   type: 'saveHots',
      //   payload: response.data.data,
      // });
    },
  },
};
