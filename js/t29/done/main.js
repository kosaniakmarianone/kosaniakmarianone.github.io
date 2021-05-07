const slides = document.querySelector('.slides');

function slideLeft(){
    const prev = getMargin();
    if(prev >= -((slides.querySelectorAll('.slide').length -2)* 600)){
        slides.style.marginLeft = `${(prev - 600)}px`;
    }
}

function slideRight(){
    const prev = getMargin();
    if(prev < 0){
        slides.style.marginLeft = `${(prev + 600)}px`;
    }
}

function getMargin(){
    return Number(slides.style.marginLeft.replace('px', '')) || 0;
}
