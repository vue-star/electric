import Mock from 'mockjs'
import { doCustomTimes } from '@/libs/util'
const Random = Mock.Random

export const getTableData = req => {
  let tableData = []
  doCustomTimes(5, () => {
    tableData.push(Mock.mock({
      name: '@name',
      email: '@email',
      createTime: '@date'
    }))
  })
  return tableData
}

export const getDragList = req => {
  let dragList = []
  doCustomTimes(5, () => {
    dragList.push(Mock.mock({
      name: '@name',
      id: Random.increment(10)
    }))
  })
  return dragList
}
export const getDataList = req => {
  let dragList = []
  doCustomTimes(1, () => {
    dragList.push(Mock.mock({
      电压故障: Random.integer(0,1000),
      电流故障: Random.integer(0,1000),
      采集故障: Random.integer(0,1000),
      网络故障: Random.integer(0,1000),
      功能因素: Random.integer(0,1000),
    }))
  })
  return dragList
}
export const getEnergyDataList = req => {
  let dragList = []
  doCustomTimes(8, () => {
    dragList.push(Mock.mock({
      name: '@cname',
      ZeroHour: Random.integer(0,1000),
      ZeroHour: Random.integer(0,1000),
      ZeroHour: Random.integer(0,1000),
      ZeroHour: Random.integer(0,1000),
      ZeroHour: Random.integer(0,1000),
      ZeroHour: Random.integer(0,1000),
      ZeroHour: Random.integer(0,1000),
      ZeroHour: Random.integer(0,1000),
      ZeroHour: Random.integer(0,1000),
      ZeroHour: Random.integer(0,1000),
      ZeroHour: Random.integer(0,1000),
      ZeroHour: Random.integer(0,1000),
      ZeroHour: Random.integer(0,1000),
      ZeroHour: Random.integer(0,1000),
      ZeroHour: Random.integer(0,1000),
      ZeroHour: Random.integer(0,1000),
      ZeroHour: Random.integer(0,1000),
      ZeroHour: Random.integer(0,1000),
      ZeroHour: Random.integer(0,1000),
      ZeroHour: Random.integer(0,1000),
      ZeroHour: Random.integer(0,1000),
      ZeroHour: Random.integer(0,1000),
      ZeroHour: Random.integer(0,1000),
      ZeroHour: Random.integer(0,1000),
    }))
  })
  return dragList
}
