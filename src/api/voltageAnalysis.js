import axios from '@/libs/api.request'

// 获取下拉列表
export const getElectricityDropdownList = () => {
    return axios.request({
        url: '/services/app/ElectricityMeterInfo/GetRouterInformationForDropdownList',
        method: 'get'
    })
}
// 获取功率因素曲线
export const getVoltageAnalysis = (StartDate, EndData, ElectricityMeterInfoId) => {
    return axios.request({
        url: 'services/app/PowerStatistics/GetVoltageAnalysisAsync',
        params: {
            StartDate,
            EndData,
            ElectricityMeterInfoId
        },
        method: 'get'
    })
}
