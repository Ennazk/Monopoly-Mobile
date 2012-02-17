Player = Ext.extend(Object, {
	constructor: function(config){
		//this.id = this.config.id;
		
		this.login = "Sans nom";
		this.color = "#000000";
		this.nbrMonopole = 0;
		this.faillite = false;
		this.cartePSP = 0;
		
		Ext.apply(this, config);
	}
});

Ext.reg('player', Player);