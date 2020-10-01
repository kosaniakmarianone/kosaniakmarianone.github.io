let sum = 0;

// Питання 1
const question1 = prompt('2+2*2=');

if( question1 == 6 ){
	sum = sum + 4;
}

// Питання 2
const question2 = prompt('Як звали батька Тараса Шевченка?');

if( question2 == 'григорій' || question2 == 'Григорій'){
	sum = sum + 6;
}

// Питання 3
const question3 = confirm('У html є 6 видів заголовків?');

if( question3 ){
	sum = sum + 2;
}

//....


if( sum < 6 ){
	alert(`Тест не складено. Ваш результат - ${sum} балів`)
	
} else if( sum >= 6 && sum <= 9){
	alert(`Tест складено задовільно. Ваш результат- ${sum} балів`)

} else if( sum >= 10 ){
	alert(`Тест складено відмінно. Ваш результат- ${sum} балів`)
	
}




