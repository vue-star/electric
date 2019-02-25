import Mock from 'mockjs'
import {
    doCustomTimes
} from '@/libs/util'
const Random = Mock.Random

export const getMessageList = req => {
    let tableData = []
    doCustomTimes(5, () => {
        tableData.push(Mock.mock({
            name: '@name',
            faultType: Random.csentence(10, 13),
            msgContent: Random.csentence(10, 13),
            msgNumber: /^1[385][1-9]\d{8}/,
            sendState: '@boolean',
            msgTime: '@date'
        }))
    })
    return tableData
}
