import axios from '@/libs/api.request'
// 获取用电概况
export const getEnergyDataList = (OrganizationUnitId,data) => {
    const MaxResultCount = data.maxResultCount
    const SkipCount = data.skipCount
    const Filter = data.filter

    return axios.request({
        url: 'get_data_list/',
        params: {
            OrganizationUnitId,
            MaxResultCount,
            SkipCount,
            Filter
        },
        method: 'get'
    })
}