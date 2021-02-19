const user = JSON.parse(localStorage.getItem('user'));

function showError(text){
	
	const error_text = `<div class="alert alert-danger col-6">${text}</div>`
	
	const message = document.getElementById('message');
	
	message.innerHTML = error_text;
	
	setTimeout( function(){
		message.innerHTML = ``;
	} , 3000 )
	
}

function showSuccess(text){
	
	const error_text = `<div class="alert alert-success col-6">${text}</div>`
	
	const message = document.getElementById('message');
	
	message.innerHTML = error_text;
	
	setTimeout( function(){
		message.innerHTML = ``;
	} , 3000 )
	
}

function enter(){
	
	const email = document.getElementById('email').value;
	const password = document.getElementById('password').value;
	
	if(email != user.email){
		showError('Користувача2 з таким email не існує')
	}
	
	if(password != user.password){
		showError('Невірний пароль')
	}
	
	if( email == user.email && password == user.password){
		showSuccess('Успішно залоговано')
        user.loged = true;
        localStorage.setItem('user', JSON.stringify(user))
	}
}