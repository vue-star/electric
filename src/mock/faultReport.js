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
export const getEchartData = req => {
  let echartData = []
  doCustomTimes(5, () => {
    echartData.push(Mock.mock({
      name: '@cname',
      voltage: Random.integer(0,100),
      current: Random.integer(0,100),
      intelnet: Random.integer(0,100),
      collection: Random.integer(0,100),
      function: Random.integer(0,100),
    }))
  })
  return echartData
}
