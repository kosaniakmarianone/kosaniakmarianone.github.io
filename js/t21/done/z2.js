function drawCard(){
	const card_num = document.getElementById('card_num').value;
	
	const card_color = document.getElementById('card_color').value;
	
	const card_bg = document.getElementById('card_bg').value;
	
	if( card_num.length > 0 && card_num.length > 0 && card_num.length > 0 ){
		const id = `card_${card_num}`;
		
		const card = document.getElementById(id);
		
		card.setAttribute("style", `color: ${card_color}; background: ${card_bg}`);
		
	}
}