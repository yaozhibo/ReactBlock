import { createReply, deleteReply } from '@/services/api';

export default {
  namespace: 'replies',

  state: {
    //
  },

  effects: {
    *create({ payload, callback }, { call }) {
      const response = yield call(createReply, payload);
      if (response.data.status !== 50000) if (callback) callback(response.data);
    },

    *delete({ payload, callback }, { call }) {
      const response = yield call(deleteReply, payload);
      if (response.data.status !== 50000) if (callback) callback(response.data);
    },
  },
};
