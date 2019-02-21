import Mock from 'mockjs'
import { doCustomTimes } from '@/libs/util'
const Random = Mock.Random

export const getFaultList = req => {
  let tableData = []
  doCustomTimes(5, () => {
    tableData.push(Mock.mock({
      name: '@name',
      faultType: Random.csentence(10, 13),
      faultDescribe: Random.csentence(10, 13),
      alarmNumber: Random.increment(10), // ^1[385][1-9]\d{8}/,//手机号
      faultContent: Random.csentence(10, 13),
      isAlarm: '@boolean',
      faultTime: '@date'
    }))
  })
  return tableData
}

export const getDragList = req => {
  let dragList = []
  doCustomTimes(5, () => {
    dragList.push(Mock.mock({
      name: Random.csentence(10, 13),
      id: Random.increment(10)
    }))
  })
  return dragList
}
