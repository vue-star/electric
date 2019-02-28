import axios from '@/libs/api.request'

export const getData = () => {
  return axios.request({
    url: 'services/app/HomePage/GetHomePageInformationInfoAsync',
    method: 'get'
  })
}
