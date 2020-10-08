const x = Math.floor(Math.random()*100);

let dist1, dist2, dist3;

const num1 = prompt('Введіть число від 0 до 100');

if( num1 > x ){
	dist1 = num1 - x;
} else {
	dist1 = x - num1;
}

if(dist1 > 30){
	alert('Холодно');
} else if( dist1 <= 30 && dist1 >= 20 ) {
	alert('Тепло')
} else if( dist1 < 20 ) {
	alert('Гаряче')
} else if( dist1 <= 10 ) {
	alert('Дуже гаряче')
}

const num2 = prompt('Введіть число повторно');

if( num2 > x ){
	dist2 = num2 - x;
} else {
	dist2 = x - num2;
}

if(dist1 > dist2){
	alert('Теплішає')
} else {
	alert('Холоднішає')
}

const num3 = prompt('Введіть число останнє число');

if( num3 > x ){
	dist3 = num3 - x;
} else {
	dist3 = x - num3;
}
console.log(dist1, dist2, dist3)

if(dist3 <= 10){
	alert(`Ви виграли загадане число ${x}`)
} else {
	alert(`Нажаль ви були надто далеко загадане число ${x}`)
}


