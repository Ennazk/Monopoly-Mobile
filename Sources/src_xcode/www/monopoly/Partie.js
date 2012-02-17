Partie = Ext.extend(Ext.Panel, {
	initComponent: function(config){
		
		Ext.apply(this, config);
		
		//default attribut values
		//this.players = new Array();
		this.id = "Partie";
		this.cls = "partie";
		this.fullscreen = true;
		this.layout = "hbox";
		this.plateau = new Plateau();
		
		this.diceVal1 = 1;
		this.diceVal1 = 2;
		
		//console.log(this.config);
		
		//console.log(this.players);
		this.menuPartie = new MenuPartie({players : this.players});
		this.items = [ this.menuPartie, this.plateau ];
		
		this.menuPartie.on('throwDice', function(){
			this.plateau.resetDice();
			
			//rand dice
			this.diceVal1 = Math.round(Math.random() * 5);
			this.diceVal2 = Math.round(Math.random() * 5);
			
			//console.log(this.diceVal1);
			//console.log(this.diceVal2);
			
			this.plateau.throwDice(this.diceVal1,1);
			this.plateau.throwDice(this.diceVal2,2);
			console.log(this.diceVal1 + " + " + this.diceVal2);
			this.plateau.movePion(this.diceVal1 + 1 + this.diceVal2 + 1);
		}, this);
		
		//call parent applies
		Partie.superclass.initComponent.apply(this, arguments);
	}
});

Ext.reg('partie', Partie);