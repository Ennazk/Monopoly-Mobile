Menu = Ext.extend(Ext.Panel, {
	initComponent: function() {
		
		this.layout = 'card';
		this.nbrJoueurs = 0;
		this.currentLogin = 1;
		this.loggedPlayers = Array();
		
		this._menuPrincipal = new Ext.Panel({
			layout : 'hbox',
			items: [
				{
					xtype : 'spacer',
					flex : 4
				},
				{
				  	xtype: 'button',
   					cls: 'menuButton',
		   			html: 'Nouvelle Partie',
					style : 'padding-left:52px;',
					scope : this,
					handler: function(){
						this._menuCards.setActiveItem(this._newGamePanelHolder);
					},
					flex : 2
		   		},
				{
					style : 'width:40px'
				},
				{
					xtype: 'button',
					cls: 'menuButton',
					html: 'Aide',
					style : 'padding-left:132px;',
					flex : 2
				},
				{
					xtype : 'spacer',
					flex : 4
				}
			]
		});

		this._nbrJoueursPanel = new Ext.Panel({
			layout: 'card',
			items : [
				{
					dockedItems:[
						{
							xtype : 'toolbar',
							title : 'Nombre de joueurs',
							style: 'border:none;',
							items: [
								{
									xtype : 'button',
									text : 'Annuler',
									ui : 'back'
								}
							]
						}
					],
					scroll : 'vertical',
					defaults : {
					},
					items: [
    	 				new Ext.form.Radio({
    	 				  name: 'nbrJoueurs',
    	 				  value: '2',
    	 				  label: '2 joueurs'
    	 				}), new Ext.form.Radio({
    	 				  name: 'nbrJoueurs',
    	 				  value: '3',
    	 				  label: '3 joueurs'
    	 				}), new Ext.form.Radio({
    	 				  name: 'nbrJoueurs',
    	 				  value: '4',
    	 				  label: '4 joueurs'
    	 				}), new Ext.form.Radio({
    	 				  name: 'nbrJoueurs',
    	 				  value: '5',
    	 				  label: '5 joueurs'
    	 				}), new Ext.form.Radio({
    	 				  name: 'nbrJoueurs',
    	 				  value: '6',
    	 				  label: '6 joueurs'
    	 				})
    				],
					listeners: {
				        el: {
				            	tap: function(t) {
								this.nbrJoueurs = t.target.value;
								var thisObj = this;
								setTimeout(
									function(thisObj){
										thisObj.authenticatePlayers(new PlayerLogin({params:{parentObj : thisObj, n : thisObj.currentLogin}}), thisObj)
								}, 400, thisObj);
							},
							scope : this
				        }
				    },
					scope : this
				}
			]
		});

		this.authenticatePlayers = function(playerLogin, thisObj){
			
			thisObj._nbrJoueursPanel.setActiveItem(playerLogin, { type: 'slide', direction: 'left', duration : 400 });
			
			
			playerLogin.on('logged', function(thisObj, username){
				//add logged user to this.players array
				thisObj.loggedPlayers.push(new Player({params : { login : username }}));//username);
				
				
				thisObj.currentLogin++;
				if(thisObj.currentLogin > thisObj.nbrJoueurs) 
				{
					thisObj.playersLogged();
					return;
				}
				thisObj.authenticatePlayers(new PlayerLogin({parentObj : thisObj, n : thisObj.currentLogin}), thisObj);
				
			});
			
			return;
		}
		
		this._joueurLogin = new Ext.Panel({
			items : [
				{
					dockedItems:[
						{
							xtype : 'toolbar',
							title : 'Authentification du joueur 1',
							style: 'border:none;',
							items: [
								{
									xtype : 'button',
									text : 'Retour',
									ui : 'back'
								}
							]
						}
					],
					scroll : 'vertical',
					defaults : {
						
					},
					items: [
    	 				{
    	 					
    	 				}
    				],
					scope : this
				}
			]
		});
		
		this._newGamePanel = new Ext.Panel({
			layout : 'card',
			height: 260,
			cls : 'newGame',
			flex : 2,
			cardSwitchAnimation: {
                type: 'slide',
				duration: 400
            },
			items : [
				this._nbrJoueursPanel
			]
		});
		
		this._newGamePanelHolder = new Ext.Panel({
			layout : 'hbox',
			items: [
				{
					xtype : 'spacer',
					flex : 2
				},
				this._newGamePanel,
				{
					xtype : 'spacer',
					flex : 2
				}
			]
		});
		
		this._menuCards = new Ext.Panel(
		{
			layout: 'card',
			cardSwitchAnimation: {
                type: 'flip',
				duration: 700
            },
			scope : this,
			width: '100%',
			height : 340,
			items : [
				this._menuPrincipal,
				this._newGamePanelHolder
			]
		});
		
		this.accueil = new Ext.Panel({
			cls : 'accueil',
			layout: 'vbox',
			items: [
				{
					xtype : 'spacer'
				},
				this._menuCards
			]
		});

		this.showMenu = function(){
			//console.log('Showing menu...');
			this.add(this.accueil);
		}
		
		
		
		Menu.superclass.initComponent.apply(this, arguments);
		this.addEvents('playersLogged');
	},
	
	playersLogged: function()
	{
		this.fireEvent('playersLogged')
	}
});

Ext.reg('menu', Menu);