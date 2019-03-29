import request from '@/utils/request'

/*eslint-disable */
export async function queryAcArticle(params) {
  return request('/api/ac/a/get', {
    method: 'POST',
    body: {
      ...params,
    }
  })
}

export async function queryArticle(params) {
  return request('/api/article/find', {
    method: 'POST',
    body: {
      ...params,
    }
  })
}

export async function queryWeChatJsSdkConfig(params) {
  return request('/api/wechat/jssdkconfig', {
    method: 'POST',
    body: {
      ...params,
    }
  })
}