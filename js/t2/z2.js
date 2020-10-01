const warranty = 350;

const delivery = 60;

const product = 4000;

const amount = 3;

const total = (warranty + product) * amount + delivery;

const name = 'Петро';

const productName = 'Airpods 2';

const warrantyTime = 1;


console.log(`Вітаю, ${name}! Ваше замовлення:

${productName} за ціною - ${product}грн
Гарантія на ${warrantyTime} рік вартістю - ${warranty}грн
Вартість доставки - ${delivery}грн

прийнято та буде оброблено протягом 24 години.

Загальна вартість замовлення - ${total}грн`)



