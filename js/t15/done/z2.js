const user = {
	name: "Петро",
	lastName: "Іванов",
	age: 14,
	email: "petro007@gmail.com",
	city: "Lviv"
}

const user_info = document.getElementById("user_info");

function showUser(){
	user_info.innerHTML = 
	`
		<tr>
			<td>${user.name}</td>
			<td>${user.lastName}</td>
			<td>${user.age}</td>
			<td>${user.email}</td>
			<td>${user.city}</td>
		</tr>
	`
}
showUser();

function changeName(new_name){
	user.name = new_name;
	showUser();
}

function changeLastName(new_lastname){
	user.lastname = new_lastname;
	showUser();
}

function changeAge(new_age){
	user.age = new_age;
	showUser();
}

function changeEmail(new_email){
	user.email = new_email;
	showUser();
}

function changeCity(new_city){
	user.city = new_city;
	showUser();
}

function changeUserData(new_name, new_lastname, new_age, new_email, new_city){
	user.name = new_name;
	user.lastname = new_lastname;
	user.age = new_age;
	user.email = new_email;
	user.city = new_city;
	showUser();
}