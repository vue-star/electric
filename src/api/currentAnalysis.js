import axios from '@/libs/api.request'

// 获取下拉列表
export const getElectricityDropdownList = (organizationUnitId) => {
    return axios.request({
        url: 'services/app/ElectricityMeterInfo/GetCustomerElectricityMeterInfoDropdownList',
        params: {
            organizationUnitId
        },
        method: 'get'
    })
}
// 获取功率因素曲线
export const getCurrentAnalysis = (StartDate, EndData, ElectricityMeterInfoId) => {
    return axios.request({
        url: 'services/app/PowerStatistics/GetCurrentAnalysisAsync',
        params: {
            StartDate,
            EndData,
            ElectricityMeterInfoId
        },
        method: 'get'
    })
}
