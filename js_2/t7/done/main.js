class Phone {
    constructor(name, company, operating_system, screen, price, battery, color){
        this.name = name;
        this.company = company;
        this.operating_system = operating_system; 
        this.screen = screen;
        this.price = price;
        this.battery = battery; 
        this.color = color;
    }

    displayTitle(){
        return `${this.company} ${this.name} ${this.price}`;
    }

    credit_month_4(){
        let month_additional_cost = this.price*(4/100);
        let munth_total = 4;
        let total_price = month_additional_cost * munth_total + this.price;
        return `Total price after 4 month  - $${total_price}`;
    }

    credit_month_6(){
        let month_additional_cost = this.price*(5/100);
        let munth_total = 5;
        let total_price = month_additional_cost * munth_total + this.price;
        return `Total price after 6 month  - $${total_price}`;
    }

    credit_month_12(){
        let month_additional_cost = this.price*(6/100);
        let munth_total = 12;
        let total_price = month_additional_cost * munth_total + this.price;
        return `Total price after 12 month - $${total_price}`;
    }
}

let phone_1 = new Phone("IPhone 11", "Apple", "IOS", "6.1", 700, 3046, "black");
let phone_2 = new Phone("IPhone 12", "Apple", "IOS", "6.2", 800, 3246, "white");

// Клас Phone це конструктор для створення об'єктів. У таких класах можна створювати власні методи.
// Ці методи можуть опрацьовувати пареметри внесені підчас створення нового об'єкту
// Таким чином можна створювати медоди для обчисень формул та виведення інформацію які можна багаторазово використовувати

// car_1 - це новий об'єкт cтворений за допомогою класу Phone
// Можна створити скільки завгодно нових об'єктів за допоомогою цього класу і всі вони матимуть медоти присвоєні цьому класу

console.log(phone_1.displayTitle());
console.log(phone_1.credit_month_4());
console.log(phone_1.credit_month_6());
console.log(phone_1.credit_month_12());

let all_phones = [ phone_1, phone_2 ]; 

function addNewPhone(){
    console.log('click');
    let new_phone = new Phone(
        document.getElementById("name").value, 
        document.getElementById("company").value, 
        document.getElementById("operating_system").value, 
        Number(document.getElementById("screen").value), 
        Number(document.getElementById("price").value), 
        Number(document.getElementById("battery").value), 
        document.getElementById("color").value
    );
    all_phones.push(new_phone);
    drawPhones();
}

function drawPhones(){
    let table_box = document.getElementById("phones_table");
    table_box.innerHTML = '';

    all_phones.forEach((phone, idx) => {
        let new_tr = document.createElement("tr");
        new_tr.innerHTML = 
        `
            <th scope="row">${idx+1}</th>
            <td>${phone.name}</td>
            <td>${phone.company}</td>
            <td>${phone.operating_system}</td>
            <td>${phone.screen}</td>
            <td>${phone.price}</td>
            <td>${phone.battery}</td>
            <td>${phone.color}</td>
            <td>
                <button class="btn btn-sm btn-primary" onclick="alert('${phone.displayTitle()}')">
                    Main Info
                </button>
            </td>
            <td>
                <button class="btn btn-sm btn-primary" onclick="alert('${phone.credit_month_4()}')">
                    4 month
                </button>
            </td>
            <td>
                <button class="btn btn-sm btn-primary" onclick="alert('${phone.credit_month_6()}')">
                    6 month
                </button>
            </td>
            <td>
                <button class="btn btn-sm btn-primary" onclick="alert('${phone.credit_month_12()}')">
                    12 month
                </button>
            </td>
        `;
        console.log(new_tr);

        table_box.appendChild(new_tr);
    });
    
}

drawPhones();