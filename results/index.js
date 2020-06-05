let pupils = [
    {
        group: 'Group2',
        name: 'A',
        kurs: 'url2',
        github: 'url2',
        mark: 1
    },
    {
        group: 'Group',
        name: 'B',
        kurs: 'https://github.com',
        github: 'https://github.com',
        mark: 3
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
            <td><a href='${pupil.github}'>Перейти</a></td>
            <td>${pupil.mark}</td>
        </tr>`
    })

    const table = document.querySelector('#table');
    table.innerHTML = pupilHtml;
}
sort('group');