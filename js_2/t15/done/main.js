document.addEventListener('DOMContentLoaded', async function(){   

    let home =     await axios.get("templates/home.html");
    let products = await axios.get("templates/products.html");
    let orders =   await axios.get("templates/orders.html");
    let notfound = await axios.get("templates/404.html");
    let login = await axios.get("templates/login.html");

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

    const Login = {
        template: login.data,
        methods: {
            googleAuth(){
                console.log("auth started...")
                firebase.auth()
                .signInWithPopup(provider)
                .then( result => {
                    const user = result.user;
                    console.log(result)
                    console.log(user)
                })
                .catch((error) => {
                    console.log(error)
                });
            } 
        }
    };

    const routes = {
        '/': Home,
        '/home': Home,
        '/products': Products,
        '/orders': Orders,
        '/not-found': NotFound,
        '/login': Login,
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