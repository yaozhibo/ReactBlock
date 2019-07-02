import { resetPassword } from '@/services/api';

export default {
  namespace: 'personManager',

  state: {
    //
  },

  effects: {
    *resetPassword({ payload, callback }, { call }) {
      const response = yield call(resetPassword, payload);
      if (response.status !== 50000) if (callback) callback(response.data);
    },
  },
};
