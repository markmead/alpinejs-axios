export function splitUrl(apiUrl) {
  const endpointUrl = apiUrl.replace(/\[(.*?)\]/g, '')
  const endpointData = apiUrl.match(/\[(.*?)\]/g)?.[0]?.replace(/[\[\]']+/g, '')

  return { endpointUrl, endpointData }
}

export function filterResponse(apiResponse, responseData) {
  const filteredApiResponse = {}
  const dataKeys = responseData.split(',').map((dataKey) => dataKey.trim())

  dataKeys.forEach((dataKey) => {
    filteredApiResponse[dataKey] = apiResponse[dataKey]
  })

  return filteredApiResponse
}
