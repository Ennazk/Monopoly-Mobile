var Database = new Ext.data.Store({
	model: 'UserModel',
	/*Sorters : [{
		property : 'date',
		direction : 'DESC'
	}],*/
	proxy : {
		type : 'localstorage',
		id : 'monopoly-app-localstore'
	},
	// TODO: remove this data after testing.
	data: [
		{ id: 1, login: 'Yassir', password: 'ennazk' },
		{ id: 2, login: 'Khalil', password: 'essamgani' },
		{ id: 3, login: 'Ismail', password: 'madani' }
	]
    /*,getGroupString: function (record) {
		if (record && record.data.date) {
			return record.get('date').toDateString();
		} else {
			return '';
		}
	}*/
});

Database.load();

Database.logUser = function(l, p){
	for(i=0; i < Database.data.length; i++) {
		line = Database.getAt(i).data;
		//console.log(line.login + " = " + l + " | " + line.password + " = " + p);
		if(line.login == l && line.password == p)
		{
			return line.login;
		}
	}
	return false;
}
Database.add({ id: 1, login: 'Yassir', password: 'ennazk' });
Database.add({ id: 2, login: 'Khalil', password: 'essamgani' });
Database.add({ id: 3, login: 'Ismail', password: 'madani' });
Database.add({ id: 4, login: 'Firas', password: 'kadhum' });
Database.add({ id: 5, login: 'x', password: 'x' });
Database.add({ id: 6, login: 'w', password: 'w' });
//Database.clearData();
Database.sync();
//alert(Database.data.length);
//alert(Database.logUser('Yassir', 'ennazk'));
/*
console.log(Database);

for(i=0; i < Database.data.length; i++) {
	line = Database.getAt(i).data;
	console.log(line);
}

Database.add({ id: 4, login: 'Firas', password: 'kadhum' });

Database.sync();

*/