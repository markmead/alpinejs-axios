import axios from 'axios'

import { filterResponse, splitUrl } from './apiUtils'

export const apiGet = (apiUrl = '', apiOptions = {}) => {
  async function getApiResponse() {
    try {
      const { endpointUrl, endpointData } = splitUrl(apiUrl)

      const apiResponse = await axios.get(endpointUrl, apiOptions)

      if (!endpointData) {
        return apiResponse
      }

      return filterResponse(apiResponse, endpointData)
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

      if (!endpointData) {
        return apiResponse
      }

      return filterResponse(apiResponse, endpointData)
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

      if (!endpointData) {
        return apiResponse
      }

      return filterResponse(apiResponse, endpointData)
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

      if (!endpointData) {
        return apiResponse
      }

      return filterResponse(apiResponse, endpointData)
    } catch (apiError) {
      return apiError
    }
  }

  return getApiResponse()
}
