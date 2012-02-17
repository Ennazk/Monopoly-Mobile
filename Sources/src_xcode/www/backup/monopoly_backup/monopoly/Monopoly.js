var monopoly = new Ext.Application({
	name : "MonopolyApp",
	launch : function(){
		//properties
		this.menu = new Menu();
		
		this.players = new Array(new Player({login : 'Yassir'}), new Player({login : 'Khalil'}));//this should be returned by the menu
		this.partie = new Partie({ players : this.players });
		
		this.menu.showMenu();
		this.menu.on('playersLogged',
			function(){
				document.activeElement.blur();
				thisObj = this.views.viewport;
				thisObj.setActiveItem(1);
			},
			this
		);
		
		MonopolyApp.views.viewport = new Ext.Panel({
			fullscreen :true,
			layout : 'card',
			style : 'background:url(images/menuBGFlipped.png);',
			cardSwitchAnimation: {
                type: 'flip',
				duration: 1000
            },
			dockedItems : [
			],
			defaults : 
			{
				
			},
			items : [
				this.partie
				//menu,
				//plateau
			]
		});
		
		
	}
});