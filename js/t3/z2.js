const user = 'Іван Петров';
const email = 'ivanp@gmail.com';
const password = 'qwe123qwe';

const userEmail = prompt("Введіть ваш email.");

if( email == userEmail ){
	const userPassword = prompt(`Введіть пароль для акаунту корстувача ${user}`);
	
	if( password == userPassword ){
		alert(`Вітаю ${user}`)
	} else {
		alert("Невірний пароль.")
	}
	
} else {
	alert("Користувача з таким email не інсує.")
}