Ext.define('SongcaigeAPP.view.goods.Main', {
    extend: 'Ext.NavigationView',
    alias: 'widget.goodsmain',
    requires: [],
    config: {
		title: '商品列表',
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
				html: 'This will display goods urls!'
			}
		]
    }
});
