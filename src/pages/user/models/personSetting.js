import { infoCurrUser, subBasicSetting } from '@/services/api';

export default {
  namespace: 'personSetting',
  state: {},
  effects: {
    *fetchUser({ payload, callback }, { call }) {
      const response = yield call(infoCurrUser, payload);
      if (response.data.status !== 50000) if (callback) callback(response.data);
    },
    *submitBasicSett({ payload, callback }, { call }) {
      const response = yield call(subBasicSetting, payload);
      if (response.data.status !== 50000) if (callback) callback(response.data);
    },
  },
};
