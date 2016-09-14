Ext.define('SongcaigeAPP.view.Main', {
    extend: 'Ext.tab.Panel',
	alias: 'widget.main',
    xtype: 'main',
    requires: [
        'Ext.TitleBar',
        'SongcaigeAPP.view.home.Main',
		'SongcaigeAPP.view.goods.Main',
		'SongcaigeAPP.view.order.Main',
		'SongcaigeAPP.view.user.Main',
    ],
    config: {
		id: 'songcaigeViewMain',
		fullscreen: true,
        tabBarPosition: 'bottom',

        items: [{
			xtype: 'homemain'
		}, {
			xtype: 'goodsmain'
		}, {
			xtype: 'ordermain'
		}, {
			xtype: 'usermain'
		}
         /*    {
                title: '首页',
                iconCls: 'home',

                styleHtmlContent: true,
                scrollable: true,

                items: {
                    docked: 'top',
                    xtype: 'titlebar',
                    title: '我的菜单'
                },

                html: [
                    "商品管理<br/> ",
                    "<a target='_blank' href=\"app/view/Main.js\">订单审核</a>",
                    "其他功能"
                ].join("")
            },
            {
                title: '商品管理',
                iconCls: 'star',
				xtype: 'list',
				itemTpl: '{title}',
				items: {
                    docked: 'top',
                    xtype: 'titlebar',
                    title: '商品列表'
                },
                store: {
					fields: ['title', 'url'],
					data: [
						{title: 'Ext Scheduler 2.0', url: 'ext-scheduler-2-0-upgrading-to-ext-js-4'},
						{title: 'Previewing Sencha Touch 2', url: 'sencha-touch-2-what-to-expect'},
						{title: 'Sencha Con 2011', url: 'senchacon-2011-now-packed-with-more-goodness'},
						{title: 'Documentation in Ext JS 4', url: 'new-ext-js-4-documentation-center'}
					]
				}
            }, {
				title: '订单审核',
				iconCls: 'star',
				xtype: 'list',
				itemTpl: '{title}',
				items: {
                    docked: 'top',
                    xtype: 'titlebar',
                    title: '订单列表'
                },
                store: {
					fields: ['title', 'url'],
					data: [
						{title: 'Ext Scheduler 2.0', url: 'ext-scheduler-2-0-upgrading-to-ext-js-4'},
						{title: 'Previewing Sencha Touch 2', url: 'sencha-touch-2-what-to-expect'},
						{title: 'Sencha Con 2011', url: 'senchacon-2011-now-packed-with-more-goodness'},
						{title: 'Documentation in Ext JS 4', url: 'new-ext-js-4-documentation-center'}
					]
				}
			} */
        ]
    }
});
