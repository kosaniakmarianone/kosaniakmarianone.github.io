const keyboards = [ 
    {
        action: true,
        photo: "k_1.jpg",
        name: "Клавіатура дротова Logitech 2031J",
        reviews: 204,
        price: 800
    },
    {
        action: false,
        photo: "https://cdn.shopify.com/s/files/1/1920/0265/products/ZT_Keyboard_Silver_Bezel_transparent_background_-_squared_600x600.jpg?v=1571342079",
        name: "Клавіатура Cougar Vantar",
        reviews: 6,
        price: 1286
    },
    {
        action: true,
        photo: "https://i.pcmag.com/imagery/roundups/00aE5K1WsINRBBPjHLRHbXV-1..1569470766.jpg",
        name: "Клавіатура дротова Logitech 2031J",
        reviews: 204,
        price: 1199
    },
    {
        action: false,
        photo: "https://www.lenovo.com/medias/4Y40X49493-01-500x400.png?context=bWFzdGVyfHJvb3R8MTE2NjEwfGltYWdlL3BuZ3xoYTkvaDdiLzExMDQ1MTIzMjYwNDQ2LnBuZ3w1NDYyNzllMzJiZTFlYjEzZDU2ODYyOTRiNDMyNGRmODkyZDA2OTI2OTMyOTI2ODljMjQ4ZWYwMThjNWJkNWIy",
        name: "Клавіатура Cougar Vantar",
        reviews: 6,
        price: 1700
    },
    {
        action: true,
        photo: "k_1.jpg",
        name: "Клавіатура дротова Logitech 2031J",
        reviews: 204,
        price: 1199
    },
    {
        action: false,
        photo: "k_2.jpg",
        name: "Клавіатура Cougar Vantar",
        reviews: 6,
        price: 1286
    }
];

const products = document.getElementById('products');

let max = keyboards[0].price;

for( i = 0; i < keyboards.length; i++ ){

    if( keyboards[i].price > max ){
        max = keyboards[i].price;
    }
}


let cards_text = ``;

for( i = 0; i < keyboards.length; i++ ){

    let badge = '';
    let points = 0;

    if( keyboards[i].action == true ){
        badge = '<div class="action">Акція</div>';
        points += 100;
    }

    points += keyboards[i].reviews/2; 

    let res = max - keyboards[i].price;

    points += res;

    cards_text += 
    `
    <div>
        <h2 align="center">${points}</h2>
        <div class="card">
            <div class="header">
                ${badge}
            </div>
            
            <div class="card_image">
                <img src=${keyboards[i].photo} alt="">
            </div>
            
            <div class="card_info">
                <div class="name">
                    ${keyboards[i].name}
                </div>
                
                <div class="reviews">
                    ${keyboards[i].reviews} відгуки
                </div>
                
                <div class="price">
                    ${keyboards[i].price}&#8372;
                </div>
            </div>
        </div>
    </div>
    `;
}




products.innerHTML = cards_text;

