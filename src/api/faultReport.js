import axios from '@/libs/api.request'
// 获取下拉列表
export const getElectricityDropdownList = () => {
    return axios.request({
        url: '/services/app/ElectricityMeterInfo/GetRouterInformationForDropdownList',
        method: 'get'
    })
}
// 获取故障汇总曲线
export const getFaultSummary = (StartDate, EndData, ElectricityMeterInfoId) => {
    return axios.request({
        url: 'services/app/PowerStatistics/GetFaultSummaryAsync',
        params: {
            StartDate,
            EndData,
            ElectricityMeterInfoId
        },
        method: 'get'
    })
}
// 获取故障汇总曲线
export const getFaultList = (StartDate, EndData, ElectricityMeterInfoId) => {
    return axios.request({
        url: 'services/app/PowerStatistics/GetFaultInformationAsync',
        params: {
            StartDate,
            EndData,
            ElectricityMeterInfoId
        },
        method: 'get'
    })
}
// 获取故障汇总曲线
export const getEchartData = (StartDate, EndData, ElectricityMeterInfoId) => {
    return axios.request({
        url: 'get_echart_data',
        params: {
            StartDate,
            EndData,
            ElectricityMeterInfoId
        },
        method: 'get'
    })
}
