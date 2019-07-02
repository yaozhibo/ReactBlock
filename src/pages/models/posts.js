import { createPost, indexPost, detailPost, updatePost, deletePost } from '@/services/api';

export default {
  namespace: 'posts',

  state: {
    postList: [],
    postDetail: {
      title: '',
      content: '',
      users: {},
      created_at: '',
      appreciate: 0,
    },
  },

  effects: {
    *create({ payload, callback }, { call }) {
      const response = yield call(createPost, payload);
      if (response.data.status !== 50000) if (callback) callback(response.data);
    },
    *fetchList({ payload, callback }, { call, put }) {
      const response = yield call(indexPost, payload);
      if (response.data.status !== 50000) if (callback) callback(response.data);
      yield put({
        type: 'savePostList',
        payload: response.data.data,
      });
    },
    *fetch({ payload, callback }, { call, put }) {
      const response = yield call(detailPost, payload);
      if (response.data.status !== 50000) if (callback) callback(response.data);
      yield put({
        type: 'savePostDetail',
        payload: response.data.data,
      });
    },
    *update({ payload, callback }, { call }) {
      const response = yield call(updatePost, payload);
      if (response.data.status !== 50000) if (callback) callback(response.data);
    },
    *delete({ payload, callback }, { call }) {
      const response = yield call(deletePost, payload);
      if (response.data.status !== 50000) if (callback) callback(response.data);
    },
  },

  reducers: {
    savePostList(state, action) {
      return {
        ...state,
        postList: action.payload,
        isloading: false,
      };
    },

    savePostDetail(state, action) {
      return {
        ...state,
        postDetail: action.payload,
      };
    },
  },
};
