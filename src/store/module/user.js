import { login, logout, getUserInfo, getOrganization } from '@/api/user'
import { setToken, getToken } from '@/libs/util'

export default {
    state: {
        userNameOrEmailAddress: '',
        userId: 0,
        organizationId: 0,
        organizationList: [],
        avatorImgPath: '',
        token: getToken(),
        access: '',
        hasGetInfo: false
    },
    mutations: {
        setAvator(state, avatorPath) {
            state.avatorImgPath = avatorPath
        },
        setUserId(state, id) {
            state.userId = id
        },
        setOrganizationId(state, id) {
            state.organizationId = id
        },
        setOrganizationList(state, data) {
            state.organizationList = data
        },
        setUserName(state, name) {
            state.userNameOrEmailAddress = name
        },
        setAccess(state, access) {
            state.access = access
        },
        setToken(state, token) {
            state.token = token
            setToken(token)
        },
        setHasGetInfo(state, status) {
            state.hasGetInfo = status
        }
    },
    actions: {
        // 登录
        handleLogin({
            commit
        }, {
            userNameOrEmailAddress,
            password,
            rememberClient
        }) {
            userNameOrEmailAddress = userNameOrEmailAddress.trim()
            return new Promise((resolve, reject) => {
                login({
                    userNameOrEmailAddress,
                    password,
                    rememberClient
                }).then(res => {
                    const data = res.data.result
                    commit('setToken', data.accessToken)
                    commit('setUserId', data.userId)
                    resolve()
                }).catch(err => {
                    reject(err)
                })
            })
        },
        // 退出登录
        handleLogOut({
            state,
            commit
        }) {
            return new Promise((resolve, reject) => {
                // logout(state.token).then(() => {
                //     commit('setToken', '')
                //     commit('setAccess', [])
                //     resolve()
                // }).catch(err => {
                //     reject(err)
                // })
                //如果你的退出登录无需请求接口，则可以直接使用下面三行代码而无需使用logout调用接口
                commit('setToken', '')
                commit('setAccess', [])
                resolve()
            })
        },
        // 获取用户相关信息
        getUserInfo({
            state,
            commit
        }) {
            return new Promise((resolve, reject) => {
                try {
                    getUserInfo(state.userId).then(res => {
                        const data = res.data.result.user
                        // commit('setAvator', data.avator)
                        commit('setAvator', 'https://o5wwk8baw.qnssl.com/bc7521e033abdd1e92222d733590f104/avatar')
                        commit('setUserName', data.name)
                        commit('setUserId', data.id)
                        commit('setAccess', data.access)
                        commit('setHasGetInfo', true)
                        resolve(data)
                    },error => {
                        this.$Message.error(error.error.message)
                        resolve()
                    }).catch(error => {
                        reject(error)
                    })
                } catch (error) {
                    reject(error)
                }
            })
        },
        //获取组织相关信息
        getOrganizationInfo({
            commit
        }) {
            return new Promise((resolve, reject) => {
                try {
                    getOrganization().then(res => {
                        const data = res.data.result.items
                        commit('setOrganizationList', data)
                        commit('setOrganizationId', data[0].id)
                        resolve(data)
                    }).catch(err => {
                        reject(err)
                    })
                } catch (error) {
                    reject(error)
                }
            })
        }
    }
}
