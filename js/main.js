const keyboard = {
action:true,
photo:"k_1.jpg",
reviews:204,
price:1399};

const products=document.getElementById('products');

let x=0;
let cards_text = ``;
for(i=0; i<keyboard.length; i++ ){

	let isaction=``;
	let point=0;
	point +=keyboard[i].reviews/2;
	let res=max-keyboard[i].price;

	if(keyboard[i].action){
		isAction=`<div class="action">Акція</div>`
		point += 100;

	}
	 point += res;

	 cards_text=
	 `
	 <div class="card">
			<div class="header">
				${isAction} </div>
			
			<div class="card_image">
				<img src="${keyboard[i].photo}">
			</div>
			
			<div class="card_info">
				<div class="${keyboard[i].name}">
					
				</div>
				
				<div class="reviews">
					${keyboard[i].reviews} відгуки
				</div>
				
				<div class="price">
					${keyboard[i].price}
				</div>
			</div>
		</div>
	</div>
	
	`;
}

products.innerHTML = cards_text;

	console.log(keyboard);