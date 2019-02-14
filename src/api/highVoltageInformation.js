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
// 新增负荷开关
export const addLoadSwitch = (LoadSwitch) => {
    const data = LoadSwitch
    return axios.request({
        url: 'services/app/HighVoltageInformation/CreateLoadSwitch',
        data,
        method: 'post'
    })
}
// 修改负荷开关
export const updataLoadSwitch = (LoadSwitch) => {
    const data = LoadSwitch
    return axios.request({
        url: 'services/app/HighVoltageInformation/UpdateLoadSwitch',
        data,
        method: 'put'
    })
}
// 新增电流互感器
export const addCurrentTransformer = (CurrentTransformer) => {
    const data = CurrentTransformer
    return axios.request({
        url: 'services/app/HighVoltageInformation/CreateCurrentTransformer',
        data,
        method: 'post'
    })
}
// 修改电流互感器
export const updataCurrentTransformer = (CurrentTransformer) => {
    const data = CurrentTransformer
    return axios.request({
        url: 'services/app/HighVoltageInformation/UpdateCurrentTransformer',
        data,
        method: 'put'
    })
}
// 新增电压互感器
export const addVoltageTransformer = (VoltageTransformer) => {
    const data = VoltageTransformer
    return axios.request({
        url: 'services/app/HighVoltageInformation/CreateVoltageTransformer',
        data,
        method: 'post'
    })
}
// 修改电压互感器
export const updataVoltageTransformer = (VoltageTransformer) => {
    const data = VoltageTransformer
    return axios.request({
        url: 'services/app/HighVoltageInformation/UpdateVoltageTransformer',
        data,
        method: 'put'
    })
}
// 新增高压熔断器
export const addHighVoltageFuse = (HighVoltageFuse) => {
    const data = HighVoltageFuse
    return axios.request({
        url: 'services/app/HighVoltageInformation/CreateHighVoltageFuse',
        data,
        method: 'post'
    })
}
// 修改高压熔断器
export const updataHighVoltageFuse = (HighVoltageFuse) => {
    const data = HighVoltageFuse
    return axios.request({
        url: 'services/app/HighVoltageInformation/UpdateHighVoltageFuse',
        data,
        method: 'put'
    })
}
// 新增电缆
export const addCable = (Cable) => {
    const data = Cable
    return axios.request({
        url: 'services/app/HighVoltageInformation/CreateCable',
        data,
        method: 'post'
    })
}
// 修改电缆
export const updataCable = (Cable) => {
    const data = Cable
    return axios.request({
        url: 'services/app/HighVoltageInformation/UpdateCable',
        data,
        method: 'put'
    })
}
