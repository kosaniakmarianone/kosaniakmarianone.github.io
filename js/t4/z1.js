const color = prompt('Який зараз колір на світлофорі?');

if( color == 'Зелений' || color == 'Green' || color == 'зелений' || color == 'green' ){
	alert('Можна рухатись.');
	
} else if( color == 'Жовтий' || color == 'Yellow' || color == 'жовтий' || color == 'yellow'){
	alert('Приготуйтесь.');
	
} else if( color == 'Червоний' || color == 'Red' || color == 'червоний' || color == 'red'){
	alert('Стоп!');
	
} else {
	alert('Невірно введено колір.');
}

