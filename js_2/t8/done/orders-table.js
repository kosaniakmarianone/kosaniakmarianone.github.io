class Admin {
    constructor(){
    }

    static drawOrders(){
        document.getElementById("oreders_table").innerHTML = "";

        db.collection("orders-t8")
        .get()
        .then(res => {
            let index = 1;
            res.forEach(doc => {
                let order = {...doc.data(), id: doc.id };

                console.log(order)
                this.drawOrder(order, index);
                index++;
            });
        });
    }

    static drawOrder(order, index){
        //Створюємо рядок та стовпці для таблиці у якості html-елементів 
        const order_tr     = document.createElement('tr');
        const number_td    = document.createElement('td');
        const name_td      = document.createElement('td');
        const price_td     = document.createElement('td');
        const email_td     = document.createElement('td');
        const count_td     = document.createElement('td');
        const total_p_td   = document.createElement('td');
        const delivery_td  = document.createElement('td');
        const submited_td  = document.createElement('td');
        const submit_td    = document.createElement('td');
        const mail_td    = document.createElement('td');
        
        const mail_btn   = document.createElement('a');
        const submit_btn   = document.createElement('button');
        
        //Заповнюємо html-елементи відповідними текстами
        number_td.innerText   = index;
        name_td.innerText     = order.product_name;
        price_td.innerText    = order.product_price;
        email_td.innerText    = order.user_email;
        count_td.innerText    = order.count;
        total_p_td.innerText  = order.total_price;
        delivery_td.innerText = order.delivery;
        submited_td.innerText = order.submitted;
        
        submit_btn.innerText   = "Submit";
        mail_btn.innerText     = "Mail to customer";

        //Додаємо стилі до кнопок
        submit_btn.classList.add("btn");
        submit_btn.classList.add("btn-sm");
        submit_btn.classList.add("btn-warning");
        
        mail_btn.classList.add("btn");
        mail_btn.classList.add("btn-sm");
        mail_btn.classList.add("btn-primary");

        mail_btn.href = `mailto:${order.user_email}?subject=Order%20submited&body=Test%20body.%0AWith%20many%20text.`;

        //додаємо стовпці у рядок
        order_tr.appendChild(number_td);
        order_tr.appendChild(name_td);
        order_tr.appendChild(price_td);
        order_tr.appendChild(email_td);
        order_tr.appendChild(count_td);
        order_tr.appendChild(total_p_td);
        order_tr.appendChild(delivery_td);
        order_tr.appendChild(submited_td);

        submit_btn.addEventListener('click', function(){ 
            Admin.submitOrder(order.id) 
        })
        
        submit_td.appendChild(submit_btn);
        mail_td.appendChild(mail_btn);

        order_tr.appendChild(submit_td);
        order_tr.appendChild(mail_td);
        
        //додаємо рядок у таблицю
        document.getElementById("oreders_table").appendChild(order_tr);
    }

    static submitOrder(order_id){
        db.collection("orders-t8")
        .doc(order_id)
        .update({ submitted: true })
        .then(function(res) {
            console.log("Order updated")
            Admin.drawOrders();
        });
    }
}

Admin.drawOrders();