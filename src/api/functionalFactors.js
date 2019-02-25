import axios from '@/libs/api.request'

// 获取客户列表
export const getFactorsData = () => {
    return axios.request({
        url: 'get_factors_data',
        method: 'get'
    })
}
