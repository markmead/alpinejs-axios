import { apiDelete, apiGet, apiPost, apiPut } from './apiMethods'

export default function (Alpine) {
  Alpine.magic('get', () => (apiUrl = '', apiOptions = {}) => {
    return apiGet(apiUrl, apiOptions)
  })

  Alpine.magic('post', () => (apiUrl = '', apiData = {}, apiOptions = {}) => {
    return apiPost(apiUrl, apiData, apiOptions)
  })

  Alpine.magic('put', () => (apiUrl = '', apiData = {}, apiOptions = {}) => {
    return apiPut(apiUrl, apiData, apiOptions)
  })

  Alpine.magic('patch', () => (apiUrl = '', apiData = {}, apiOptions = {}) => {
    return apiPut(apiUrl, apiData, apiOptions)
  })

  Alpine.magic('delete', () => (apiUrl = '', apiOptions = {}) => {
    return apiDelete(apiUrl, apiOptions)
  })
}
