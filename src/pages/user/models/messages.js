import { message } from '@/services/api';

export default {
  namespace: 'messages',

  state: {
    //
  },

  effects: {
    *fetch({ payload, callback }, { call }) {
      const response = yield call(message, payload);
      if (response.data.status !== 50000) if (callback) callback(response.data);
    },
  },
};
