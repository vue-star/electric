import axios from '@/libs/api.request'
// 获取用电概况
export const getEnergyDataList = (OrganizationUnitId,ElectricityBelongType,StartTime) => {
    return axios.request({
        url: 'services/app/PowerStatistics/GetEnergyAnalysisAsync',
        params: {
            OrganizationUnitId,
            ElectricityBelongType,
            StartTime
        },
        method: 'get'
    })
}