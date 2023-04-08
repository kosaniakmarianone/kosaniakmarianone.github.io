document.addEventListener('DOMContentLoaded', async function(){
    let card_template = await axios.get("card-template.html");
    
    //console.log(card_template)
    //console.log(card_template.data)

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
            },
            //New
            countTotalPrice(){
                console.log('change')
                let preorderPrice = 0;
                let deliveryPrice = 0;
                let productsPrice = this.product.price * this.product.count;
                if(this.product.preOrder){
                    preorderPrice = productsPrice * 0.05;
                }
                if(this.product.fastDelivery){
                    deliveryPrice = productsPrice * 0.1;
                }
                this.product.totalPrice = productsPrice - preorderPrice + deliveryPrice;
            }
            //New end
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

                        //New
                        product.preOrder = false;
                        product.fastDelivery = false;
                        product.count = 1;
                        product.totalPrice = product.price;
                        //End new

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