MenuPartie = Ext.extend(Ext.Panel, {
	initComponent: function(params) {
		this.cls = "menuPartie";
		this.layout = {
        	type: 'vbox',
        	align: 'stretch'
    	};
		this.align = 'stretch';
		this.height = 768;
		
		this.userPanels = new Ext.Carousel({
			
			flex : 2,
			items : [
				{ html : "Yassir" },
				{ html : "Ismail" },
				{ html : "Khalil" }
			]
			
		});
		
		this.options = new Ext.Panel({
			
			html : "Options",
			flex : 1
		});
		
		this.items = [
			this.userPanels,
			//lancer dés, Payer 5000, Carte PSP, Construir, Hypotéquer
			this.options
		]
		
		MenuPartie.superclass.initComponent.apply(this, arguments);
	}
});

Ext.reg('menupartie', MenuPartie);