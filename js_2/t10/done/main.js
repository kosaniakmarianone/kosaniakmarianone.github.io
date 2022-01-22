const test =  {
  message: 'Hello Vue.js!',
  kek: 2,
  lol: 10,
  products: ["one", "two"]
};

const CardProduct = {
  props: ['todo'],
  template: `<li>{{ todo }}</li>`
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
    CardProduct
  }
}

Vue.createApp(app).mount('#app');
