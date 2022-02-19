document.addEventListener('DOMContentLoaded', async function(){   

    let home =     await axios.get("templates/home.html");
    let products = await axios.get("templates/products.html");
    let orders =   await axios.get("templates/orders.html");
    let notfound = await axios.get("templates/404.html");

    const data =  {
        message: 'Hello Vue.js!',
        currentPath: window.location.hash,
    };

    const Home = {
        template: home.data,
    };

    const NotFound = {
        template: notfound.data
    };

    const Products = {
        template: products.data
    };

    const Orders = {
        template: orders.data
    };

    const routes = {
        '/': Home,
        '/home': Home,
        '/products': Products,
        '/orders': Orders,
        '/not-found': NotFound,
    }

    const app = {
        data() {
            return data
        },
        methods: {
            test() {
                this.message = 3
            } 
        },
        components: {
            
        },
        computed: {
            currentView() {
                return routes[this.currentPath.slice(1) || '/'] || NotFound
            }
        },
        mounted() {
            window.addEventListener('hashchange', () => {
                this.currentPath = window.location.hash
            })
        }
    }
    Vue.createApp(app).mount('#app');
})