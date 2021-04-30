const slides = document.querySelector('.slides');
const lisdesNum = slides.querySelectorAll('.slide');

function slideLeft(){
	const prev = getMargin();
	
	if(prev >= -((lisdesNum.length - 2) * 600)){
		slides.style.marginLeft = `${prev - 600}px`;
	} else{
		direction = 'right'
	}
}

function slideRight(){
	const prev = getMargin();
	
	if( prev < 0 ){
		slides.style.marginLeft = `${prev + 600}px`;
	} else{
		direction = 'left'
	}
}

function getMargin(){
	return Number(slides.style.marginLeft.replace('px', '')) || 0;
}

let direction = 'left';

setInterval(function(){
	if(direction === 'left'){
		slideLeft()
	}
	if(direction === 'right'){
		slideRight()
	}
}, 2000)

