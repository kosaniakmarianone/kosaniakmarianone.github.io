const products = [
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
        id: 1,
        name: "Мобильный телефон Apple iPhone 13 Pro 1TB Sierra Blue",
        url: "https://content.rozetka.com.ua/goods/images/big/221208611.jpg",
        display: "6.1",
        camera: "36 Мп",
        acc: "2799",
        price: "55 999₴"
    },
    {
        id: 2,
        name: "Мобильный телефон Samsung Galaxy Z Fold3 12/512GB Phantom Black",
        url: "https://content2.rozetka.com.ua/goods/images/big/201628829.jpghttps://content.rozetka.com.ua/goods/images/big/221208611.jpg",
        display: "6.2+7,2",
        camera: "36 Мп",
        acc: "4400",
        price: "49 999₴"
    },
    {
        id: 3,
        name: "Мобильный телефон Samsung Galaxy S21 FE 6/128GB Olive",
        url: "https://content2.rozetka.com.ua/goods/images/big/245951012.jpg",
        display: "6.4",
        camera: "28 Мп",
        acc: "4500",
        price: "21 999₴"
    },
    {
        id: 4,
        name: "Смартфон Huawei P20 Lite Nova 3e 128gb Black Seller Refurbished",
        url: "https://content.rozetka.com.ua/goods/images/big/160991508.jpg",
        display: "5.8",
        camera: "28 Мп",
        acc: "3000",
        price: "5 608₴"
    },
    {
        id: 5,
        name: "Мобильный телефон Xiaomi 11T 8/128GB Meteorite Gray",
        url: "https://content.rozetka.com.ua/goods/images/big/220277489.jpg",
        display: "6.6",
        camera: "108 Мп",
        acc: "5000",
        price: "12 499"
    },
    {
        id: 6,
        name: "Мобильный телефон OnePlus Nord 12/256GB Gray Onyx (5011101200)",
        url: "https://content.rozetka.com.ua/goods/images/big/194860140.jpg",
        display: "6.4",
        camera: "48 Мп",
        acc: "4100",
        price: "12 999"
    },
    {
        id: 7,
        name: "(5011101200)Мобильный телефон ZTE RedMagic 6R 8/128GB Cosmos",
        url: "https://content1.rozetka.com.ua/goods/images/big/238782224.jpg",
        display: "6.4",
        camera: "48 Мп",
        acc: "4100",
        price: "12 999"
    }


]
const data = {
    message:'Hello vue.js',
    products : []
}

const CardTemplete = {
    props:['product'],
        template:
    `
    <h1>Card</h1>
    `,
    methods:{
        
        addToCart(product){
            product.added = true;
            console.log('added product', product.id);
        }
    }
}

const app = {
    data(){
        return data
    },
    components: {
        'card': CardTemplete
    },
    methods:{
        getProductsFromDb(){

            db.collection('products')
            .get()
            .then(doc => {
                doc.forEach(element => {
                    this.products.push(element.data())
                    console.log(data)
                });
            })
        }
    },
    created: function(){
        this.getProductsFromDb()
        console.log(2)
    }
    
}
document.addEventListener('DOMContentLoaded', async function(){   
    //витягуємо темплейти
    let home = await axios.get("templates/home.html");
    let login = await axios.get("templates/login.html");

    //Основна інфа для spa(сайту)
    const data =  {
        message: 'Hello Vue.js!',
        currentPath: window.location.hash,
        user: {},
        signIn: false,
        logged: true
    };

    //Components
    const Home = {
        template: home.data,
    };

    const Login = {
        template: login.data,
         methods: {
            googleAuth(){
                console.log("click");
               
                firebase.auth()
                .signInWithPopup(provider)
                .then( result => {
                    console.log(result) 
                    const user = result.user;

                    const new_user = {
                        displayName : user.displayName,
                        email: user.email,
                        photo: user.PhotoURL
                    }
                    data.user = new_user;
                    data.logged = true;
                    this.$root.$forceUpdate();
                    window.location.hash = '/home'

                    console.log(new_user);
                })
                .catch( error => {
                    console.log(error)
                });
            
                //...
            },
            signUpWithPassword(){
                console.log('signUpWithPassword');
                const email = document.getElementById('user-email').value;
                const password = document.getElementById('user-password').value;
                firebase.auth().createUserWithEmailAndPassword(email, password)
                .then((userCredential) => {
                    // Signed in 
                    var user = userCredential.user;
                    const new_user = {
                        displayName : user.displayName,
                        email: user.email,
                        photo: user.PhotoURL
                    };
                    data.user = new_user;
                    data.logged = true;
                    this.$root.$forceUpdate();
                    window.location.hash = '/home'
                    console.log(new_user);
                    // ...
                })
                .catch((error) => {
                    var errorCode = error.code;
                    var errorMessage = error.message;
                    console.log(errrorCode);
                    console.log(errrorMessage);
                    // ..
                });
            },signInWithPassword(){
                const email = document.getElementById("user-email").value;
                const password = document.getElementById("user-password").value;
                console.log(email)
;
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
                    window.location.hash = '/home'
                    console.log(new_user);
                })
                .catch((error) => {
                    var errorCode = error.code;
                    var errorMessage = error.message;
                    console.log(errorCode);
                    console.log(errorMessage);
                });
            }
           
         }
    };
    
    //Routs(які компоненти відображати)
    const routes = {
        '/': Home,
        '/home': Home,
        '/login': Login
    }

    const app = {
        data() {  return data },
        methods: {
            logOut(){
                firebase.auth().signOut().then(() => {
                    // Sign-out successful.
                    data.logged = false
                    this.$root.$forceUpdate();
                    window.location.hash = '/login'
                  }).catch((error) => {
                    // An error happened.
                    console.log(error);
                  });
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