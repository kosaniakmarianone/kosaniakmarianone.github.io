class Order {
    constructor(product_name, product_price, user_email, count, delivery){
        this.product_name = product_name;
        this.product_price = product_price;
        this.user_email = user_email; 
        this.count = count;
        this.delivery = delivery;
        // Наступні 2 поля формуються автоматично, а не передаються як параметри.
        this.total_price = this.getTotalPrice(); // загальна ціна замовлення
        this.submitted = false; // За замовчуванням, тобто при створенні нового об'єкту = false. Але це значння можна буде змінити в майбутньому
    }

    getTotalPrice(){
        let deliveryPrice;

        if(this.delivery == "Нова Пошта"){
            deliveryPrice = 70;
        }
        else if(this.delivery == "Укр Пошта"){
            deliveryPrice = 60;
        }
        else if(this.delivery == "Кур'єр"){
            deliveryPrice = 120;
        }
        else{
            deliveryPrice = 120; //стандартна ціна доставки або кур'єр за замовчуванням
        }

        return this.product_price * this.count + deliveryPrice;
    }

    saveOrder(){
        db.collection("orders-t8").add({
            product_name:  this.product_name, 
            product_price: this.product_price,
            user_email:    this.user_email,
            count:         this.count,
            delivery:      this.delivery,
            total_price:   this.total_price,
            submitted:     this.submitted,
        });
    }
}

function makeOrder(){
    //Формуємо новий об'єкт order із значень введених у формі
    let order = new Order(
        document.getElementById("product_name").value,
        Number(document.getElementById("product_price").value), //Усі числові поля переводимо у число щоб уникнути помилок під час обчислень. 
        document.getElementById("user_email").value,
        Number(document.getElementById("count").value),
        document.getElementById("delivery").value
    );

    console.log(order);

    //Зберігаємо замовлення у базі данних
    order.saveOrder();

    //Додаатково можна додати очищення форми та відображення повідомлення від сайту
}