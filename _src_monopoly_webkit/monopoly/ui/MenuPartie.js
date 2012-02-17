MenuPartie = Ext.extend(Ext.Panel, {
	initComponent: function(config) {
		
		//create user panels

		
		this.cls = "menuPartie";
		this.layout = {
        	type: 'vbox',
        	align: 'stretch'
    	};
		this.align = 'stretch';
		this.height = 768;
		this.userPanels = new Ext.Carousel({
			ui : 'dark',
			flex : 4,
			items : [
				//{ html : "Yassir" },
				//{ html : "Ismail" },
				//{ html : "Khalil" }
			]
			
		});
		
		//add menu panels
		
		for(i = 0; i < this.players.length; i++)
		{
			//console.log(this.players[i].login);
			this.userPanels.add(new UserPanel({player : this.players[i]}));
		}
		
		this.options = new Ext.Panel({
			cls : "optionsPanel",
			flex : 7,
			items : [
				{
					html : "Le tour de " + this.players[0].login,
					style : "margin-bottom:10px; text-align:center;",
					centered : true
				},
				{
					xtype : 'button',
					cls : "lancerDes",
					text : "Lancer les dés",
					handler : function(){
						this.throwDice();
					},
					scope:this
				}
			],
			scope : this
		});
		
		this.items = [
			this.userPanels,
			//lancer dés, Payer 5000, Carte PSP, Construir, Hypotéquer
			this.options
		]
		
		Ext.apply(this, config);
		MenuPartie.superclass.initComponent.apply(this, arguments);
		this.addEvents('throwDice');
	},
	throwDice : function(){
		this.fireEvent('throwDice');
	}
});

Ext.reg('menupartie', MenuPartie);