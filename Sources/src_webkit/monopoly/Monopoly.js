var monopoly = new Ext.Application({
	name : "MonopolyApp",
	launch : function(){
		//properties
		this.menu = new Menu();
		
		//temp
		//this.players = new Array(new Player({login : 'Yassir'}), new Player({login : 'Khalil'}));//this should be returned by the menu
		//this.partie = new Partie({ players : this.players });
		
		this.menu.showMenu();
		this.menu.on('playersLogged',
			function(){
				console.log(this.menu.loggedPlayers[0].login);
				this.partie = new Partie({players : this.menu.loggedPlayers});
				console.log(this.partie);
				
				thisObj = this.views.viewport;
				thisObj.add(this.partie);
				
				document.activeElement.blur();//remove keyboard
				
				//setTimeout(function(thisObj){
					
					thisObj.setActiveItem(this.partie);
				//}, 1000, thisObj)
			},
			this
		);
		
		MonopolyApp.views.viewport = new Ext.Panel({
			fullscreen :true,
			layout : 'card',
			cls : 'background:#000;',
			//style : 'background:url(images/menuBGFlipped.png);',
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
				//this.partie,
				this.menu
			]
		});
		
		
	}
});