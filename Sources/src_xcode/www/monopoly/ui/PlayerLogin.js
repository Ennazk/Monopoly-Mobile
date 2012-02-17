PlayerLogin = Ext.extend(Ext.Panel, {
	initComponent: function(params) {
		parentObj = this.params.parentObj;
		this.username = "";
		Ext.apply(this, {
			items : [{
					id : 'login',
        		    xtype: 'textfield',
        		    name: 'login',
        		    label: 'Login',
        		    required: true
        		},
        		{
					id : 'pass',
        		    xtype: 'passwordfield',
        		    name: 'narrative',
        		    label: 'Password',
					type: 'password'
        		},
				{
					xtype : 'button',
					html : 'Connexion',
					style : 'text-align:center; margin-top:30px;',
					scope : this,
					handler : function(){
						if(Database.logUser(this.getComponent('login').getValue(), this.getComponent('pass').getValue()))
						{
							username = Database.logUser(this.getComponent('login').getValue(), this.getComponent('pass').getValue());
							this.logged(parentObj, username);
						}
						else
						{
							alert("Login / Mot de passe incorrect.")
						}
					},
					scope:this
				}],
				dockedItems:[
			    	{
			    		xtype : 'toolbar',
			    		title : 'Joueur ' + this.params.n,
			    		style: 'border:none;',
			    		items: [
			    			{
			    				xtype : 'button',
			    				text : 'Annuler',
			    				ui : 'back'
			    			}
			    		]
			    	}
			    ]
        });

		PlayerLogin.superclass.initComponent.apply(this, arguments);
		this.addEvents('logged');
	},
	
	logged:function(parentObj, username){
		this.fireEvent('logged', parentObj, username);
	}
});

Ext.reg('playerlogin', PlayerLogin);