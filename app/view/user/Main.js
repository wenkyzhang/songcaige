Ext.define('SongcaigeAPP.view.user.Main', {
    extend: 'Ext.NavigationView',
    alias: 'widget.usermain',
    requires: [],
    config: {
		title: '我的信息',
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
				html: 'This will display my urls!'
			}
		]
    }
});
