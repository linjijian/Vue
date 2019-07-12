const state = {
	logined: false,
	menu: [
		{
          id: 16,
          title: '基础设置',
          sub_permission: [
            {
            	id: 164,
            	route: '/system-manage',
            	title: '系统管理'
            },
            {
              id: 166,
              route: '/ec-site',
              title: '电商管理'
            },
            {
              id: 167,
              route: '/exchange-manage',
              title: '汇率管理'
            },
            {
              id: 168,
              route: '/warehouse-set',
              title: '仓库设置'
            },
          ]
		},
    {
          id: 17,
          title: '产品管理',
          sub_permission: [
            {
              id: 171,
              route: '/product/productInfo',
              title: '产品信息'
            },
            {
              id: 172,
              route: '/product/productAttribute',
              title: '扩展属性'
            }
          ]
    },
    {
          id: 18,
          title: '采购管理',
          sub_permission: [
            {
              id: 184,
              route: '/stock/stockOrder',
              title: '采购单管理'
            },
            {
              id: 185,
              route: '/ec-site',
              title: '电商管理'
            },
            {
              id: 186,
              route: '/exchange-manage',
              title: '汇率管理'
            },
            {
              id: 187,
              route: '/warehouse-set',
              title: '仓库设置'
            },
          ]
    },
    {
          id: 19,
          title: '基础设置',
          sub_permission: [
            {
              id: 164,
              route: '/system-manage',
              title: '系统管理'
            },
            {
              id: 166,
              route: '/ec-site',
              title: '电商管理'
            },
            {
              id: 167,
              route: '/exchange-manage',
              title: '汇率管理'
            },
            {
              id: 168,
              route: '/warehouse-set',
              title: '仓库设置'
            },
          ]
    },
	],
}

export default state;