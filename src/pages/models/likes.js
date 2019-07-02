import { createLike } from '@/services/api';

export default {
  namespace: 'likes',

  state: {
    //
  },

  effects: {
    *create({ payload, callback }, { call }) {
      const response = yield call(createLike, payload);
      if (response.data.status !== 50000) if (callback) callback(response.data);
    },
  },
};
