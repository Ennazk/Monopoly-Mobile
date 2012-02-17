Case = Ext.extend(Object, {
	constructor: function(options){
		//id
		//nom
		//x
		//y
		
		Ext.apply(this, options);
	}
});

Ext.reg('player', Case);