import 'whatwg-fetch'
import { call, race } from 'redux-saga/effects'
import { delay } from 'redux-saga'

// Rails API URL
const baseURL = 'http://localhost:8080'

/**
 * Static Headers
 *
 */
const staticHeaders = {
  Accept: 'application/json',
  'Content-Type': 'application/json'
}

/**
 * Requests a URL, returning a promise
 *
 * @param  {string} url       The URL we want to request
 * @param  {object} [options] The options we want to pass to "fetch"
 *
 * @return {object}           The response data
 */
export default function* request(req : Object) {
  const { url, method = 'GET', headers, body } = req

  const { response } = yield race({
    response: call(fetch, baseURL + url, {
      method,
      headers: { staticHeaders, ...headers },
      body
    }),
    timeout: call(delay, 15 * 1000)
  })
  if (response) {
    if (!response.ok) {
      const error = new Error(`Something went wrong... Please try again [error status=${response.status}]`)
      error.responseJSON = yield response.json()
      throw error
    }
  } else {
    throw new Error('Network timeout')
  }
  return yield response.json()
}
