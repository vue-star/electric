import axios from '@/libs/api.request'
// 获取箱变列表
export const getBoxTransformerList = (data) => {
    const MaxResultCount = data.maxResultCount
    const SkipCount = data.skipCount
    const Filter = data.filter

    return axios.request({
        url: 'services/app/BoxTransformer/GetPaged',
        params: {
            MaxResultCount,
            SkipCount,
            Filter
        },
        method: 'get'
    })
}
// 新增箱变
export const addBoxTransformer = (BoxTransformer) => {
    const data = BoxTransformer
    return axios.request({
        url: 'services/app/BoxTransformer/Create',
        data,
        method: 'post'
    })
}
// 删除箱变
export const delBoxTransformer = (id) => {
    return axios.request({
        url: 'services/app/BoxTransformer/Delete',
        params: {
            id
        },
        method: 'delete'
    })
}
// 修改箱变
export const updataBoxTransformer = (BoxTransformer) => {
    const data = BoxTransformer
    return axios.request({
        url: 'services/app/BoxTransformer/Update',
        data,
        method: 'put'
    })
}
