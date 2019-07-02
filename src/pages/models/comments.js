import { createComment, indexComment, deleteComment } from '@/services/api';

export default {
  namespace: 'comments',

  state: {
    commentList: [],
  },

  effects: {
    *create({ payload, callback }, { call }) {
      const response = yield call(createComment, payload);
      if (response.data.status !== 50000) if (callback) callback(response.data);
    },

    *fetchCommentIndex({ payload, callback }, { call, put }) {
      const response = yield call(indexComment, payload);
      if (response.data.status !== 50000) if (callback) callback(response.data);
      yield put({
        type: 'saveCommentList',
        payload: response.data.data,
      });
    },
    *delete({ payload, callback }, { call }) {
      const response = yield call(deleteComment, payload);
      if (response.data.status != 50000) if (callback) callback(response.data);
    },
  },

  reducers: {
    saveCommentList(state, action) {
      return {
        ...state,
        commentList: action.payload,
      };
    },
  },
};
