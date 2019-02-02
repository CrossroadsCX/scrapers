import request from 'request-promise'

export const getHeaders = async (uri) => {
  const res = await request({
    method: 'HEAD',
    uri,
  })

  return res
}
