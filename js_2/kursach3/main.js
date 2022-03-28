document.addEventListener('DOMContentLoaded', async function(){   

    //витягуємо темплейти
    let home = await axios.get("templates/home.html");
    let login = await axios.get("templates/login.html");
    let addProduct = await axios.get("templates/addProduct.html");
    let allProducts = await axios.get("templates/allProducts.html");
    let productCard = await axios.get("templates/productCard.html");

    //Основна інформація для spa (сайту)
    const data =  {
        message: 'Hello Vue.js!',
        currentPath: window.location.hash,
        user: {},
        signIn: false,
        logged: false,
        admin: false,
        newProductImage: "",
        products: []
    };

    //Компоненти
    const Home = {
        template: home.data,
    };

    const Login = {
        template: login.data,
        props: ['signIn'],
        methods: {
            googleAuth(){
                firebase.auth()
                .signInWithPopup(provider)
                .then( result => {
                    console.log(result)
                    const user = result.user;

                    const new_user = {
                        displayName: user.displayName,
                        email: user.email,
                        photo: user.photoURL
                    };
                    data.user = new_user;
                    data.logged = true;
                    this.$root.$forceUpdate();
                    window.location.hash = "/home";

                    this.checkAdmin(user.email);
                    console.log(new_user);
                })
                .catch( error => {
                    console.log(error)
                });
            },
            signUpWithPassword(){
                console.log('signUpWithPassword');
                const email = document.getElementById("user-email").value;
                const password = document.getElementById("user-password").value;
                console.log(email);
                console.log(password);

                firebase.auth().createUserWithEmailAndPassword(email, password)
                .then((userCredential) => {
                    var user = userCredential.user;

                    const new_user = {
                        displayName: user.displayName,
                        email: user.email,
                        photo: user.photoURL
                    };
                    data.user = new_user;
                    data.logged = true;
                    this.$root.$forceUpdate();
                    window.location.hash = "/home";

                    this.checkAdmin(user.email);
                    console.log(new_user);
                })
                .catch((error) => {
                    var errorCode = error.code;
                    var errorMessage = error.message;
                    console.log(errorCode);
                    console.log(errorMessage);
                });
            },
            signInWithPassword(){
                const email = document.getElementById("user-email").value;
                const password = document.getElementById("user-password").value;
                console.log(email);
                console.log(password);

                firebase.auth().signInWithEmailAndPassword(email, password)
                .then((userCredential) => {
                    var user = userCredential.user;

                    const new_user = {
                        displayName: user.displayName,
                        email: user.email,
                        photo: user.photoURL
                    };
                    data.user = new_user;
                    data.logged = true;
                    this.$root.$forceUpdate();
                    window.location.hash = "/home";

                    this.checkAdmin(user.email);
                    console.log(new_user);
                })
                .catch((error) => {
                    var errorCode = error.code;
                    var errorMessage = error.message;
                    console.log(errorCode);
                    console.log(errorMessage);
                });
            },
            checkAdmin(email){
                db.collection("admins")
                .get()
                .then( res => {
                    const adminEmails = [];
                    res.forEach( e => adminEmails.push(e.data().email) );

                    if(adminEmails.includes(email)){
                        data.admin = true;
                        this.$root.$forceUpdate();
                        console.log("Welcome Admin!!!");
                    }
                    else if(data.admin == true){
                        data.admin = false;
                        this.$root.$forceUpdate();
                    }
                })
                console.log("Check for admin!", email)
            }
        }
    };

    const AddProduct = {
        template: addProduct.data,
        props: ['newProduct'],
        methods: {
            addProductToDB(){
                const newProduct = {
                    name: document.getElementById('product_name').value,
                    url: document.getElementById('product_img').value,
                    price: document.getElementById('product_price').value
                }

                db.collection("products")
                .add(newProduct)
                .then(() => console.log('product added to db'))
            }
        } 
    }

    const ProductCard = {
        name: "product-card",
        template: productCard.data,
        props: ['product'],
        methods: {
            deleteProduct(id){
                console.log(id);
            }
        }
    }

    const AllProducts = {
        template: allProducts.data,
        methods: {
            getAllProducts(){
                console.log("GET ALL PRODUCTS!!!!");
                db.collection("products")
                .get()
                .then( res => {
                    res.forEach( element => {
                        const product = {
                            ...element.data(),
                            id: element.id
                        };
                        data.products.push(product)
                    })
                    console.log(data.products);
                    this.$forceUpdate();
                })
            }
        },
        components: {
            ProductCard
        },
        mounted: function(){
            this.getAllProducts();
        }
    }

    //Роути (які копоненти відображати)
    const routes = {
        '/': Home,
        '/home': Home,
        '/login': Login,
        '/addproduct': AddProduct,
        '/allproducts': AllProducts
    }

    const app = {
        data() { return data },
        methods: {
            logOut(){
                firebase.auth().signOut().then(() => {
                    data.logged = false;
                    data.admin = false;
                    this.$forceUpdate();
                    window.location.hash = "/login";
                }).catch((error) => {
                    console.log(error)
                });
            }
        },
        components: { },
        computed: {
            currentView() {
                return routes[this.currentPath.slice(1) || '/'] || NotFound
            }
        },
        mounted() {
            window.addEventListener('hashchange', () => {
                this.currentPath = window.location.hash
            });
        }
    }
    Vue.createApp(app).mount('#app');
})