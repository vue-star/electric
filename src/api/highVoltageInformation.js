import axios from '@/libs/api.request'
// 获取高压列表
export const getHighVoltageInformationList = (id, data, type) => {
    const BoxTransformerOrPowerDistributionRoomId = id
    const BelongType = type
    const MaxResultCount = data.maxResultCount
    const SkipCount = data.skipCount
    const Filter = data.filter

    return axios.request({
        url: 'services/app/HighVoltageInformation/GetPaged',
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

// 删除高压
export const delHighVoltageInformation = (id) => {
    return axios.request({
        url: 'services/app/HighVoltageInformation/Delete',
        params: {
            id
        },
        method: 'delete'
    })
}
// 新增高压
export const addHighVoltageInformation = (HighVoltageInformation) => {
    const data = HighVoltageInformation
    return axios.request({
        url: 'services/app/HighVoltageInformation/Create',
        data,
        method: 'post'
    })
}
// 修改高压
export const updataHighVoltageInformation = (HighVoltageInformation) => {
    const data = HighVoltageInformation
    return axios.request({
        url: 'services/app/HighVoltageInformation/Update',
        data,
        method: 'put'
    })
}
// 新增高压组件
export const addHighVoltageItems = (HighVoltageItem) => {
    const data = HighVoltageItem
    return axios.request({
        url: 'services/app/HighVoltageInformation/CreatePowerEquipmentComponent',
        data,
        method: 'post'
    })
}
// 编辑高压组件
export const updataHighVoltageItems = (HighVoltageItem) => {
    const data = HighVoltageItem
    return axios.request({
        url: 'services/app/HighVoltageInformation/UpdatePowerEquipmentComponent',
        data,
        method: 'put'
    })
}

// 根据Id获取高压组件信息
export const getHighById = (HighVoltageId) => {
    const Id = HighVoltageId
    return axios.request({
        url: 'services/app/HighVoltageInformation/GetById',
        params: {
            Id
        },
        method: 'get'
    })
}
// 删除高压组件
export const delHighVoltageItems = (HighVoltageItemId) => {
    const Id = HighVoltageItemId
    return axios.request({
        url: 'services/app/HighVoltageInformation/DeleteEquipmentComponentAsync',
        params: {
            Id
        },
        method: 'delete'
    })
}
