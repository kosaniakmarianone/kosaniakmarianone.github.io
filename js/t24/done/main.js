function findDevelopers(){
	
	let developers = [];
	
	phones.map( function(phone){
		if( developers.indexOf(phone.developer) === -1 ){
			developers.push(phone.developer);
		}
	} )
	
	const datalistOptions = document.getElementById('datalistOptions');
	
	let options = ``;
	
	developers.map( function(dev){
		options += `<option value="${dev}">`
	} )
	
	datalistOptions.innerHTML = options;
}

findDevelopers();

function saveFilter(){
	const filter = {
		name:      document.getElementById('name').value,
		developer: document.getElementById('developer').value,
		min_price: document.getElementById('min_price').value,
		max_price: document.getElementById('max_price').value,
		order:     document.getElementById('order').value
	}
	
	localStorage.setItem("filter", JSON.stringify(filter))
	
	redrawCards(filter);
}

function drawCards(cards){
	
	const cards_block = document.getElementById('cards_block');
	
	let cards_html = ``;
	
	cards.map( function(card, index){
		
		let action = ``;
		if(card.action){ action = `<div class="action">Акція</div>` }
		
		cards_html +=
		`
			<div class="card">
				${action}
				<img src="${card.image}" class="card-img-top">
				<div class="card-body">
					<h6 class="card-title">${card.name}</h6>
					<ul class="list-group list-group-flush">
						<li class="list-group-item"><b>Виробник:</b> <span>${card.developer}</span></li>
						<li class="list-group-item"><b>Відгуків:</b> <span>${card.reviews}</span></li>
						<li class="list-group-item"><b>Ціна:</b> <span>${card.price}₴</span></li>
					</ul>
				</div>
				<div class="card-body price">
					<a href="#" class="card-link">В корзину</a>
					<a href="#" class="card-link">Придбати</a>
				</div>
			</div>
		`
	} )
	
	cards_block.innerHTML = cards_html;
}


function redrawCards(filter){
	
	let new_cards = phones.slice();
	
	if( filter.name.length > 0 ){
		new_cards = new_cards.filter( function(phone){
			return phone.name.includes(filter.name)
		} )
	}
	
	if(filter.developer.length > 0 ){
		new_cards = new_cards.filter( function(phone){
			return phone.developer === filter.developer
		} )
	}
	
	if(filter.min_price > 0){
		new_cards = new_cards.filter( function(phone){
			return phone.price >= filter.min_price;
		} )
	}
	
	if(filter.max_price > 0){
		new_cards = new_cards.filter( function(phone){

			return phone.price <= filter.max_price;
		} )
	}
	
	if(filter.order.length > 0 && filter.order === "price"){
		new_cards = new_cards.sort( function(a, b){
			return a.price - b.price
		} )
	}
	
	if(filter.order.length > 0 && filter.order === "reviews"){
		new_cards = new_cards.sort( function(a, b){
			return a.reviews - b.reviews
		} )
	}
	
	drawCards(new_cards)
}

const filter = JSON.parse( localStorage.getItem("filter") );

if(filter){
	redrawCards(filter)
} else {
	drawCards(phones)
}





