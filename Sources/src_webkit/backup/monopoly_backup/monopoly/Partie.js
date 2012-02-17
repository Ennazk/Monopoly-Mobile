Partie = Ext.extend(Ext.Panel, {
	initComponent: function(config){
		//default attribut values
		this.players = new Array();
		
		this.fullscreen = true;
		this.layout = "hbox";
		this.menuPartie = new MenuPartie();
		this.plateau = new Plateau();
		this.items = [ this.menuPartie, this.plateau ];
		
		//apply config params to this
		Ext.apply(this, config);
		
		//call parent applies
		Partie.superclass.initComponent.apply(this, arguments);
	}
});

Ext.reg('partie', Partie);