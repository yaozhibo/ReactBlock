import { logoutUser, infoCurrUser } from '@/services/api';
export default {
  namespace: 'users',

  state: {
    userinfo: {},
  },

  effects: {
    *submitLogout({ payload, callback }, { call }) {
      const response = yield call(logoutUser, payload);
      if (response.data.status !== 50000) if (callback) callback(response);
    },

    *fetchCurrUser({ payload, callback }, { call }) {
      const response = yield call(infoCurrUser, payload);
      if (response.data.status !== 50000) if (callback) callback(response);
    },
  },

  reducers: {
    //
  },
};
