import axios from '@/libs/api.request'
// 获取用电概况
export const getUsePowerSummary = (organizationUnitId) => {
    return axios.request({
        url: 'services/app/PowerStatistics/GetUsePowerSummaryDtoAsync',
        params: {
            organizationUnitId
        },
        method: 'get'
    })
}
// 获取累积电力
export const getPowerSummary = (organizationUnitId) => {
    return axios.request({
        url: 'services/app/PowerStatistics/GetPowerSummaryAsync',
        params: {
            organizationUnitId
        },
        method: 'get'
    })
}
// 获取月累积电力
export const getMonthPowerSummary = (organizationUnitId) => {
    return axios.request({
        url: 'services/app/PowerStatistics/GetThisMonthPowerSummaryAsync',
        params: {
            organizationUnitId
        },
        method: 'get'
    })
}
// 获取年累积电力
export const getYearPowerSummary = (organizationUnitId) => {
    return axios.request({
        url: 'services/app/PowerStatistics/GetThisYearPowerSummaryAsync',
        params: {
            organizationUnitId
        },
        method: 'get'
    })
}
// 获取居民用电统计
export const getElectricitySummary = (organizationUnitId, StartDate, EndTime) => {
    return axios.request({
        url: 'services/app/PowerStatistics/GetElectricityConsumptionStatisticsDtoAsync',
        params: {
            organizationUnitId,
            StartDate,
            EndTime
        },
        method: 'get'
    })
}
