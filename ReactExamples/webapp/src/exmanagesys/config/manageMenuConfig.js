const menuList = [
    {
        title: '首页',
        key: '/manage/home'
    },
    {
        title: 'UI',
        key: '/manage/ui',
        children: [
            {
                title: '按钮',
                key: '/manage/ui/buttons',
            },
            {
                title: '弹框',
                key: '/manage/ui/modals',
            },
            {
                title: 'Loading',
                key: '/manage/ui/loadings',
            },
            {
                title: '通知提醒',
                key: '/manage/ui/notification',
            },
            {
                title: '全局Message',
                key: '/manage/ui/messages',
            },
            {
                title: 'Tab页签',
                key: '/manage/ui/tabs',
            },
            {
                title: '图片画廊',
                key: '/manage/ui/gallery',
            },
            {
                title: '轮播图',
                key: '/manage/ui/carousel',
            }
        ]
    },
    {
        title: '表单',
        key: '/manage/form',
        children: [
            {
                title: '登录',
                key: '/manage/form/login',
            },
            {
                title: '注册',
                key: '/manage/form/reg',
            }
        ]
    },
    {
        title: '表格',
        key: '/manage/table',
        children: [
            {
                title: '基础表格',
                key: '/manage/table/basic',
            },
            {
                title: '高级表格',
                key: '/manage/table/high',
            }
        ]
    },
    {
        title: '富文本',
        key: '/manage/rich'
    },
    {
        title: '城市管理',
        key: '/manage/city'
    },
    {
        title: '订单管理',
        key: '/manage/order',
        btnList: [
            {
                title: '订单详情',
                key: 'detail'
            },
            {
                title: '结束订单',
                key: 'finish'
            }
        ]
    },
    {
        title: '员工管理',
        key: '/manage/user'
    },
    {
        title: '车辆地图',
        key: '/manage/bikeMap'
    },
    {
        title: '图标',
        key: '/manage/charts',
        children: [
            {
                title: '柱形图',
                key: '/manage/charts/bar'
            },
            {
                title: '饼图',
                key: '/manage/charts/pie'
            },
            {
                title: '折线图',
                key: '/manage/charts/line'
            },
        ]
    },
    {
        title: '权限设置',
        key: '/manage/permission'
    },
];
export default menuList;
