Ext.define('SongcaigeAPP.view.home.Main', {
    extend: 'Ext.NavigationView',
    alias: 'widget.homemain',
    requires: [],
    config: {
		title: '我的菜单',
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
				html: 'This will display home urls!'
			}
		]
    }
});
