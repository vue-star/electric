import axios from '@/libs/api.request'
//获取高压列表
export const getTransInformationList = (id,data) => {
    const BoxTransformerOrPowerDistributionRoomId=id;
    const BelongType=1;
    const MaxResultCount=data.maxResultCount;
    const SkipCount=data.skipCount;
    const Filter=data.filter

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
//新增高压
export const addTransInformation = (TransformerInformation) => {
    const data = TransformerInformation;
    return axios.request({
        url: 'services/app/TransformerInformation/Create',
        data,
        method: 'post'
    })
}
//删除高压
export const delTransInformation = (id) => {
    return axios.request({
        url: 'services/app/TransformerInformation/Delete',
        params: {
            id
        },
        method: 'delete'
    })
}
//修改高压
export const updataTransInformation = (TransformerInformation) => {
    const data = TransformerInformation;
    return axios.request({
        url: 'services/app/TransformerInformation/Update',
        data,
        method: 'put'
    })
}
