import { registerUser } from '@/services/api';

export default {
  namespace: 'registUsers',

  state: {
    //
  },
  effects: {
    *submitRegister({ payload, callback }, { call }) {
      const response = yield call(registerUser, payload);
      if (response.data.status !== 50000) if (callback) callback(response);
    },
  },

  reducers: {
    //
  },
};
