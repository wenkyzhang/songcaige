Ext.define('SongcaigeAPP.view.order.Main', {
    extend: 'Ext.NavigationView',
    alias: 'widget.ordermain',
    requires: [],
    config: {
		title: '订单管理',
		iconCls: 'home',
		autoDestory: false,
		defaultBackButtonText: '返回',
		navigationBar: {
			items: [
				{
					iconMask: true,
					iconCls: 'refresh',
					action: 'refreshKB',
					align: 'right'
				}, {
					hidden: true,
					iconMask: true,
					iconCls: 'chat',
					action: 'toreply',
					align: 'right'
				}, {
					hidden: true,
					iconMask: true,
					iconCls: 'compose',
					action: 'toscore',
					align: 'right'
				}
			]
		},

        items: [
			{
				html: 'This will display order urls!'
			}
		]
    }
});
