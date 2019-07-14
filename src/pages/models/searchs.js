import { searching } from '@/services/api';

export default {
  namespace: 'searching',

  state: {
    //
  },

  effects: {
    *fetch({ payload, callback }, { call }) {
      const response = yield call(searching, payload);
      if (response.status !== 50000) if (callback) callback(response.data);
    },
  },
};
