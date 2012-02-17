UserPanel = Ext.extend(Ext.Panel, {
	initComponent: function(config) {
		this.cls = "userPanel";

		//console.log(this.params.player);
		this.title = {
				layout : "hbox",
				items : [
					{ html : this.player.login },
					{ xtype : 'spacer' },
					{ html : '200', cls : 'money' }
				]
			};
		
		this.stuff = new Array();

		this.myStuff = new Ext.Panel({
			cls : "stuffHolder",
			height : 200,
			items : []
		});

		this.items = [
			this.title,
			this.myStuff
		];
		
		thisObj = this;
		this.updateStuff = function(thisObj){
			//update stuff here
		}
		
		//apply config params to this
		Ext.apply(this, config);
		
		
		UserPanel.superclass.initComponent.apply(this, arguments);
	}
});

Ext.reg('userpanel', UserPanel);