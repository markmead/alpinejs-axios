import axios from 'axios'

import { splitUrl } from './apiUtils'

export const apiGet = (apiUrl = '', apiOptions = {}) => {
  async function getApiResponse() {
    try {
      const { endpointUrl, endpointData } = splitUrl(apiUrl)

      const apiResponse = await axios.get(endpointUrl, apiOptions)

      return endpointData ? apiResponse[endpointData] : apiResponse
    } catch (apiError) {
      return apiError
    }
  }

  return getApiResponse()
}

export const apiPost = (apiUrl = '', apiData = {}, apiOptions = {}) => {
  async function getApiResponse() {
    try {
      const { endpointUrl, endpointData } = splitUrl(apiUrl)

      const apiResponse = await axios.post(endpointUrl, apiData, apiOptions)

      return endpointData ? apiResponse[endpointData] : apiResponse
    } catch (apiError) {
      return apiError
    }
  }

  return getApiResponse()
}

export const apiPut = (apiUrl = '', apiData = {}, apiOptions = {}) => {
  async function getApiResponse() {
    try {
      const { endpointUrl, endpointData } = splitUrl(apiUrl)

      const apiResponse = await axios.put(endpointUrl, apiData, apiOptions)

      return endpointData ? apiResponse[endpointData] : apiResponse
    } catch (apiError) {
      return apiError
    }
  }

  return getApiResponse()
}

export const apiDelete = (apiUrl = '', apiOptions = {}) => {
  async function getApiResponse() {
    try {
      const { endpointUrl, endpointData } = splitUrl(apiUrl)

      const apiResponse = await axios.delete(endpointUrl, apiOptions)

      return endpointData ? apiResponse[endpointData] : apiResponse
    } catch (apiError) {
      return apiError
    }
  }

  return getApiResponse()
}
