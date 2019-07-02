import { loginUser } from '@/services/api';

export default {
  namespace: 'loginUsers',

  state: {
    user: {},
  },

  effects: {
    *submitLogin({ payload, callback }, { put, call }) {
      const response = yield call(loginUser, payload);
      if (response.data.status !== 50000) if (callback) callback(response);
      yield put({
        type: 'loginUser',
        payload: response.data.data,
      });
    },
  },

  reducers: {
    loginUser(state, action) {
      return {
        ...state,
        user: action.payload,
      };
    },
  },
};
