import request from '@/utils/request';

//查询categories集合
export async function querySet(params) {
  return request('api/ac/set/get', {
    method: 'post',
    body: {
      ...params,
    },
  });
}

/*eslint-disable */
//查询article列表
export async function queryAcArticle(params) {
  return request('/api/ac/a/get', {
    method: 'POST',
    body: {
      ...params,
    },
  });
}

// 查询文章
export async function queryArticle(params) {
  return request('/api/article/find', {
    method: 'POST',
    body: {
      ...params,
    },
  });
}

//注册用户
export async function registerUser(params) {
  return request('/api/user/register', {
    method: 'POST',
    body: {
      ...params,
    },
  });
}

// 用户登录
export async function loginUser(params) {
  return request('/api/user/login', {
    method: 'POST',
    body: {
      ...params,
    },
  });
}

// 用户注销
export async function logoutUser(params) {
  return request('/api/user/logout', {
    method: 'POST',
    body: {
      ...params,
    },
  });
}

//拉取用户信息
export async function infoCurrUser(params) {
  return request('/api/user/infoCurrUser', {
    method: 'POST',
    body: {
      ...params,
    },
  });
}

//消息
export async function message(params) {
  return request('/api/user/message', {
    method: 'POST',
    body: {
      ...params,
    },
  });
}

// 创建 post
export async function createPost(params) {
  return request('/api/post/create', {
    method: 'POST',
    body: {
      ...params,
    },
  });
}

// post 列表
export async function indexPost(params) {
  return request('/api/post/index', {
    method: 'POST',
    body: {
      ...params,
    },
  });
}

//热门 post
export async function indexHotPost(params) {
  return request('/api/post/hot', {
    method: 'POST',
    body: {
      ...params,
    },
  });
}

// post 内容
export async function detailPost(params) {
  return request('/api/post/find', {
    method: 'POST',
    body: {
      ...params,
    },
  });
}

// 更新 post
export async function updatePost(params) {
  return request('/api/post/update', {
    method: 'POST',
    body: {
      ...params,
    },
  });
}

// 删除 post
export async function deletePost(params) {
  return request('/api/post/delete', {
    method: 'POST',
    body: {
      ...params,
    },
  });
}

// 用户的文章
export async function userPosts(params) {
  return request('/api/user/posts', {
    method: 'POST',
    body: {
      ...params,
    },
  });
}

// 用户喜欢的文章
export async function userLikePost(params) {
  return request('/api/user/likePosts', {
    method: 'POST',
    body: {
      ...params,
    },
  });
}

// 基础配置
export async function subBasicSetting(params) {
  return request('/api/user/basicSetting', {
    method: 'POST',
    body: {
      ...params,
    },
  });
}

// 获取个人信息
export async function infoUserProfile(params) {
  return request('/api/user/infoUserProfile', {
    method: 'POST',
    body: {
      ...params,
    },
  });
}

// 获取指定用户个人信息
export async function infoIndicateUserProfile(params) {
  return request('/api/user/infoIndicateUserProfile', {
    method: 'POST',
    body: {
      ...params,
    },
  });
}

//更新个人信息
export async function updateUserProfile(params) {
  return request('/api/user/updateUserProfile', {
    method: 'POST',
    body: {
      ...params,
    },
  });
}

//重置密码
export async function resetPassword(params) {
  return request('/api/user/resetPassword', {
    method: 'POST',
    body: {
      ...params,
    },
  });
}

// 创建评论
export async function createComment(params) {
  return request('/api/comment/create', {
    method: 'POST',
    body: {
      ...params,
    },
  });
}

// 获取评论列表
export async function indexComment(params) {
  return request('/api/comment/index', {
    method: 'POST',
    body: {
      ...params,
    },
  });
}

// 删除评论
export async function deleteComment(params) {
  return request('/api/comment/delete', {
    method: 'POST',
    body: {
      ...params,
    },
  });
}

// 创建回复
export async function createReply(params) {
  return request('/api/reply/create', {
    method: 'POST',
    body: {
      ...params,
    },
  });
}

// 删除回复
export async function deleteReply(params) {
  return request('/api/reply/delete', {
    method: 'POST',
    body: {
      ...params,
    },
  });
}

// 创建 like
export async function createLike(params) {
  return request('/api/like/create', {
    method: 'POST',
    body: {
      ...params,
    },
  });
}

// 删除 like
export async function userCancelLikePost(params) {
  return request('/api/like/delete', {
    method: 'POST',
    body: {
      ...params,
    },
  });
}

//搜索
export async function searching(params) {
  return request('/api/search', {
    method: 'POST',
    body: {
      ...params,
    },
  });
}
