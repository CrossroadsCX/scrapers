import request from 'request'
import { getHeaders } from '../utils/http'
import { run } from '../utils/scripts'
import NCLinks from '../resources/NC/links.json'

const main = async () => {
  const headers = await getHeaders(NCLinks.voterfileURI)

  return headers
}

run(main)
