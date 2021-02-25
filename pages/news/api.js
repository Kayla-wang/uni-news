
import request from '../../common/request.js'
export function simpleWeatherquery(data) {
  return request({
    url: '/simpleWeather/query',
    method: 'POST',
    data: data
  })
}