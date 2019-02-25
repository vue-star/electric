import axios from '@/libs/api.request'

// 获取客户列表
export const getEchartData = () => {
    return axios.request({
        url: 'get_echart_data',
        method: 'get'
    })
}