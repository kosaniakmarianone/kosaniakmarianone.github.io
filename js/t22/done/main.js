let order = 1;
function drawCards(){
	const cards_num = document.getElementById('cards_num').value;
	let cards_html= ``;
	
	for(i=0;i<cards_num;i++){
		cards_html +=
		`
		<div class="card my-2">
		  <div class="card-body">
			<h5 class="card-title">Card ${i+1}</h5>
		  </div>
		</div>
		`
	}
	document.getElementById('cards').innerHTML = cards_html;
}


function changeColor(){
	const cards_text = document.getElementById('cards_text').value;
	
	const cards = document.getElementsByClassName('card');
	const card_arr = Array.from(cards);
	
	card_arr.map(function(card, index){
		if((index+1) % order == 0){
			card.style.color = cards_text;
		}
	})
}

function changeFon(){
	const cards_fon = document.getElementById('cards_fon').value;
	
	const cards = document.getElementsByClassName('card');
	const card_arr = Array.from(cards);
	
	card_arr.map(function(card, index){
		if((index+1) % order == 0){
			card.style.background = cards_fon;
		}
	})
}

function editOrder(){
	order = document.getElementById('edit_order').value;
}