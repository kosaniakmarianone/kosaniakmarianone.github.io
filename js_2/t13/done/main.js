document.addEventListener('DOMContentLoaded', async function(){
    let card_template = await axios.get("card-template.html");
    
    console.log(card_template)
    console.log(card_template.data)

    const data =  {
        message: 'Hello Vue.js!',
        products: []
    };

    const CardProduct = {
        props: ['product'],
        template: card_template.data,
        methods: {
            testClick(){
                console.log(this.product);
            }
        }
    };

    const app = {
        data() {
            return data
        },
        methods: {
            getProducts(){
                db.collection("products").get().then( res => {
                    this.products = [];  //очишуємо коментарі при їх новому завантаженні
                    res.forEach((doc) => {
                          const product = doc.data();
                          product.id = doc.id;
                          this.products.push(product);
                          console.log(product)
                      });
                  });
            }
        },
        components: {
            'card': CardProduct
        },
        mounted() {
            // Витягуємо товари з бази данних при 1-му завантаженні
            this.getProducts()
          }
    }
    Vue.createApp(app).mount('#app');
})