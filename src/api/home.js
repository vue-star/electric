import axios from '@/libs/api.request'

export const getData = () => {
  return axios.request({
    url: 'services/app/HomePage/GetHomePageInformationInfoAsync',
    method: 'get'
  })
}
export const getCustomerInfor = () => {
  return axios.request({
    url: 'services/app/Customer/GetPaged',
    method: 'get'
  })
}
