import { infoUserProfile, updateUserProfile } from '@/services/api';

export default {
  namespace: 'personProfiles',

  state: {
    //
  },

  effects: {
    *fetch({ payload, callback }, { call }) {
      const response = yield call(infoUserProfile, payload);
      if (response.data.status !== 50000) if (callback) callback(response.data);
    },
    *updateUserProfile({ payload, callback }, { call }) {
      const response = yield call(updateUserProfile, payload);
      if (response.data.status !== 50000) if (callback) callback(response.data);
    },
  },
};
