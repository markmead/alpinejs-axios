export function splitUrl(apiUrl) {
  const endpointUrl = apiUrl.replace(/\[(.*?)\]/g, '')
  const endpointData = apiUrl.match(/\[(.*?)\]/g)?.[0]?.replace(/[\[\]']+/g, '')

  return { endpointUrl, endpointData }
}
