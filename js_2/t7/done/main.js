class Car{
    constructor(name, year, speed, price){
        this.name = name;
        this.year = year;
        this.speed = speed;
        this.price = price;
    }

    displayName(){
        return `${this.name} ${this.year}`;
    }
}

let car_1 = new Car("car11", 20, 120, 15000);


console.log(car_1.displayName());