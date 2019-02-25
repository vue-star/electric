import Mock from 'mockjs'
import { login, logout, getUserInfo } from './login'
import { getTableData, getDragList, getDataList } from './data'
import { getFaultList, getEchartData } from './faultReport'
import { getMessageList } from './messageReport'

// 登录相关和获取用户信息
Mock.mock(/\/login/, login)
Mock.mock(/\/get_info/, getUserInfo)
Mock.mock(/\/logout/, logout)
Mock.mock(/\/get_table_data/, getTableData)
Mock.mock(/\/get_drag_list/, getDragList)
Mock.mock(/\/get_data_list/, getDataList)

Mock.mock(/\/services_app_Fault_GetPaged/, getFaultList)
Mock.mock(/\/get_echart_data/, getEchartData)

Mock.mock(/\/services_app_message_GetPaged/, getMessageList)

export default Mock
