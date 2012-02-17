Dice = Ext.extend(Ext.Panel, {
	initComponent: function(config) {
		this.id = "Dice" + this.val + "-" + this.position;

		this.cls = "dice";
		this.style = "background:url('images/dice/"+this.val+".png')";
		this.height = 50;
		this.width = 50;
		this.currentDice = 'rand1';
		
		this.throw = function(position){
			//console.log("throwing dice");
			
			if(position == 1)
			{
				$('#Dice' + this.val + "-" + this.position).animate({rotate: '800deg', top : '300px', left : '460px'}, 1000);
			}
			else if(position == 2)
			{
				$('#Dice' + this.val + "-" + this.position).animate({rotate: '800deg', top : '400px', left : '260px'}, 800);
			}
		}
		
		this.reset = function(){
			$('#Dice' + this.val + "-" + this.position).animate({rotate: '10deg', top : '800px', left : '100px'}, 0);
		}

		Ext.apply(this, config);
		
		Dice.superclass.initComponent.apply(this, arguments);
	}
});

Ext.reg('dice', Dice);