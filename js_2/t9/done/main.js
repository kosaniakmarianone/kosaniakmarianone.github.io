const test =  {
    title: 'Hello Vue.js!',
    clicks: 0,
    isAdmin: false,
    users: []
};

const MyFirstVueApp = {
    data() {
      //State або головні значення які будуть відображатись або впливати на показ контенту на сторінці
      return test
    },
    methods: {
      //Список медотів(функцій) які будуть використовуватись
      clickMethod() {
        this.clicks++;
      }
    },
    mounted() {
      // Дії які слід виконати 1 раз як тільки сторінка завантажиться
      console.log("Hello vue!");
      db.collection("users").get().then( res => {
          res.forEach((doc) => {
              const user = doc.data();
              user.id = doc.id;
              this.users.push(user);
              console.log(user)
          });
      });
    }
}

Vue.createApp(MyFirstVueApp).mount('#app');