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
// 获取当日负荷曲线
export const getPowerTrendList = (ElectricityMeterInfoId) => {
    return axios.request({
        url: 'services/app/PowerStatistics/GetPowerTrendListAsync',
        params: {
            ElectricityMeterInfoId
        },
        method: 'get'
    })
}
// 获取电表对比趋势数据
export const getElectricityRingRatio = (electricityMeterInfoId) => {
    return axios.request({
        url: 'services/app/PowerStatistics/GetPowerRingRatioAsync',
        params: {
            electricityMeterInfoId
        },
        method: 'get'
    })
}
// 获取用电趋势
export const getUsePowerTrend = (ElectricityMeterInfoId) => {
    return axios.request({
        url: 'services/app/PowerStatistics/GetUsePowerTrendDtoAsync',
        params: {
            ElectricityMeterInfoId
        },
        method: 'get'
    })
}
