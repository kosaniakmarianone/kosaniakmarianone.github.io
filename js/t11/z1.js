const monthName = prompt('Календар для місяця - ');

const day_start = Number( prompt('Номер дня у тижні') );

const month = document.getElementById('month');
const monthText = document.getElementById('monthName');
monthText.innerText = `Календар для ${monthName}`;

let days = ``;

let month_days = 0;

if( 
	monthName == 'січня' || monthName == 'березня' || monthName == 'травня' || monthName == 'липня' ||
	monthName == 'серпня' || monthName == 'жовтня' || monthName == 'грудня'
	){
		
	month_days = 31;
	
} else if( monthName == 'квітня' || monthName == 'червня' || monthName == 'вересня' || monthName == 'листопада'){
		
	month_days = 30;
	
} else if( monthName == 'лютого' ){
	month_days = 28;
}


for( i=1; i < 36 ; i++ ){
	
	if( i >= day_start && i < month_days + day_start ){
		if( i % 7 == 0 || (i + 1) % 7 == 0 ){
			days += `<div class="day free">${i - day_start + 1} <br> ${monthName}</div>`;
		}else {
			days += `<div class="day">${i - day_start + 1} <br> ${monthName}</div>`;
		}
	} else{
		days += `<div class="day empty"></div>`;
	}

}

month.innerHTML = days;