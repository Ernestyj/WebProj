const menuList = [
    {
        title:'Home',
        key:'/home'
    },
    {
        title:'UI',
        key:'/ui',
        children:[
            {
                title:'Buttons',
                key:'/ui/buttons',
            },
            {
                title:'Popups',
                key:'/ui/modals',
            },
            {
                title:'Loading',
                key:'/ui/loadings',
            },
            {
                title:'Notifications',
                key:'/ui/notification',
            },
            {
                title:'Global Message',
                key:'/ui/messages',
            },
            {
                title:'Tabs',
                key:'/ui/tabs',
            },
            {
                title:'Gallery',
                key:'/ui/gallery',
            },
            {
                title:'Carousel',
                key:'/ui/carousel',
            }
        ]
    },
    {
        title:'Forms',
        key:'/form',
        children:[
            {
                title:'Login',
                key:'/form/login',
            },
            {
                title:'Register',
                key:'/form/reg',
            }
        ]
    },
    {
        title:'Tables',
        key:'/table',
        children:[
            {
                title:'Basic Tables',
                key:'/table/basic',
            },
            {
                title:'Advanced Tables',
                key:'/table/high',
            }
        ]
    },
    {
        title:'Rich Text',
        key:'/rich'
    },
    {
        title:'Cities',
        key:'/city'
    },
    {
        title:'Orders',
        key:'/order',
        btnList:[
            {
                title:'Order Details',
                key:'detail'
            },
            {
                title:'Complete Order',
                key:'finish'
            }
        ]
    },
    {
        title:'Users',
        key:'/user'
    },
    {
        title:'Bike Map',
        key:'/bikeMap'
    },
    {
        title:'Charts',
        key:'/charts',
        children:[
            {
                title:'Bars',
                key:'/charts/bar'
            },
            {
                title:'Pies',
                key:'/charts/pie'
            },
            {
                title:'Lines',
                key:'/charts/line'
            },
        ]
    },
    {
        title:'Permission',
        key:'/permission'
    },
];
export default menuList;
