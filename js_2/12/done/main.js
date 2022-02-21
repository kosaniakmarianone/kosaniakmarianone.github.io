const test =  {
  message: 'Hello Vue.js!',
  test: 0,
  products: [
    {name: 'one'},
    {name: 'two'}, 
    {name: 'two'}, 
    {name: 'two'}, 
    {name: 'two'},
    {name: 'two'},
    {name: 'two'},
    {name: 'two'}
  ]
};

const CardProduct = {
  props: ['todo'],
  template: 
  `
  <div class="card" style="width: 18rem;">
      <img src="https://content1.rozetka.com.ua/goods/images/big/24330840.jpg" class="card-img-top product-img" alt="...">
      <div class="card-body">
        <h5 class="card-title">Google Pixel 4 XL 64GB Black</h5>
      </div>
      <ul class="list-group list-group-flush">
          <li class="list-group-item d-flex justify-content-between">
            <span>Діагональ экрана:</span> <span>6.3</span>
          </li>
          <li class="list-group-item d-flex justify-content-between">
            <span>Фронтальна камера:</span> <span> 8 Мп</span>
          </li>
          <li class="list-group-item d-flex justify-content-between">
              <span>Емкість аккумулятора:</span> <span> 3700 мА</span>
          </li>
      </ul>
      <div class="card-body d-flex justify-content-end">
          <a 
            class="btn" 
            :class="{'btn-success': todo.name == 'one', 'btn-primary': todo.name != 'one'}" 
            @click="testClick(todo)"
            >Додано</a>
      </div>
  </div>
  `,
  methods: {
    testClick(data){
      data.name = 'one';
      test.test++;
      console.log('test click ', test.test)
    }
  }
};

const app = {
  data() {
    return test
  },
  methods: {
    test() {
      this.message = 3
    } 
  },
  components: {
    'card': CardProduct
  }
}

Vue.createApp(app).mount('#app');
