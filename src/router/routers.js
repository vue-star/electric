import Main from '@/components/main'
import parentView from '@/components/parent-view'

/**
 * iview-admin中meta除了原生参数外可配置的参数:
 * meta: {
 *  hideInMenu: (false) 设为true后在左侧菜单不会显示该页面选项
 *  notCache: (false) 设为true后页面不会缓存
 *  access: (null) 可访问该页面的权限数组，当前路由设置的权限会影响子路由
 *  icon: (-) 该页面在左侧菜单、面包屑和标签导航处显示的图标，如果是自定义图标，需要在图标名称前加下划线'_'
 *  beforeCloseName: (-) 设置该字段，则在关闭当前tab页时会去'@/router/before-close.js'里寻找该字段名对应的方法，作为关闭前的钩子函数
 * }
 */

export default [{
        path: '/login',
        name: 'login',
        meta: {
            title: 'Login - 登录',
            hideInMenu: true
        },
        component: () => import('@/view/login/login.vue')
    },
    {
        path: '/',
        name: '_home',
        redirect: '/home',
        component: Main,
        meta: {
            hideInMenu: true,
            notCache: true
        },
        children: [{
            path: '/home',
            name: 'home',
            meta: {
                hideInMenu: true,
                title: '首页',
                notCache: true
            },
            component: () => import('@/view/single-page/home')
        }]
    },

    {
        path: '/customer',
        name: 'customer',
        meta: {
            icon: 'logo-buffer',
            title: '客户管理'
        },
        component: Main,
        children: [{
                path: 'customer_info',
                name: 'customer_info',
                meta: {
                    icon: 'md-trending-up',
                    title: '客户信息'
                },
                component: () => import('@/view/customer/customer-info.vue')
            },
            {
                path: 'agent-info',
                name: 'agent-info',
                meta: {
                    icon: 'ios-person',
                    title: '代理商信息'
                },
                component: () => import('@/view/customer/agent-info.vue')
            }
        ]
    },
    {
        path: '/power',
        name: 'power',
        meta: {
            icon: 'md-cloud-upload',
            title: '电力设施管理'
        },
        component: Main,
        children: [{
            path: 'power_facility',
            name: 'power_facility',
            meta: {
                icon: 'ios-hammer',
                title: '电力设施管理',
            },
            component: () => import('@/view/power/power-facility.vue')
        }]
    },
    
    {
        path: '/equipment',
        name: 'equipment',
        meta: {
            icon: 'ios-stats',
            title: '电力设备管理'
        },
        component: Main,
        children: [{
                path: 'power_distribution',
                name: 'power_distribution',
                meta: {
                    icon: 'md-add',
                    title: '配电室信息'
                },
                component: () => import('@/view/equipment/power-distribution/power-distribution.vue')
            },
            {
                path: 'box_transformer',
                name: 'box_transformer',
                meta: {
                    icon: 'md-add',
                    title: '箱变信息'
                },
                component: () => import('@/view/equipment/box-transformer/box-transformer.vue')
            }
        ]
    },
    {
        path: '/communication',
        name: 'communication',
        meta: {
            icon: 'ios-stats',
            title: '通讯和采集管理'
        },
        component: Main,
        children: [{
                path: 'serial_port',
                name: 'serial_port',
                meta: {
                    icon: 'md-add',
                    title: '串口信息'
                },
                component: () => import('@/view/communication/serial-port.vue')
            },
            {
                path: 'router_config',
                name: 'router_config',
                meta: {
                    icon: 'md-download',
                    title: '配置信息'
                },
                component: () => import('@/view/communication/router-config.vue')
            },
            {
                path: 'meter_information',
                name: 'meter_information',
                meta: {
                    icon: 'md-add',
                    title: '电表信息'
                },
                component: () => import('@/view/communication/meter-information.vue')
            },
            {
                path: 'router_info',
                name: 'router_info',
                meta: {
                    icon: 'md-download',
                    title: '路由器信息'
                },
                component: () => import('@/view/communication/router-info.vue')
            }
        ]
    },
    {
        path: '/monitor',
        name: 'monitor',
        meta: {
            icon: 'md-cloud-upload',
            title: '监测管理'
        },
        component: Main,
        children: [{
                path: 'scada',
                name: 'scada',
                meta: {
                    icon: 'ios-document',
                    title: 'scada'
                },
                component: () => import('@/view/monitor/scada.vue')
            },
            {
                path: 'real_time_state',
                name: 'real_time_state',
                meta: {
                    icon: 'md-clipboard',
                    title: '实时状态'
                },
                component: () => import('@/view/monitor/real-time-state.vue')
            }
        ]
    },
    {
        path: '/EPU-statistics',
        name: 'EPU-statistics',
        meta: {
            icon: 'md-cloud-upload',
            title: '电力设备统计'
        },
        component: Main,
        children: [{
                path: 'power_statistics',
                name: 'power_statistics',
                meta: {
                    icon: 'ios-document',
                    title: '配电房'
                },
                component: () => import('@/view/EPU-Statistics/power-distribution.vue')
            },
            {
                path: 'europe_box_transformer',
                name: 'europe_box_transformer',
                meta: {
                    icon: 'md-clipboard',
                    title: '欧式箱变'
                },
                component: () => import('@/view/EPU-Statistics/europe-box-transformer.vue')
            },
            {
                path: 'american_box_transformer',
                name: 'american_box_transformer',
                meta: {
                    icon: 'md-clipboard',
                    title: '美式箱变'
                },
                component: () => import('@/view/EPU-Statistics/american-box-transformer.vue')
            }
        ]
    },
    {
        path: '/report',
        name: 'report',
        meta: {
            icon: 'ios-stats',
            title: '电能统计'
        },
        component: Main,
        children: [{
                path: 'survey_survey',
                name: 'survey_survey',
                meta: {
                    icon: 'md-download',
                    title: '计量概况'
                },
                component: () => import('@/view/report/survey-survey.vue')
            },
            {
                path: 'energy_profile',
                name: 'energy_profile',
                meta: {
                    icon: 'md-download',
                    title: '用电概括'
                },
                component: () => import('@/view/report/energy-profile.vue')
            },
            {
                path: 'functional_factors',
                name: 'functional_factors',
                meta: {
                    icon: 'md-download',
                    title: '功能因素'
                },
                component: () => import('@/view/report/functional-factors.vue')
            }, 
            {
                path: 'energy_analysis',
                name: 'energy_analysis',
                meta: {
                    icon: 'md-download',
                    title: '能耗分析'
                },
                component: () => import('@/view/report/energy-analysis.vue')
            },
            {
                path: 'current_analysis',
                name: 'current_analysis',
                meta: {
                    icon: 'md-add',
                    title: '电流分析'
                },
                component: () => import('@/view/report/current-analysis.vue')
            },
            {
                path: 'voltage_analysis',
                name: 'voltage_analysis',
                meta: {
                    icon: 'md-download',
                    title: '电压分析'
                },
                component: () => import('@/view/report/voltage-analysis.vue')
            },
            {
                path: 'fault_analysis',
                name: 'fault_analysis',
                meta: {
                    icon: 'md-download',
                    title: '故障分析'
                },
                component: () => import('@/view/report/fault-analysis.vue')
            },
           
            
        ]
    },
    {
        path: '/system_manage',
        name: 'system_manage',
        component: Main,
        meta: {
            icon: 'ios-stats',
            title: '系统管理'
        },
        component: Main,
        children: [{
                path: 'data_dictionary',
                name: 'data_dictionary',
                meta: {
                    icon: 'ios-navigate',
                    title: '数据字典'
                },
                component: () => import('@/view/system/data-dictionary.vue')
            },
            {
                path: 'user_info',
                name: 'user_info',
                meta: {
                    icon: 'md-download',
                    title: '用户信息'
                },
                component: () => import('@/view/system/user-info.vue')
            },
            {
                path: 'role_info',
                name: 'role_info',
                meta: {
                    icon: 'md-download',
                    title: '角色信息'
                },
                component: () => import('@/view/system/role-info.vue')
            },
        ]
    },
    {
        path: '/repair',
        name: 'repair',
        meta: {
            hide: true
        },
        component: Main,
        children: [{
            path: 'rush_repair',
            name: 'rush_repair',
            meta: {
                icon: 'ios-hammer',
                title: '抢修管理',
            },
            component: () => import('@/view/repair/rush-repair.vue')
        }]
    },
    {
        path: '/inspection',
        name: 'inspection',
        meta: {
            hide: true
        },
        component: Main,
        children: [{
            path: 'inspection_manage',
            name: 'inspection_manage',
            meta: {
                icon: 'ios-navigate',
                title: '巡检管理'
            },
            component: () => import('@/view/inspection/inspection-manage.vue')
        }]
    },
    {
        path: '/system',
        name: 'system',
        meta: {
            hide: true
        },
        component: Main,
        children: [{
            path: 'system_safety',
            name: 'system_safety',
            meta: {
                icon: 'ios-navigate',
                title: '系统安全'
            },
            component: () => import('@/view/system/system-safety.vue')
        }]
    },
   
    {
        path: '/examples',
        name: 'examples',
        component: Main,
        meta: {
            icon: 'ios-stats',
            title: '常用实例'
        },
        component: Main,
        children: [{
                path: 'file_download',
                name: 'file_download',
                meta: {
                    icon: 'ios-navigate',
                    title: '文件下载'
                },
                component: () => import('@/view/examples/file-download.vue')
            },
            {
                path: 'code_generation',
                name: 'code_generation',
                meta: {
                    icon: 'ios-navigate',
                    title: '二维码生成'
                },
                component: () => import('@/view/examples/code-generation.vue')
            },
        ]
    },
    {
        path: '/argu',
        name: 'argu',
        meta: {
            hideInMenu: true
        },
        component: Main,
        children: [{
                path: 'params/:id',
                name: 'params',
                meta: {
                    icon: 'md-flower',
                    title: route => `动态路由-${route.params.id}`,
                    notCache: true,
                    beforeCloseName: 'before_close_normal'
                },
                component: () => import('@/view/argu-page/params.vue')
            },
            {
                path: 'query',
                name: 'query',
                meta: {
                    icon: 'md-flower',
                    title: route => `带参路由-${route.query.id}`,
                    notCache: true
                },
                component: () => import('@/view/argu-page/query.vue')
            }
        ]
    },
    {
        path: '/401',
        name: 'error_401',
        meta: {
            hideInMenu: true
        },
        component: () => import('@/view/error-page/401.vue')
    },
    {
        path: '/500',
        name: 'error_500',
        meta: {
            hideInMenu: true
        },
        component: () => import('@/view/error-page/500.vue')
    },
    {
        path: '*',
        name: 'error_404',
        meta: {
            hideInMenu: true
        },
        component: () => import('@/view/error-page/404.vue')
    }
]
