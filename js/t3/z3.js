let total = 0;

const question1 = prompt("У якому році народився Тарас Шевченко");

if( question1 == 1814 ) { total = total + 1; }

const question2 = confirm("Україна межує з Угорщиною?");

if( question2 ) { total = total + 1; }


const question3 = prompt("Зі скількома країнами межує Україна?");

if( question3 == 7 ) { total = total + 1; }

const question4 = confirm("Говерла найвища вершина України?");

if( question4 ) { total = total + 1; }



alert(`Ви відповіли вірно на ${total} питань`)
