const data = {
    message: "Hello vue.js",
    products: [
        {
            id: 0,
            name: "Google Pixel 4 XL 64GB Black",
            url: "https://content1.rozetka.com.ua/goods/images/big/24330840.jpg",
            display: "6.3",
            camera: "8 Мп",
            acc: "3700",
            price: "14 290"
        },
        {
            id: 0,
            name: "Google Pixel 4 XL 64GB Black",
            url: "https://content1.rozetka.com.ua/goods/images/big/24330840.jpg",
            display: "6.3",
            camera: "8 Мп",
            acc: "3700",
            price: "14 290"
        }
    ]
}
const CardTemplate = {
    props: ['product'],
    template: 
    `
    <div class="card">
        <img :src="product.url" class="card-img-top product-img" alt="...">
        <div class="card-body">
            <h5 class="card-title">{{product.name}}</h5>
        </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item d-flex justify-content-between">
                <span>Діагональ экрана:</span> <span>{{product.display}}</span>
            </li>
            <li class="list-group-item d-flex justify-content-between">
                <span>Фронтальна камера:</span> <span> {{product.camera}}</span>
            </li>
            <li class="list-group-item d-flex justify-content-between">
                <span>Емкість аккумулятора:</span> <span> {{product.acc}} мА</span>
            </li>
            <li class="list-group-item d-flex justify-content-between">
                <span>Ціна:</span> <span> {{product.price}}₴</span>
            </li>
        </ul>
        <div class="card-body d-flex justify-content-end">
            <a href="#" class="btn btn-primary">Додати в корзину</a>
        </div>
    </div>
    `
}
const app = {
    data() { return data },
    components: {
        'card': CardTemplate 
    }
}
Vue.createApp(app).mount('#app')