const data =  {
  message: 'Hello Vue.js!',
  social_1: { 
    img: "https://castironsteak.com/wp-content/uploads/2016/01/google-square.jpg",
    name: "Google"
  },
  social_2: { 
    img: "https://cdn2.downdetector.com/static/uploads/logo/FB-f-Logo__blue_512.png",
    name: "Facebook"
  },
  socials: [
    { 
      img: "https://castironsteak.com/wp-content/uploads/2016/01/google-square.jpg",
      name: "Google"
    },
    { 
      img: "https://cdn2.downdetector.com/static/uploads/logo/FB-f-Logo__blue_512.png",
      name: "Facebook"
    }
  ],
};

const SocialsComponent = {
  props: ['social'],
  template: `
  <div class="card" style="width: 200px; padding: 10px; margin: 10px;">
    <h2 class="text-center">{{social.name}}</h2>
    <img v-bind:src="social.img" style='width:100px; height: 100px; margin:0 auto;'>
  </div>`
};



const app = {
  data() {
    return data
  },
  methods: {
   
  },
  components: {
    SocialsComponent
  }
}

Vue.createApp(app).mount('#app');
