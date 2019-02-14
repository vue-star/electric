import axios from '@/libs/api.request'
// 获取变压列表
export const getTransInformationList = (id, data, type) => {
    const BoxTransformerOrPowerDistributionRoomId = id
    const BelongType = type
    const MaxResultCount = data.maxResultCount
    const SkipCount = data.skipCount
    const Filter = data.filter

    return axios.request({
        url: 'services/app/TransformerInformation/GetPaged',
        params: {
            BoxTransformerOrPowerDistributionRoomId,
            BelongType,
            MaxResultCount,
            SkipCount,
            Filter
        },
        method: 'get'
    })
}
// 新增变压
export const addTransInformation = (TransformerInformation) => {
    const data = TransformerInformation
    return axios.request({
        url: 'services/app/TransformerInformation/Create',
        data,
        method: 'post'
    })
}
// 删除变压
export const delTransInformation = (id) => {
    return axios.request({
        url: 'services/app/TransformerInformation/Delete',
        params: {
            id
        },
        method: 'delete'
    })
}
// 修改变压
export const updataTransInformation = (TransformerInformation) => {
    const data = TransformerInformation
    return axios.request({
        url: 'services/app/TransformerInformation/Update',
        data,
        method: 'put'
    })
}
