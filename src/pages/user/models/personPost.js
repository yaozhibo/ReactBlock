import { userPosts, userLikePost, userCancelLikePost } from '@/services/api';

export default {
  namespace: 'personPost',

  state: {
    //
  },
  effects: {
    *fetchIndex({ payload, callback }, { call }) {
      const response = yield call(userPosts, payload);
      if (response.data.status !== 50000) if (callback) callback(response);
    },
    *fetchPersonLikeIndex({ payload, callback }, { call }) {
      const response = yield call(userLikePost, payload);
      if (response.data.status !== 50000) if (callback) callback(response);
    },
    *cancelLikePost({ payload, callback }, { call }) {
      const response = yield call(userCancelLikePost, payload);
      if (response.data.status !== 50000) if (callback) callback(response.data);
    },
  },
};
