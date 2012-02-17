Plateau = Ext.extend(Ext.Panel, {
	initComponent: function(params) {
		this.cls = "plateau";
		this.height = 768;
		Plateau.superclass.initComponent.apply(this, arguments);
	}
});

Ext.reg('plateau', Plateau);