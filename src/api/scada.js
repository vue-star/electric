import axios from '@/libs/api.request'

export const getEleHistoryData = (organizationUnitId) => {
    return axios.request({
        url: 'services/app/PowerStatistics/GetHistoryDataDtoListAsync',
        params: {
            organizationUnitId
        },
        method: 'get'
    })
}
export const getElectricityMeter = (CustomerId) => {
    return axios.request({
        url: 'ElectricityMeter/ElectricityMeters',
        params: {
            CustomerId
        },
        method: 'get'
    })
}
