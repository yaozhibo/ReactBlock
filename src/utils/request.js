import fetch from 'dva/fetch'

function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response
  }

  const error = new Error(response.statusText)
  error.response = response
  throw error
}

/**
 * Requests a URL, returning a promise.
 *
 * @param  {string} url       The URL we want to request
 * @param  {object} [options] The options we want to pass to "fetch"
 * @return {object}           An object containing either "data" or "err"
 */
export default async function request(url, options) {
  const defaultOptions = {
    Accept: 'application/json',
    credentials: 'include',
    headers: {
      Key: '6c0d64c70a5df6bee51088964d7894e0',
      Accept: 'application/vnd.YiDong.v2+json',
    },
  }
  const newOptions = { ...defaultOptions, ...options }
  if (!(newOptions.body instanceof FormData)) {
    newOptions.headers = {
      'Content-Type': 'application/json; charset=utf-8',
      Key: '6c0d64c70a5df6bee51088964d7894e0',
      ...newOptions.headers,
    }
    newOptions.body = JSON.stringify(newOptions.body)
  }
  const response = await fetch(url, newOptions)

  checkStatus(response)

  const data = await response.json()

  const ret = {
    data,
    headers: {},
  }

  if (response.headers.get('x-total-count')) {
    ret.headers['x-total-count'] = response.headers.get('x-total-count')
  }

  return ret
}
