let pupils = [
    {
        group: 'Сихів',
        name: 'Олександр Завербний',
        kurs: 'https://mrsasha101.github.io/kurs/index.html',
        mark: 95
    },
	{
        group: 'Надія',
        name: 'Нікіта Руденський',
        kurs: 'https://murrcitop.github.io/t100/',
        mark: 'дописує'
    },
	{
        group: 'Сихів',
        name: 'Христина Ружила',
        kurs: 'https://kookich022.github.io/index.html',
        mark: 100
    },
	{
        group: 'Надія',
        name: 'Василь Якубовський',
        kurs: 'https://vasylyakubovski.github.io/test/1.html',
        github: 'https://github.com',
        mark: 80
    },
	{
        group: 'Надія',
        name: 'Олійник Володимир',
        kurs: 'https://vov4ik2009.github.io/test/index.html',
        mark: 90
    },
	{
        group: 'Надія',
        name: 'Сергій Прокопишин',
        kurs: 'https://sergiiprokopyshun.github.io/test2/index.html',
        mark: 80
    },
	{
        group: 'Надія',
        name: 'Максимович Данило',
        kurs: 'https://danylogamer.github.io/%D1%82%D0%B5%D1%81%D1%82/index.html',
        mark: 85
    },
	{
        group: 'Надія',
        name: 'Максимович Дмитро',
        kurs: 'https://danylogamer.github.io/%D1%82%D0%B5%D1%81%D1%82/index.html',
        mark: 80
    },
	{
        group: 'Надія',
        name: 'Якубовський Василь',
        kurs: 'https://vasylyakubovski.github.io/test/1.html',
        mark: 85
    },
	{
        group: 'Надія',
        name: 'Марко Гадяк',
        kurs: 'https://cayene.github.io/курсова робота/index.html',
        mark: 'дописує'
    },
	{
        group: 'Сихів',
        name: 'Івасько Володимир',
        kurs: 'https://ivasko02.github.io/hhhhhhh.html',
        mark: 'дописує'
    },
	{
        group: 'Надія',
        name: 'Дмитро Пілецький',
        kurs: 'https://dima-studylink.github.io/Test/z1.html',
        mark: 'дописує'
    },
	{
        group: 'Сихів',
        name: 'Міц Софія',
        kurs: 'https://sofia-studylink.github.io/',
        mark: 'дописує'
    },
	{
        group: 'Надія',
        name: 'Сущик Софія',
        kurs: '',
        mark: 'немає v1'
    },
	{
        group: 'Надія',
        name: 'Лабяк Анастасія',
        kurs: '',
        mark: 'немає v1'
    },
	{
        group: 'Надія',
        name: 'Козак Анастасія',
        kurs: '',
        mark: 'немає v1'
    },
	{
        group: 'Надія',
        name: 'Денис Соколов',
        kurs: '',
        mark: 'немає v1'
    },
	{
        group: 'Надія',
        name: 'Петро Зварич',
        kurs: '',
        mark: 'немає v1'
    }
	
	
]

function sort(type){
    switch (type){
        case 'name':
            pupils = pupils.sort( (a,b) => {
                if(a.name > b.name){
                    return 1 
                 }else{
                    return -1
                 }
            });
			
            addInfo()
            break;
        case 'group':
            pupils = pupils.sort( (a,b) => {
                if(a.group > b.group){
                    return 1 
                }else{
                    return -1
                }
            });
            addInfo()
            break;
        case 'mark':
            pupils = pupils.sort( (a,b) => b.mark - a.mark);
            addInfo()
            break;
        default:
            return addInfo()
    }
}



function addInfo(){
    let pupilHtml = '';
    pupils.map( (pupil, index) => {
        pupilHtml +=
        `<tr>
            <td>${index + 1}</td>
            <td>${pupil.group}</td>
            <td>${pupil.name}</td>
            <td><a href='${pupil.kurs}'>Перейти</a></td>
            <td><b class='mark'>${pupil.mark}</b></td>
        </tr>`
    })

    const table = document.querySelector('#table');
    table.innerHTML = pupilHtml;
}
sort('group');

function mymarks(){
	const marks = document.querySelectorAll('.mark');
	marks.forEach( e => {
		 
		console.log(e.innerText)
		 if(parseInt(e.innerText) >= 90){ 
			e.style = 'color: lime';
		 }
		 if(parseInt(e.innerText) >= 80 && parseInt(e.innerText) < 90){ 
			e.style = 'color: green';
		 }
		 if(parseInt(e.innerText) >= 70 && parseInt(e.innerText) < 80){ 
			e.style = 'color: navy';
		 }
		 if(e.innerText === 'дописує'){ 
			e.style = 'color: orange';
		 }
		 if(e.innerText === 'немає v1'){ 
			e.style = 'color: red';
		 }
		
	})
}

mymarks();