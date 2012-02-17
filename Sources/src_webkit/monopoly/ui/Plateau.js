Plateau = Ext.extend(Ext.Panel, {
	initComponent: function(params) {
		
		this.pion = new Ext.Panel({
			id : 'pion',
			position : 0,
			cls : "pion",
			height : 31,
		});
		

		this.cls = "plateau";
		this.height = 768;
		
		this.dice1 = new Array(
			new Dice({val : 1, position : 1}),
			new Dice({val : 2, position : 1}),
			new Dice({val : 3, position : 1}),
			new Dice({val : 4, position : 1}),
			new Dice({val : 5, position : 1}),
			new Dice({val : 6, position : 1})
		);
		this.dice2 = new Array(
			new Dice({val : 1, position : 2}),
			new Dice({val : 2, position : 2}),
			new Dice({val : 3, position : 2}),
			new Dice({val : 4, position : 2}),
			new Dice({val : 5, position : 2}),
			new Dice({val : 6, position : 2})
		);
		
		this.items = [
			this.dice1,
			this.dice2
		];
		
		this.resetDice = function(){
			//reset all dice
			for(i = 0; i<6 ; i++)
			{
				this.dice1[i].reset();
				this.dice2[i].reset();
			}
		}
		
		this.throwDice = function(val, position){
			if(position==1) this.dice1[val].throw(position);
			else if(position==2) this.dice2[val].throw(position);
			
		}
		
		this.movePion = function(steps){//set variables
			
			this.pion.position = steps + this.pion.position;
			if(this.pion.position >=40) this.pion.position = this.pion.position - 40;
			console.log(this.pion.position);
			
			$('#pion').animate({top : this.positionsCases[this.pion.position][1] + 'px', left :  this.positionsCases[this.pion.position][2]  + 'px'}, 800);
		
		}
		
		Plateau.superclass.initComponent.apply(this, arguments);
		
		this.add(this.pion);
		
		this.positionsCases = new Array(
				[ '1', 700, 700, 'go'			],
				[ '2', 610, 700, 'dred1'		],
				[ '3', 550, 700, 'instruct1'	],
				[ '4', 490, 700, 'dred2'		],
				[ '5', 425, 700, 'tax1'			],
				[ '6', 370, 700, 'train1'		],
				[ '7', 305, 700, 'lblue1'		],
				[ '8', 245, 700, 'chance1'		],
				[ '9', 185, 700, 'lblue2'		],
				['10', 120, 700, 'lblue3'		],
				['11',  30, 680, 'jail'		   	],
				['12',  30, 610, 'pink1'		],
				['13',  30, 550, 'electricity'	],
				['14',  30, 490, 'pink2'		],
				['15',  30, 430, 'pink3'		],
				['16',  30, 370, 'train2'		],
				['17',  30, 305, 'orange1'		],
				['18',  30, 245, 'instruct2'	],
				['19',  30, 185, 'orange2'		],      
				['20',  30, 120, 'orange3'		],
				['21',  30,  40, 'park'			],
				['22', 120,  40, 'red1'			],
				['23', 180,  40, 'chance2'		],
				['24', 240,  40, 'red2'			],
				['25', 300,  40, 'red3'			],
				['26', 370,  40, 'train3'		],
				['27', 425,  40, 'yellow1'		],
				['28', 490,  40, 'yellow2'		],
				['29', 550,  40, 'water1'		],
				['30', 610,  40, 'yellow3'		],
				['31', 700,  40, 'gotojail'		],
				['32', 700, 120, 'green1'		],
				['33', 700, 185, 'green2'		],
				['34', 700, 245, 'instruct3'	],
				['35', 700, 305, 'green3'		],
				['36', 700, 370, 'train4'		],
				['37', 700, 430, 'chance3'		],
				['38', 700, 490, 'dblue1'		],
				['39', 700, 550, 'tax2'			],
				['40', 700, 610, 'dblue2'		] 
			);                     		
/*
		for(i = 0; i < this.positionsCases.length; i++)
		{
			x = this.positionsCases[i][1];
			y = this.positionsCases[i][2];
			html = this.positionsCases[i][3];
			this.add(
			{
				xtype : 'panel',
				width:10,
				height:10,
				html: html,
				style : "background:#F0F; position: absolute; left: "+ x +"px; top:"+ y +"px; font-size:14px; font-weight:bold; font-family:arial; color:yellow; text-shadow:1px 1px 1px #000;"
			});
		}
		*/
		
	}
});

Ext.reg('plateau', Plateau);