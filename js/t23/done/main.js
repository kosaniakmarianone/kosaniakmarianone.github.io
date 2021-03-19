const myModal = document.getElementById('myModal');

function showInfo(id){
	myModal.style.display = 'block';
	console.log(id)
}

function hideModal(){
	myModal.style.display = 'none';
}

function showUsers(){
	let users_html = ``;
	const users_table = document.getElementById('users_table');
	users.map((user,index) => {
		users_html +=
		`
		<tr>
			<td>${index + 1}</td>
			<td>${user.name}</td>
			<td>${user.email}</td>
			<td>
				<button
					class="btn btn-sm btn-primary" 
					onclick="showInfo('${user.id}')">
					Детально
				</button>
			</td>
			<td>
				<button class="btn btn-sm btn-danger" onclick="deleteUser('${user.id}')">Видалити</button>
			</td>
		</tr>
		`

		users_table.innerHTML = users_html;
	})
}

showUsers();