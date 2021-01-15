function  sayHi(){
	alert("Привіт!")
}

//sayHi();


function greeting(name){
	alert(`Привіт ${name}!`)
}

//greeting("Тарас");

const hello_text = document.getElementById("hello_text");

function showGreeting(name){
	hello_text.innerHTML = `Привіт ${name}!`;
}

