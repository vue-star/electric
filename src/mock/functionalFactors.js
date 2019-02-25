import Mock from 'mockjs'
import {
    doCustomTimes
} from '@/libs/util'
const Random = Mock.Random

export const getFactorsData = req => {
    let tableData = []
    doCustomTimes(50, () => {
        tableData.push(Mock.mock({
            time: '@time',
            value: Random.integer(0, 100)
        }))
    })
    return tableData
}
