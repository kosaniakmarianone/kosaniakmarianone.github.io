const data =  {
  message: 'Hello Vue.js!',
  products: [
    { 
      url: "https://castironsteak.com/wp-content/uploads/2016/01/google-square.jpg",
      name: "Iphone 13"
    },
    { 
      url: "https://castironsteak.com/wp-content/uploads/2016/01/google-square.jpg",
      name: "Iphone 13"
    }
  ]
};

const ProductComponent = {
  props: ['product'],
  template: `
  <div class="card" style="width: 18rem; margin: 10px;">
      <img v-bind:src="product.url" class="card-img-top" alt="..." style="max-height: 300px; margin: 0 auto;">
      <div class="card-body">
          <h5 class="card-title">{{product.name}}</h5>
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <p class="d-flex justify-content-between">
            <span>Price:</span>
            <span>700$</span>
          </p>
        <a href="#" class="btn btn-primary">Add to cart</a>
      </div>
  </div>
  `
};

const app = {
  data() {
    return data
  },
  methods: {
   
  },
  components: {
    ProductComponent
  },
  mounted() {
    // Витягуємо товари з бази данних
    db.collection("products").get().then( res => {
      this.products = [];  
      res.forEach((doc) => {
            const product = doc.data();
            product.id = doc.id;
            this.products.push(product);
            console.log(product)
        });
    });
  }
}

Vue.createApp(app).mount('#app');
