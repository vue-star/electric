import axios from '@/libs/api.request'
//获取低压列表
export const getLowVoltageInformationList = (id,data) => {
    const BoxTransformerOrPowerDistributionRoomId=id;
    const BelongType=1;
    const MaxResultCount=data.maxResultCount;
    const SkipCount=data.skipCount;
    const Filter=data.filter

    return axios.request({
        url: 'services/app/LowVoltageInformation/GetPaged',
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
//新增低压
export const addLowVoltageInformation = (LowVoltageInformation) => {
    const data = LowVoltageInformation;
    return axios.request({
        url: 'services/app/LowVoltageInformation/Create',
        data,
        method: 'post'
    })
}
//删除低压
export const delLowVoltageInformation = (id) => {
    return axios.request({
        url: 'services/app/LowVoltageInformation/Delete',
        params: {
            id
        },
        method: 'delete'
    })
}
//修改低压
export const updataLowVoltageInformation = (LowVoltageInformation) => {
    const data = LowVoltageInformation;
    return axios.request({
        url: 'services/app/LowVoltageInformation/Update',
        data,
        method: 'put'
    })
}
//新增断路器信息
export const createBreaker = (Breaker) => {
    const data = Breaker;
    return axios.request({
        url: 'services/app/LowVoltageInformation/CreateBreaker',
        data,
        method: 'post'
    })
}
//更新断路器信息
export const updateBreaker = (Breaker) => {
    const data = Breaker;
    return axios.request({
        url: 'services/app/LowVoltageInformation/UpdateBreaker',
        data,
        method: 'put'
    })
}
//新增电容器信息
export const createCapacitor = (Capacitor) => {
    const data = Capacitor;
    return axios.request({
        url: 'services/app/LowVoltageInformation/CreateCapacitor',
        data,
        method: 'post'
    })
}
//更新电容器信息
export const updateCapacitor = (Capacitor) => {
    const data = Capacitor;
    return axios.request({
        url: 'services/app/LowVoltageInformation/UpdateCapacitor',
        data,
        method: 'put'
    })
}
//新增隔离开关信息
export const createIsolationSwitch = (IsolationSwitch) => {
    const data = IsolationSwitch;
    return axios.request({
        url: 'services/app/LowVoltageInformation/CreateIsolationSwitch',
        data,
        method: 'post'
    })
}
//更新隔离开关信息
export const updateIsolationSwitch = (IsolationSwitch) => {
    const data = IsolationSwitch;
    return axios.request({
        url: 'services/app/LowVoltageInformation/UpdateIsolationSwitch',
        data,
        method: 'put'
    })
}
//新增出线电缆
export const createOutCable = (OutCable) => {
    const data = OutCable;
    return axios.request({
        url: 'services/app/LowVoltageInformation/CreateOutCable',
        data,
        method: 'post'
    })
}
//更新出线电缆
export const updateOutCable = (OutCable) => {
    const data = OutCable;
    return axios.request({
        url: 'services/app/LowVoltageInformation/UpdateOutCable',
        data,
        method: 'put'
    })
}