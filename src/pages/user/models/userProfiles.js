import { infoIndicateUserProfile } from '@/services/api';

export default {
  namespace: 'userProfiles',

  state: {
    profile: {},
  },

  effects: {
    *fetch({ payload, callback }, { call, put }) {
      const response = yield call(infoIndicateUserProfile, payload);
      if (response.data.status !== 50000) if (callback) callback(response.data);
      yield put({
        type: 'saveUserProfile',
        payload: response.data.data,
      });
    },
  },

  reducers: {
    saveUserProfile(state, action) {
      return {
        ...state,
        profile: action.payload,
      };
    },
  },
};
